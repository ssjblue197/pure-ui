// eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  waitUntil,
} from "@open-wc/testing";
import { getFormControls, serialize } from "../../../dist/pure-ui.js";
import { runFormControlBaseTests } from "../../internal/test/form-control-base-tests.js";
import { sendKeys } from "@web/test-runner-commands"; // must come from the same module
import sinon from "sinon";
import type PInput from "./input.js";

describe("<p-input>", () => {
  it("should pass accessibility tests", async () => {
    const el = await fixture<PInput>(html` <p-input label="Name"></p-input> `);
    await expect(el).to.be.accessible();
  });

  it("default properties", async () => {
    const el = await fixture<PInput>(html` <p-input></p-input> `);

    expect(el.type).to.equal("text");
    expect(el.size).to.equal("medium");
    expect(el.name).to.equal("");
    expect(el.value).to.equal("");
    expect(el.defaultValue).to.equal("");
    expect(el.title).to.equal("");
    expect(el.filled).to.be.false;
    expect(el.pill).to.be.false;
    expect(el.label).to.equal("");
    expect(el.helpText).to.equal("");
    expect(el.clearable).to.be.false;
    expect(el.passwordToggle).to.be.false;
    expect(el.passwordVisible).to.be.false;
    expect(el.noSpinButtons).to.be.false;
    expect(el.placeholder).to.equal("");
    expect(el.disabled).to.be.false;
    expect(el.readonly).to.be.false;
    expect(el.minlength).to.be.undefined;
    expect(el.maxlength).to.be.undefined;
    expect(el.min).to.be.undefined;
    expect(el.max).to.be.undefined;
    expect(el.step).to.be.undefined;
    expect(el.pattern).to.be.undefined;
    expect(el.required).to.be.false;
    expect(el.autocapitalize).to.be.undefined;
    expect(el.autocorrect).to.be.undefined;
    expect(el.autocomplete).to.be.undefined;
    expect(el.autofocus).to.be.undefined;
    expect(el.enterkeyhint).to.be.undefined;
    expect(el.spellcheck).to.be.true;
    expect(el.inputmode).to.be.undefined;
    expect(el.valueAsDate).to.be.null;
    expect(isNaN(el.valueAsNumber)).to.be.true;
  });

  it("should have title if title attribute is set", async () => {
    const el = await fixture<PInput>(html` <p-input title="Test"></p-input> `);
    const input =
      el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.title).to.equal("Test");
  });

  it("should be disabled with the disabled attribute", async () => {
    const el = await fixture<PInput>(html` <p-input disabled></p-input> `);
    const input =
      el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.disabled).to.be.true;
  });

  describe("value methods", () => {
    it("should set the value as a date when using valueAsDate", async () => {
      const el = document.createElement(`p-input`);
      el.type = "date";
      const today = new Date();

      el.valueAsDate = today;

      // Test before we render in the dom
      expect(el.value).to.equal(today.toISOString().split("T")[0]);
      expect(el.valueAsDate.toISOString().split("T")[0]).to.equal(
        today.toISOString().split("T")[0],
      );

      document.body.appendChild(el);

      await elementUpdated(el);

      // Update valueAsDate after we render to make sure it reflects properly
      el.valueAsDate = null;

      await elementUpdated(el);

      expect(el.value).to.equal("");
      expect(el.valueAsDate).to.equal(null);

      // Update again with a real date to make sure it works
      el.valueAsDate = today;

      await elementUpdated(el);

      expect(el.value).to.equal(today.toISOString().split("T")[0]);
      expect(el.valueAsDate.toISOString().split("T")[0]).to.equal(
        today.toISOString().split("T")[0],
      );

      el.remove();
    });

    it("should set the value as a number when using valueAsNumber", async () => {
      const el = document.createElement(`p-input`);
      el.type = "number";
      const num = 12345;

      el.valueAsNumber = num;

      expect(el.value).to.equal(num.toString());
      expect(el.valueAsNumber).to.equal(num);

      document.body.appendChild(el);

      await elementUpdated(el);

      // Wait for render, then update the value
      const otherNum = 4567;
      el.valueAsNumber = otherNum;

      await elementUpdated(el);

      expect(el.value).to.equal(otherNum.toString());
      expect(el.valueAsNumber).to.equal(otherNum);

      // Re-set valueAsNumber and make sure it updates.
      el.valueAsNumber = num;
      await elementUpdated(el);
      expect(el.value).to.equal(num.toString());
      expect(el.valueAsNumber).to.equal(num);

      el.remove();
    });
  });

  it("should focus the input when clicking on the label", async () => {
    const el = await fixture<PInput>(html` <p-input label="Name"></p-input> `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const focusHandler = sinon.spy();

    el.addEventListener("p-focus", focusHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => focusHandler.calledOnce);

    expect(focusHandler).to.have.been.calledOnce;
  });

  describe("when using constraint validation", () => {
    it("should be valid by default", async () => {
      const el = await fixture<PInput>(html` <p-input></p-input> `);
      expect(el.checkValidity()).to.be.true;
    });

    it("should be invalid when required and empty", async () => {
      const el = await fixture<PInput>(html` <p-input required></p-input> `);
      expect(el.reportValidity()).to.be.false;
      expect(el.checkValidity()).to.be.false;
    });

    it("should be invalid when required and disabled is removed", async () => {
      const el = await fixture<PInput>(html`
        <p-input disabled required></p-input>
      `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<PInput>(html`
        <p-input required value="a"></p-input>
      `);

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute("data-required")).to.be.true;
      expect(el.hasAttribute("data-optional")).to.be.false;
      expect(el.hasAttribute("data-invalid")).to.be.false;
      expect(el.hasAttribute("data-valid")).to.be.true;
      expect(el.hasAttribute("data-user-invalid")).to.be.false;
      expect(el.hasAttribute("data-user-valid")).to.be.false;

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: "b" });
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute("data-user-invalid")).to.be.false;
      expect(el.hasAttribute("data-user-valid")).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<PInput>(html` <p-input required></p-input> `);

      expect(el.hasAttribute("data-required")).to.be.true;
      expect(el.hasAttribute("data-optional")).to.be.false;
      expect(el.hasAttribute("data-invalid")).to.be.true;
      expect(el.hasAttribute("data-valid")).to.be.false;
      expect(el.hasAttribute("data-user-invalid")).to.be.false;
      expect(el.hasAttribute("data-user-valid")).to.be.false;

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: "a" });
      await sendKeys({ press: "Backspace" });
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute("data-user-invalid")).to.be.true;
      expect(el.hasAttribute("data-user-valid")).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate><p-input required></p-input></form>
      `);
      const input = el.querySelector<PInput>("p-input")!;

      expect(input.hasAttribute("data-required")).to.be.true;
      expect(input.hasAttribute("data-optional")).to.be.false;
      expect(input.hasAttribute("data-invalid")).to.be.true;
      expect(input.hasAttribute("data-valid")).to.be.false;
      expect(input.hasAttribute("data-user-invalid")).to.be.false;
      expect(input.hasAttribute("data-user-valid")).to.be.false;
    });
  });

  describe("when submitting a form", () => {
    it("should serialize its name and value with FormData", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form><p-input name="a" value="1"></p-input></form>
      `);
      const formData = new FormData(form);
      expect(formData.get("a")).to.equal("1");
    });

    it("should serialize its name and value with JSON", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form><p-input name="a" value="1"></p-input></form>
      `);
      const json = serialize(form) as { a: "1" };
      expect(json.a).to.equal("1");
    });

    it("should submit the form when pressing enter in a form without a submit button", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form><p-input></p-input></form>
      `);
      const input = form.querySelector("p-input")!;
      const submitHandler = sinon.spy((event: SubmitEvent) =>
        event.preventDefault(),
      );

      form.addEventListener("submit", submitHandler);
      input.focus();
      await sendKeys({ press: "Enter" });
      await waitUntil(() => submitHandler.calledOnce);

      expect(submitHandler).to.have.been.calledOnce;
    });

    it("should prevent submission when pressing enter in an input and canceling the keydown event", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form><p-input></p-input></form>
      `);
      const input = form.querySelector("p-input")!;
      const submitHandler = sinon.spy((event: SubmitEvent) =>
        event.preventDefault(),
      );
      const keydownHandler = sinon.spy((event: KeyboardEvent) => {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });

      form.addEventListener("submit", submitHandler);
      input.addEventListener("keydown", keydownHandler);
      input.focus();
      await sendKeys({ press: "Enter" });
      await waitUntil(() => keydownHandler.calledOnce);

      expect(keydownHandler).to.have.been.calledOnce;
      expect(submitHandler).to.not.have.been.called;
    });

    it("should be invalid when setCustomValidity() is called with a non-empty value", async () => {
      const input = await fixture<HTMLFormElement>(html` <p-input></p-input> `);

      input.setCustomValidity("Invalid selection");
      await input.updateComplete;

      expect(input.checkValidity()).to.be.false;
      expect(input.hasAttribute("data-invalid")).to.be.true;
      expect(input.hasAttribute("data-valid")).to.be.false;
      expect(input.hasAttribute("data-user-invalid")).to.be.false;
      expect(input.hasAttribute("data-user-valid")).to.be.false;

      input.focus();
      await sendKeys({ type: "test" });
      await input.updateComplete;
      input.blur();
      await input.updateComplete;

      expect(input.hasAttribute("data-user-invalid")).to.be.true;
      expect(input.hasAttribute("data-user-valid")).to.be.false;
    });

    it("should be present in form data when using the form attribute and located outside of a <form>", async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <p-button type="submit">Submit</p-button>
          </form>
          <p-input form="f" name="a" value="1"></p-input>
        </div>
      `);
      const form = el.querySelector("form")!;
      const formData = new FormData(form);

      expect(formData.get("a")).to.equal("1");
    });
  });

  describe("when resetting a form", () => {
    it("should reset the element to its initial value", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-input name="a" value="test"></p-input>
          <p-button type="reset">Reset</p-button>
        </form>
      `);
      const button = form.querySelector("p-button")!;
      const input = form.querySelector("p-input")!;
      input.value = "1234";

      await input.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, "reset");
      await input.updateComplete;

      expect(input.value).to.equal("test");

      input.defaultValue = "";

      setTimeout(() => button.click());
      await oneEvent(form, "reset");
      await input.updateComplete;

      expect(input.value).to.equal("");
    });
  });

  describe("when calling HTMLFormElement.reportValidity()", () => {
    it("should be invalid when the input is empty and form.reportValidity() is called", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-input required value=""></p-input>
          <p-button type="submit">Submit</p-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });

    it("should be valid when the input is empty, reportValidity() is called, and the form has novalidate", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <p-input required value=""></p-input>
          <p-button type="submit">Submit</p-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.true;
    });

    it("should be invalid when a native input is empty and form.reportValidity() is called", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <input required value=""></input>
          <p-button type="submit">Submit</p-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });
  });

  describe("when the value changes", () => {
    it("should emit p-change and p-input when the user types in the input", async () => {
      const el = await fixture<PInput>(html` <p-input></p-input> `);
      const inputHandler = sinon.spy();
      const changeHandler = sinon.spy();

      el.addEventListener("p-input", inputHandler);
      el.addEventListener("p-change", changeHandler);
      el.focus();
      await sendKeys({ type: "abc" });
      el.blur();
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledThrice;
    });

    it("should not emit p-change or p-input when the value is set programmatically", async () => {
      const el = await fixture<PInput>(html` <p-input></p-input> `);

      el.addEventListener("p-change", () =>
        expect.fail("p-change should not be emitted"),
      );
      el.addEventListener("p-input", () =>
        expect.fail("p-input should not be emitted"),
      );
      el.value = "abc";

      await el.updateComplete;
    });

    it("should not emit p-change or p-input when calling setRangeText()", async () => {
      const el = await fixture<PInput>(html`
        <p-input value="hi there"></p-input>
      `);

      el.addEventListener("p-change", () =>
        expect.fail("p-change should not be emitted"),
      );
      el.addEventListener("p-input", () =>
        expect.fail("p-input should not be emitted"),
      );
      el.focus();
      el.setSelectionRange(0, 2);
      el.setRangeText("hello");

      await el.updateComplete;
    });
  });

  describe('when type="number"', () => {
    it("should be valid when the value is within the boundary of a step", async () => {
      const el = await fixture<PInput>(html`
        <p-input type="number" step=".5" value="1.5"></p-input>
      `);
      expect(el.checkValidity()).to.be.true;
    });

    it("should be invalid when the value is not within the boundary of a step", async () => {
      const el = await fixture<PInput>(html`
        <p-input type="number" step=".5" value="1.25"></p-input>
      `);
      expect(el.checkValidity()).to.be.false;
    });

    it("should update validity when step changes", async () => {
      const el = await fixture<PInput>(html`
        <p-input type="number" step=".5" value="1.5"></p-input>
      `);
      expect(el.checkValidity()).to.be.true;

      el.step = 1;
      await el.updateComplete;
      expect(el.checkValidity()).to.be.false;
    });

    it("should increment by step when stepUp() is called", async () => {
      const el = await fixture<PInput>(html`
        <p-input type="number" step="2" value="2"></p-input>
      `);

      el.stepUp();
      await el.updateComplete;
      expect(el.value).to.equal("4");
    });

    it("should decrement by step when stepDown() is called", async () => {
      const el = await fixture<PInput>(html`
        <p-input type="number" step="2" value="2"></p-input>
      `);

      el.stepDown();
      await el.updateComplete;
      expect(el.value).to.equal("0");
    });

    it("should not emit p-input or p-change when stepUp() is called programmatically", async () => {
      const el = await fixture<PInput>(html`
        <p-input type="number" step="2" value="2"></p-input>
      `);

      el.addEventListener("p-change", () =>
        expect.fail("p-change should not be emitted"),
      );
      el.addEventListener("p-input", () =>
        expect.fail("p-input should not be emitted"),
      );
      el.stepUp();

      await el.updateComplete;
    });

    it("should not emit p-input and p-change when stepDown() is called programmatically", async () => {
      const el = await fixture<PInput>(html`
        <p-input type="number" step="2" value="2"></p-input>
      `);

      el.addEventListener("p-change", () =>
        expect.fail("p-change should not be emitted"),
      );
      el.addEventListener("p-input", () =>
        expect.fail("p-input should not be emitted"),
      );
      el.stepDown();

      await el.updateComplete;
    });
  });

  describe("when using spellcheck", () => {
    it("should enable spellcheck when no attribute is present", async () => {
      const el = await fixture<PInput>(html` <p-input></p-input> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>("input")!;
      expect(input.getAttribute("spellcheck")).to.equal("true");
      expect(input.spellcheck).to.be.true;
    });

    it('should enable spellcheck when set to "true"', async () => {
      const el = await fixture<PInput>(html`
        <p-input spellcheck="true"></p-input>
      `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>("input")!;
      expect(input.getAttribute("spellcheck")).to.equal("true");
      expect(input.spellcheck).to.be.true;
    });

    it('should disable spellcheck when set to "false"', async () => {
      const el = await fixture<PInput>(html`
        <p-input spellcheck="false"></p-input>
      `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>("input")!;
      expect(input.getAttribute("spellcheck")).to.equal("false");
      expect(input.spellcheck).to.be.false;
    });
  });

  describe("when using FormControlController", () => {
    it("should submit with the correct form when the form attribute changes", async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f1">
            <input type="hidden" name="b" value="2" />
            <p-button type="submit">Submit</p-button>
          </form>
          <form id="f2">
            <input type="hidden" name="c" value="3" />
            <p-button type="submit">Submit</p-button>
          </form>
          <p-input form="f1" name="a" value="1"></p-input>
        </div>
      `);
      const form = el.querySelector<HTMLFormElement>("#f2")!;
      const input = document.querySelector("p-input")!;

      input.form = "f2";
      await input.updateComplete;

      const formData = new FormData(form);

      expect(formData.get("a")).to.equal("1");
      expect(formData.get("b")).to.be.null;
      expect(formData.get("c")).to.equal("3");
    });
  });

  describe("when using the getFormControls() function", () => {
    it("should return both native and Pure UI form controls in the correct DOM order", async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <input type="text" name="a" value="1" form="f1" />
          <p-input type="text" name="b" value="2" form="f1"></p-input>
          <form id="f1">
            <input type="hidden" name="c" value="3" />
            <input type="text" name="d" value="4" />
            <p-input name="e" value="5"></p-input>
            <textarea name="f">6</textarea>
            <p-textarea name="g" value="7"></p-textarea>
            <p-checkbox name="h" value="8"></p-checkbox>
          </form>
          <input type="text" name="i" value="9" form="f1" />
          <p-input type="text" name="j" value="10" form="f1"></p-input>
        </div>
      `);
      const form = el.querySelector<HTMLFormElement>("form")!;

      const formControls = getFormControls(form); // eslint-disable-line
      expect(formControls.length).to.equal(10); // eslint-disable-line
      expect(
        formControls.map((fc: HTMLInputElement) => fc.value).join(""),
      ).to.equal("12345678910"); // eslint-disable-line
    });
  });

  describe("when using the setRangeText() function", () => {
    it("should set replacement text in the correct location", async () => {
      const el = await fixture<PInput>(html`
        <p-input value="test"></p-input>
      `);

      el.focus();
      el.setSelectionRange(1, 3);
      el.setRangeText("boom");
      await el.updateComplete;
      expect(el.value).to.equal("tboomt"); // cspell:disable-line
    });
  });

  runFormControlBaseTests("p-input");
});

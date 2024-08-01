import "../../../dist/pure-ui.js";
import {
  aTimeout,
  expect,
  fixture,
  html,
  oneEvent,
  waitUntil,
} from "@open-wc/testing";
import { clickOnElement } from "../../internal/test.js";
import { runFormControlBaseTests } from "../../internal/test/form-control-base-tests.js";
import { sendKeys } from "@web/test-runner-commands";
import sinon from "sinon";
import type PCheckbox from "./checkbox.js";

describe("<p-checkbox>", () => {
  it("should pass accessibility tests", async () => {
    const el = await fixture<PCheckbox>(html`
      <p-checkbox>Checkbox</p-checkbox>
    `);
    await expect(el).to.be.accessible();
  });

  it("default properties", async () => {
    const el = await fixture<PCheckbox>(html` <p-checkbox></p-checkbox> `);

    expect(el.name).to.equal("");
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal("");
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.indeterminate).to.be.false;
    expect(el.defaultChecked).to.be.false;
    expect(el.helpText).to.equal("");
  });

  it("should have title if title attribute is set", async () => {
    const el = await fixture<PCheckbox>(html`
      <p-checkbox title="Test"></p-checkbox>
    `);
    const input = el.shadowRoot!.querySelector("input")!;

    expect(input.title).to.equal("Test");
  });

  it("should be disabled with the disabled attribute", async () => {
    const el = await fixture<PCheckbox>(html`
      <p-checkbox disabled></p-checkbox>
    `);
    const checkbox = el.shadowRoot!.querySelector("input")!;

    expect(checkbox.disabled).to.be.true;
  });

  it("should be disabled when disabled property is set", async () => {
    const el = await fixture<PCheckbox>(html`<p-checkbox></p-checkbox>`);
    const checkbox = el.shadowRoot!.querySelector("input")!;

    el.disabled = true;
    await el.updateComplete;

    expect(checkbox.disabled).to.be.true;
  });

  it("should be valid by default", async () => {
    const el = await fixture<PCheckbox>(html` <p-checkbox></p-checkbox> `);
    expect(el.checkValidity()).to.be.true;
  });

  it("should emit p-change and p-input when clicked", async () => {
    const el = await fixture<PCheckbox>(html` <p-checkbox></p-checkbox> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener("p-change", changeHandler);
    el.addEventListener("p-input", inputHandler);
    el.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it("should emit p-change and p-input when toggled with spacebar", async () => {
    const el = await fixture<PCheckbox>(html` <p-checkbox></p-checkbox> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener("p-change", changeHandler);
    el.addEventListener("p-input", inputHandler);
    el.focus();
    await el.updateComplete;
    await sendKeys({ press: " " });

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it("should not emit p-change or p-input when checked programmatically", async () => {
    const el = await fixture<PCheckbox>(html` <p-checkbox></p-checkbox> `);

    el.addEventListener("p-change", () =>
      expect.fail("p-change should not be emitted"),
    );
    el.addEventListener("p-input", () =>
      expect.fail("p-input should not be emitted"),
    );
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  it("should hide the native input with the correct positioning to scroll correctly when contained in an overflow", async () => {
    //
    // See: https://github.com/ssjblue197/pure-ui/issues/1169
    //
    const el = await fixture<PCheckbox>(html` <p-checkbox></p-checkbox> `);
    const label = el.shadowRoot!.querySelector(".checkbox")!;
    const input = el.shadowRoot!.querySelector(".checkbox__input")!;

    const labelPosition = getComputedStyle(label).position;
    const inputPosition = getComputedStyle(input).position;

    expect(labelPosition).to.equal("relative");
    expect(inputPosition).to.equal("absolute");
  });

  describe("when submitting a form", () => {
    it("should submit the correct value when a value is provided", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-checkbox name="a" value="1" checked></p-checkbox>
          <p-button type="submit">Submit</p-button>
        </form>
      `);
      const button = form.querySelector("p-button")!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener("submit", submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get("a")).to.equal("1");
    });

    it('should submit "on" when no value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-checkbox name="a" checked></p-checkbox>
          <p-button type="submit">Submit</p-button>
        </form>
      `);
      const button = form.querySelector("p-button")!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener("submit", submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get("a")).to.equal("on");
    });

    it("should be invalid when setCustomValidity() is called with a non-empty value", async () => {
      const checkbox = await fixture<HTMLFormElement>(html`
        <p-checkbox></p-checkbox>
      `);

      // Submitting the form after setting custom validity should not trigger the handler
      checkbox.setCustomValidity("Invalid selection");
      await checkbox.updateComplete;

      expect(checkbox.checkValidity()).to.be.false;
      expect(checkbox.checkValidity()).to.be.false;
      expect(checkbox.hasAttribute("data-invalid")).to.be.true;
      expect(checkbox.hasAttribute("data-valid")).to.be.false;
      expect(checkbox.hasAttribute("data-user-invalid")).to.be.false;
      expect(checkbox.hasAttribute("data-user-valid")).to.be.false;

      await clickOnElement(checkbox);
      await checkbox.updateComplete;

      expect(checkbox.hasAttribute("data-user-invalid")).to.be.true;
      expect(checkbox.hasAttribute("data-user-valid")).to.be.false;
    });

    it("should be invalid when required and unchecked", async () => {
      const checkbox = await fixture<HTMLFormElement>(html`
        <p-checkbox required></p-checkbox>
      `);
      expect(checkbox.checkValidity()).to.be.false;
    });

    it("should be valid when required and checked", async () => {
      const checkbox = await fixture<HTMLFormElement>(html`
        <p-checkbox required checked></p-checkbox>
      `);
      expect(checkbox.checkValidity()).to.be.true;
    });

    it("should be present in form data when using the form attribute and located outside of a <form>", async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <p-button type="submit">Submit</p-button>
          </form>
          <p-checkbox form="f" name="a" value="1" checked></p-checkbox>
        </div>
      `);
      const form = el.querySelector("form")!;
      const formData = new FormData(form);

      expect(formData.get("a")).to.equal("1");
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate><p-checkbox required></p-checkbox></form>
      `);
      const checkbox = el.querySelector<PCheckbox>("p-checkbox")!;

      expect(checkbox.hasAttribute("data-required")).to.be.true;
      expect(checkbox.hasAttribute("data-optional")).to.be.false;
      expect(checkbox.hasAttribute("data-invalid")).to.be.true;
      expect(checkbox.hasAttribute("data-valid")).to.be.false;
      expect(checkbox.hasAttribute("data-user-invalid")).to.be.false;
      expect(checkbox.hasAttribute("data-user-valid")).to.be.false;
    });
  });

  describe("when resetting a form", () => {
    it("should reset the element to its initial value", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-checkbox name="a" value="1" checked></p-checkbox>
          <p-button type="reset">Reset</p-button>
        </form>
      `);
      const button = form.querySelector("p-button")!;
      const checkbox = form.querySelector("p-checkbox")!;
      checkbox.checked = false;

      await checkbox.updateComplete;
      setTimeout(() => button.click());

      await oneEvent(form, "reset");
      await checkbox.updateComplete;

      expect(checkbox.checked).to.true;

      checkbox.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, "reset");
      await checkbox.updateComplete;

      expect(checkbox.checked).to.false;
    });
  });

  describe("click", () => {
    it("should click the inner input", async () => {
      const el = await fixture<PCheckbox>(html`<p-checkbox></p-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector("input")!;
      const clickSpy = sinon.spy();

      checkbox.addEventListener("click", clickSpy, { once: true });

      el.click();
      await el.updateComplete;

      expect(clickSpy.called).to.equal(true);
      expect(el.checked).to.equal(true);
    });
  });

  describe("focus", () => {
    it("should focus the inner input", async () => {
      const el = await fixture<PCheckbox>(html`<p-checkbox></p-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector("input")!;
      const focusSpy = sinon.spy();

      checkbox.addEventListener("focus", focusSpy, { once: true });

      el.focus();
      await el.updateComplete;

      expect(focusSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(checkbox);
    });

    it("should not jump the page to the bottom when focusing a checkbox at the bottom of an element with overflow: auto;", async () => {
      // https://github.com/ssjblue197/pure-ui/issues/1169
      const el = await fixture<HTMLDivElement>(html`
        <div
          style="display: flex; flex-direction: column; overflow: auto; max-height: 400px; gap: 8px;"
        >
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
          <p-checkbox>Checkbox</p-checkbox>
        </div>
        ;
      `);

      const checkboxes = el.querySelectorAll<PCheckbox>("p-checkbox");
      const lastSwitch = checkboxes[checkboxes.length - 1];

      expect(window.scrollY).to.equal(0);
      // Without these 2 timeouts, tests will pass unexpectedly in Safari.
      await aTimeout(10);
      lastSwitch.focus();
      await aTimeout(10);
      expect(window.scrollY).to.equal(0);
    });
  });

  describe("blur", () => {
    it("should blur the inner input", async () => {
      const el = await fixture<PCheckbox>(html`<p-checkbox></p-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector("input")!;
      const blurSpy = sinon.spy();

      checkbox.addEventListener("blur", blurSpy, { once: true });

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(blurSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe("indeterminate", () => {
    it("should render indeterminate icon until checked", async () => {
      const el = await fixture<PCheckbox>(
        html`<p-checkbox indeterminate></p-checkbox>`,
      );
      let indeterminateIcon = el.shadowRoot!.querySelector(
        '[part~="indeterminate-icon"]',
      )!;

      expect(indeterminateIcon).not.to.be.null;

      el.click();
      await el.updateComplete;

      indeterminateIcon = el.shadowRoot!.querySelector(
        '[part~="indeterminate-icon"]',
      )!;

      expect(indeterminateIcon).to.be.null;
    });

    runFormControlBaseTests("p-checkbox");
  });
});

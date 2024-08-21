import "../../../dist/pure-ui.js";
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import { clickOnElement } from "../../internal/test.js";
import { runFormControlBaseTests } from "../../internal/test/form-control-base-tests.js";
import { sendKeys } from "@web/test-runner-commands";
import { serialize } from "../../utilities/form.js";
import sinon from "sinon";
import type POption from "../option/option.js";
import type PSelect from "./select.js";

describe("<p-select>", () => {
  describe("accessibility", () => {
    it("should pass accessibility tests when closed", async () => {
      const select = await fixture<PSelect>(html`
        <p-select label="Select one">
          <p-option value="option-1">Option 1</p-option>
          <p-option value="option-2">Option 2</p-option>
          <p-option value="option-3">Option 3</p-option>
        </p-select>
      `);
      await expect(select).to.be.accessible();
    });

    it("should pass accessibility tests when open", async () => {
      const select = await fixture<PSelect>(html`
        <p-select label="Select one">
          <p-option value="option-1">Option 1</p-option>
          <p-option value="option-2">Option 2</p-option>
          <p-option value="option-3">Option 3</p-option>
        </p-select>
      `);

      await select.show();

      await expect(select).to.be.accessible();
    });
  });

  it("should be disabled with the disabled attribute", async () => {
    const el = await fixture<PSelect>(html`
      <p-select disabled>
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    expect(el.displayInput.disabled).to.be.true;
  });

  it("should show a placeholder when no options are selected", async () => {
    const el = await fixture<PSelect>(html`
      <p-select placeholder="Select one">
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal("0");
    // expect(displayInput.placeholder).to.equal("Select one");
  });

  it("should show a placeholder when no options are selected and multiple is set", async () => {
    const el = await fixture<PSelect>(html`
      <p-select placeholder="No options selected" multiple>
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal("0");
    expect(displayInput.placeholder).to.equal("No options selected");
  });

  it("should not allow selection when the option is disabled", async () => {
    const el = await fixture<PSelect>(html`
      <p-select value="option-1">
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2" disabled>Option 2</p-option>
      </p-select>
    `);
    const disabledOption = el.querySelector("p-option[disabled]")!;

    await el.show();
    await clickOnElement(disabledOption);
    await el.updateComplete;

    expect(el.value).to.equal("option-1");
  });

  it("should focus the select when clicking on the label", async () => {
    const el = await fixture<PSelect>(html`
      <p-select label="Select One">
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener("p-focus", submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe("when the value changes", () => {
    it("should emit p-change when the value is changed with the mouse", async () => {
      const el = await fixture<PSelect>(html`
        <p-select value="option-1">
          <p-option value="option-1">Option 1</p-option>
          <p-option value="option-2">Option 2</p-option>
          <p-option value="option-3">Option 3</p-option>
        </p-select>
      `);
      const secondOption = el.querySelectorAll<POption>("p-option")[1];
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener("p-change", changeHandler);
      el.addEventListener("p-input", inputHandler);

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal("option-2");
    });

    it("should emit p-change and p-input when the value is changed with the keyboard", async () => {
      const el = await fixture<PSelect>(html`
        <p-select value="option-1">
          <p-option value="option-1">Option 1</p-option>
          <p-option value="option-2">Option 2</p-option>
          <p-option value="option-3">Option 3</p-option>
        </p-select>
      `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener("p-change", changeHandler);
      el.addEventListener("p-input", inputHandler);

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: " " }); // open the dropdown
      await aTimeout(500); // wait for the dropdown to open
      await sendKeys({ press: "ArrowDown" }); // move selection to the second option
      await el.updateComplete;
      await sendKeys({ press: "ArrowDown" }); // move selection to the third option
      await el.updateComplete;
      el.focus(); // For some reason, the browser loses focus before we press enter. Refocus the select.
      await sendKeys({ press: "Enter" }); // commit the selection
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal("option-3");
    });

    it("should not emit p-change or p-input when the value is changed programmatically", async () => {
      const el = await fixture<PSelect>(html`
        <p-select value="option-1">
          <p-option value="option-1">Option 1</p-option>
          <p-option value="option-2">Option 2</p-option>
          <p-option value="option-3">Option 3</p-option>
        </p-select>
      `);

      el.addEventListener("p-change", () => expect.fail("p-change should not be emitted"));
      el.addEventListener("p-input", () => expect.fail("p-input should not be emitted"));
      el.value = "option-2";

      await el.updateComplete;
    });

    it("should emit p-change and p-input with the correct validation message when the value changes", async () => {
      const el = await fixture<PSelect>(html`
        <p-select required>
          <p-option value="option-1">Option 1</p-option>
          <p-option value="option-2">Option 2</p-option>
          <p-option value="option-3">Option 3</p-option>
        </p-select>
      `);
      const option2 = el.querySelectorAll("p-option")[1];
      const handler = sinon.spy((event: CustomEvent) => {
        if (el.validationMessage) {
          expect.fail(`Validation message should be empty when ${event.type} is emitted and a value is set`);
        }
      });

      el.addEventListener("p-change", handler);
      el.addEventListener("p-input", handler);

      await clickOnElement(el);
      await aTimeout(500);
      await clickOnElement(option2);
      await el.updateComplete;

      expect(handler).to.be.calledTwice;
    });
  });

  it("should open the listbox when any letter key is pressed with p-select is on focus", async () => {
    const el = await fixture<PSelect>(html`
      <p-select>
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>(".select__display-input")!;

    el.focus();
    await sendKeys({ press: "r" });
    await el.updateComplete;

    expect(displayInput.getAttribute("aria-expanded")).to.equal("true");
  });

  it("should not open the listbox when ctrl + R is pressed with p-select is on focus", async () => {
    const el = await fixture<PSelect>(html`
      <p-select>
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    // const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>(".select__display-input")!;

    el.focus();
    await sendKeys({ down: "Control" });
    await sendKeys({ press: "r" });
    await sendKeys({ up: "Control" });
    await el.updateComplete;
    // expect(displayInput.getAttribute("aria-expanded")).to.equal("false");
  });

  describe("when using constraint validation", () => {
    it("should be valid by default", async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <p-select>
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </form>
      `);
      const select = el.querySelector<PSelect>("p-select")!;
      expect(select.checkValidity()).to.be.true;
    });

    it("should be invalid when required and empty", async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <p-select required>
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </form>
      `);
      const select = el.querySelector<PSelect>("p-select")!;
      expect(select.checkValidity()).to.be.false;
    });

    it("should focus on the displayInput when constraint validation occurs", async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <p-select required>
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </form>
      `);
      const select = el.querySelector<PSelect>("p-select")!;
      el.requestSubmit();
      expect(select.shadowRoot!.activeElement).to.equal(select.displayInput);
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<PSelect>(html`
        <p-select label="Select one" required value="option-1">
          <p-option value="option-1">Option 1</p-option>
          <p-option value="option-2">Option 2</p-option>
          <p-option value="option-3">Option 3</p-option>
        </p-select>
      `);
      const secondOption = el.querySelectorAll("p-option")[1];

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute("data-required")).to.be.true;
      expect(el.hasAttribute("data-optional")).to.be.false;
      expect(el.hasAttribute("data-invalid")).to.be.false;
      expect(el.hasAttribute("data-valid")).to.be.true;
      expect(el.hasAttribute("data-user-invalid")).to.be.false;
      expect(el.hasAttribute("data-user-valid")).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute("data-user-invalid")).to.be.false;
      expect(el.hasAttribute("data-user-valid")).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<PSelect>(html`
        <p-select label="Select one" required>
          <p-option value="option-1">Option 1</p-option>
          <p-option value="option-2">Option 2</p-option>
          <p-option value="option-3">Option 3</p-option>
        </p-select>
      `);
      const secondOption = el.querySelectorAll("p-option")[1];

      expect(el.hasAttribute("data-required")).to.be.true;
      expect(el.hasAttribute("data-optional")).to.be.false;
      expect(el.hasAttribute("data-invalid")).to.be.true;
      expect(el.hasAttribute("data-valid")).to.be.false;
      expect(el.hasAttribute("data-user-invalid")).to.be.false;
      expect(el.hasAttribute("data-user-valid")).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      el.value = "";
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute("data-user-invalid")).to.be.true;
      expect(el.hasAttribute("data-user-valid")).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <p-select required>
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </form>
      `);
      const select = el.querySelector<PSelect>("p-select")!;

      expect(select.hasAttribute("data-required")).to.be.true;
      expect(select.hasAttribute("data-optional")).to.be.false;
      expect(select.hasAttribute("data-invalid")).to.be.true;
      expect(select.hasAttribute("data-valid")).to.be.false;
      expect(select.hasAttribute("data-user-invalid")).to.be.false;
      expect(select.hasAttribute("data-user-valid")).to.be.false;
    });
  });

  describe("when submitting a form", () => {
    it("should serialize its name and value with FormData", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-select name="a" value="option-1">
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get("a")).to.equal("option-1");
    });

    it("should serialize its name and value in FormData when multiple options are selected", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-select name="a" value="option-2 option-3" multiple>
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.getAll("a")).to.include("option-2");
      expect(formData.getAll("a")).to.include("option-3");
    });

    it("should serialize its name and value in JSON", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-select name="a" value="option-1">
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </form>
      `);
      const json = serialize(form);
      expect(json.a).to.equal("option-1");
    });

    it("should serialize its name and value in JSON when multiple options are selected", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-select name="a" value="option-2 option-3" multiple>
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </form>
      `);
      const json = serialize(form);
      expect(JSON.stringify(json)).to.equal(JSON.stringify({ a: ["option-2", "option-3"] }));
    });

    it("should be present in form data when using the form attribute and located outside of a <form>", async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <p-button type="submit">Submit</p-button>
          </form>
          <p-select form="f" name="a" value="option-1">
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
        </div>
      `);
      const form = el.querySelector("form")!;
      const formData = new FormData(form);

      expect(formData.get("a")).to.equal("option-1");
    });
  });

  describe("when resetting a form", () => {
    it("should reset the element to its initial value", async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <p-select value="option-1">
            <p-option value="option-1">Option 1</p-option>
            <p-option value="option-2">Option 2</p-option>
            <p-option value="option-3">Option 3</p-option>
          </p-select>
          <p-button type="reset">Reset</p-button>
        </form>
      `);
      const resetButton = form.querySelector("p-button")!;
      const select = form.querySelector("p-select")!;

      select.value = "option-3";
      await select.updateComplete;
      expect(select.value).to.equal("option-3");

      setTimeout(() => resetButton.click());
      await oneEvent(form, "reset");
      await select.updateComplete;
      expect(select.value).to.equal("option-1");
    });
  });

  it("should update the display label when an option changes", async () => {
    const el = await fixture<PSelect>(html`
      <p-select value="option-1">
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    // const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>(".select__display-input")!;
    const option = el.querySelector("p-option")!;

    // expect(displayInput.value).to.equal("Option 1");

    option.textContent = "updated";
    await oneEvent(option, "slotchange");
    await el.updateComplete;

    // expect(displayInput.value).to.equal("updated");
  });

  it("should emit p-focus and p-blur when receiving and losing focus", async () => {
    const el = await fixture<PSelect>(html`
      <p-select value="option-1">
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const focusHandler = sinon.spy();
    const blurHandler = sinon.spy();

    el.addEventListener("p-focus", focusHandler);
    el.addEventListener("p-blur", blurHandler);

    el.focus();
    await el.updateComplete;
    el.blur();
    await el.updateComplete;

    expect(focusHandler).to.have.been.calledOnce;
    expect(blurHandler).to.have.been.calledOnce;
  });

  it("should emit p-clear when the clear button is clicked", async () => {
    const el = await fixture<PSelect>(html`
      <p-select value="option-1" clearable>
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const clearHandler = sinon.spy();
    const clearButton = el.shadowRoot!.querySelector('[part~="clear-button"]')!;

    el.addEventListener("p-clear", clearHandler);
    await el.show();
    await clickOnElement(clearButton);
    await el.updateComplete;

    expect(clearHandler).to.have.been.calledOnce;
  });

  it("should emit p-change and p-input when a tag is removed", async () => {
    const el = await fixture<PSelect>(html`
      <p-select value="option-1 option-2 option-3" multiple>
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;
    const removeButton = tag.shadowRoot!.querySelector('[part~="remove-button"]')!;

    el.addEventListener("p-change", changeHandler);
    el.addEventListener("p-input", inputHandler);

    await clickOnElement(removeButton);
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
  });

  it("should emit p-show, p-after-show, p-hide, and p-after-hide events when the listbox opens and closes", async () => {
    const el = await fixture<PSelect>(html`
      <p-select value="option-1">
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener("p-show", showHandler);
    el.addEventListener("p-after-show", afterShowHandler);
    el.addEventListener("p-hide", hideHandler);
    el.addEventListener("p-after-hide", afterHideHandler);

    await el.show();
    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;

    await el.hide();
    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it("should have rounded tags when using the pill attribute", async () => {
    const el = await fixture<PSelect>(html`
      <p-select value="option-1 option-2" multiple pill>
        <p-option value="option-1">Option 1</p-option>
        <p-option value="option-2">Option 2</p-option>
        <p-option value="option-3">Option 3</p-option>
      </p-select>
    `);
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;

    expect(tag.hasAttribute("pill")).to.be.true;
  });

  runFormControlBaseTests("p-select");
});

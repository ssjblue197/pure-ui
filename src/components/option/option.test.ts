import "../../../dist/pure-ui.js";
import { aTimeout, expect, fixture, html, waitUntil } from "@open-wc/testing";
import sinon from "sinon";
import type POption from "./option.js";

describe("<p-option>", () => {
  it("passes accessibility test", async () => {
    const el = await fixture<POption>(html`
      <p-select label="Select one">
        <p-option value="1">Option 1</p-option>
        <p-option value="2">Option 2</p-option>
        <p-option value="3">Option 3</p-option>
        <p-option value="4" disabled>Disabled</p-option>
      </p-select>
    `);
    await expect(el).to.be.accessible();
  });

  it("default properties", async () => {
    const el = await fixture<POption>(html` <p-option>Test</p-option> `);

    expect(el.value).to.equal("");
    expect(el.disabled).to.be.false;
    expect(el.getAttribute("aria-disabled")).to.equal("false");
  });

  it("changes aria attributes", async () => {
    const el = await fixture<POption>(html` <p-option>Test</p-option> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute("aria-disabled")).to.equal("true");
  });

  it("emits the slotchange event when the label changes", async () => {
    const el = await fixture<POption>(html` <p-option>Text</p-option> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener("slotchange", slotChangeHandler);
    el.textContent = "New Text";
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it("should convert non-string values to string", async () => {
    const el = await fixture<POption>(html` <p-option>Text</p-option> `);

    // @ts-expect-error - intentional
    el.value = 10;
    await el.updateComplete;

    expect(el.value).to.equal("10");
  });

  it("should escape HTML when calling getTextLabel()", async () => {
    const el = await fixture<POption>(html` <p-option><strong>Option</strong></p-option> `);
    expect(el.getTextLabel()).to.equal("Option");
  });
});

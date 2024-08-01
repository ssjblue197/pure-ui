import "../../../dist/pure-ui.js";
import { expect, fixture, html } from "@open-wc/testing";
import type PRadio from "./radio.js";
import type PRadioGroup from "../radio-group/radio-group.js";

describe("<p-radio>", () => {
  it("should not get checked when disabled", async () => {
    const radioGroup = await fixture<PRadioGroup>(html`
      <p-radio-group value="1">
        <p-radio id="radio-1" value="1"></p-radio>
        <p-radio id="radio-2" value="2" disabled></p-radio>
      </p-radio-group>
    `);
    const radio1 = radioGroup.querySelector<PRadio>("#radio-1")!;
    const radio2 = radioGroup.querySelector<PRadio>("#radio-2")!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});

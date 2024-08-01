import "../../../dist/pure-ui.js";
import { expect, fixture, html } from "@open-wc/testing";
import type PCopyButton from "./copy-button.js";

// We use aria-live to announce labels via tooltips
const ignoredRules = ["button-name"];

describe("<p-copy-button>", () => {
  let el: PCopyButton;

  describe("when provided no parameters", () => {
    before(async () => {
      el = await fixture(html`<p-copy-button value="something"></p-copy-button> `);
    });

    it("should pass accessibility tests", async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});

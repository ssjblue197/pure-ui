import "../../../dist/pure-ui.js";
import { expect, fixture, html } from "@open-wc/testing";
import type PPaginate from "./paginate.js";

describe("<p-paginate>", () => {
  describe("defaults ", () => {
    it("passes accessibility test", async () => {
      const el = await fixture<PPaginate>(html` <p-paginate></p-paginate> `);
      await expect(el).to.be.accessible();
    });
  });
});

import "../../../dist/pure-ui.js";
import { expect, fixture, html } from "@open-wc/testing";

describe("<p-popup>", () => {
  it("should render a component", async () => {
    const el = await fixture(html` <p-popup></p-popup> `);

    expect(el).to.exist;
  });
});

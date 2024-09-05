import "../../../dist/pure-ui.js";
import { expect, fixture, html } from "@open-wc/testing";

describe("<p-file-upload>", () => {
  it("should render a component", async () => {
    const el = await fixture(html` <p-file-upload></p-file-upload> `);

    expect(el).to.exist;
  });
});

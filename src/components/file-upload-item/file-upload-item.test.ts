import "../../../dist/pure-ui.js";
import { expect, fixture, html } from "@open-wc/testing";

describe("<p-file-upload-item>", () => {
  it("should render a component", async () => {
    const el = await fixture(html` <p-file-upload-item></p-file-upload-item> `);

    expect(el).to.exist;
  });
});

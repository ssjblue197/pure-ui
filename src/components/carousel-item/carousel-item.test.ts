import "../../../dist/pure-ui.js";
import { expect, fixture, html } from "@open-wc/testing";

describe("<p-carousel-item>", () => {
  it("should render a component", async () => {
    const el = await fixture(html` <p-carousel-item></p-carousel-item> `);

    expect(el).to.exist;
  });

  it("should pass accessibility tests", async () => {
    // Arrange
    const el = await fixture(html` <p-carousel-item></p-carousel-item> `);

    // Assert
    await expect(el).to.be.accessible();
  });
});

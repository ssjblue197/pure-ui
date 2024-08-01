import "../../../dist/pure-ui.js";
import { aTimeout, expect, fixture, html } from "@open-wc/testing";
import type PTabPanel from "./tab-panel.js";

describe("<p-tab-panel>", () => {
  it("passes accessibility test", async () => {
    const el = await fixture<PTabPanel>(html` <p-tab-panel>Test</p-tab-panel> `);
    await expect(el).to.be.accessible();
  });

  it("default properties", async () => {
    const el = await fixture<PTabPanel>(html` <p-tab-panel>Test</p-tab-panel> `);

    expect(el.id).to.equal("p-tab-panel-2");
    expect(el.name).to.equal("");
    expect(el.active).to.equal(false);
    expect(el.getAttribute("role")).to.equal("tabpanel");
    expect(el.getAttribute("aria-hidden")).to.equal("true");
  });

  it("properties should reflect", async () => {
    const el = await fixture<PTabPanel>(html` <p-tab-panel>Test</p-tab-panel> `);

    el.name = "test";
    el.active = true;
    await aTimeout(100);
    expect(el.getAttribute("name")).to.equal("test");
    expect(el.hasAttribute("active")).to.equal(true);
  });

  it("changing active should always update aria-hidden role", async () => {
    const el = await fixture<PTabPanel>(html` <p-tab-panel>Test</p-tab-panel> `);

    el.active = true;
    await aTimeout(100);
    expect(el.getAttribute("aria-hidden")).to.equal("false");
  });

  it("passed id should be used", async () => {
    const el = await fixture<PTabPanel>(html` <p-tab-panel id="test-id">Test</p-tab-panel> `);

    expect(el.id).to.equal("test-id");
  });
});

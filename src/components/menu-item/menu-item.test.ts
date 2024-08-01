import "../../../dist/pure-ui.js";
import { expect, fixture, html, waitUntil } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import sinon from "sinon";
import type { PSelectEvent } from "../../events/p-select.js";
import type PMenuItem from "./menu-item.js";

describe("<p-menu-item>", () => {
  it("should pass accessibility tests", async () => {
    const el = await fixture<PMenuItem>(html`
      <p-menu>
        <p-menu-item>Item 1</p-menu-item>
        <p-menu-item>Item 2</p-menu-item>
        <p-menu-item>Item 3</p-menu-item>
        <p-divider></p-divider>
        <p-menu-item type="checkbox" checked>Checked</p-menu-item>
        <p-menu-item type="checkbox">Unchecked</p-menu-item>
      </p-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it("should pass accessibility tests when using a submenu", async () => {
    const el = await fixture<PMenuItem>(html`
      <p-menu>
        <p-menu-item>
          Submenu
          <p-menu slot="submenu">
            <p-menu-item>Submenu Item 1</p-menu-item>
            <p-menu-item>Submenu Item 2</p-menu-item>
          </p-menu>
        </p-menu-item>
      </p-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it("should have the correct default properties", async () => {
    const el = await fixture<PMenuItem>(html`
      <p-menu-item>Test</p-menu-item>
    `);

    expect(el.value).to.equal("");
    expect(el.disabled).to.be.false;
    expect(el.loading).to.equal(false);
    expect(el.getAttribute("aria-disabled")).to.equal("false");
  });

  it("should render the correct aria attributes when disabled", async () => {
    const el = await fixture<PMenuItem>(html`
      <p-menu-item disabled>Test</p-menu-item>
    `);
    expect(el.getAttribute("aria-disabled")).to.equal("true");
  });

  describe("when loading", () => {
    it("should have a spinner present", async () => {
      const el = await fixture<PMenuItem>(html`
        <p-menu-item loading>Menu Item Label</p-menu-item>
      `);
      expect(el.shadowRoot!.querySelector("p-spinner")).to.exist;
    });
  });

  it("should return a text label when calling getTextLabel()", async () => {
    const el = await fixture<PMenuItem>(html`
      <p-menu-item>Test</p-menu-item>
    `);
    expect(el.getTextLabel()).to.equal("Test");
  });

  it("should emit the slotchange event when the label changes", async () => {
    const el = await fixture<PMenuItem>(html`
      <p-menu-item>Text</p-menu-item>
    `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener("slotchange", slotChangeHandler);
    el.textContent = "New Text";
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it("should render a hidden menu item when the inert attribute is used", async () => {
    const menu = await fixture<PMenuItem>(html`
      <p-menu>
        <p-menu-item inert>Item 1</p-menu-item>
        <p-menu-item>Item 2</p-menu-item>
        <p-menu-item>Item 3</p-menu-item>
      </p-menu>
    `);
    const item1 = menu.querySelector("p-menu-item")!;

    expect(getComputedStyle(item1).display).to.equal("none");
  });

  it('should not render a p-popup if the slot="submenu" attribute is missing, but the slot should exist in the component and be hidden.', async () => {
    const menu = await fixture<PMenuItem>(html`
      <p-menu>
        <p-menu-item>
          Item 1
          <p-menu>
            <p-menu-item> Nested Item 1 </p-menu-item>
          </p-menu>
        </p-menu-item>
      </p-menu>
    `);

    const menuItem: HTMLElement = menu.querySelector("p-menu-item")!;
    expect(menuItem.shadowRoot!.querySelector("p-popup")).to.be.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector(
      'slot[name="submenu"]',
    )!;
    expect(submenuSlot.hidden).to.be.true;
  });

  it('should render an p-popup if the slot="submenu" attribute is present', async () => {
    const menu = await fixture<PMenuItem>(html`
      <p-menu>
        <p-menu-item id="test">
          Item 1
          <p-menu slot="submenu">
            <p-menu-item> Nested Item 1 </p-menu-item>
          </p-menu>
        </p-menu-item>
      </p-menu>
    `);

    const menuItem = menu.querySelector("p-menu-item")!;
    expect(menuItem.shadowRoot!.querySelector("p-popup")).to.be.not.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector(
      'slot[name="submenu"]',
    )!;
    expect(submenuSlot.hidden).to.be.false;
  });

  it("should focus on first menuitem of submenu if ArrowRight is pressed on parent menuitem", async () => {
    const menu = await fixture<PMenuItem>(html`
      <p-menu>
        <p-menu-item id="item-1">
          Submenu
          <p-menu slot="submenu">
            <p-menu-item value="submenu-item-1"> Nested Item 1 </p-menu-item>
          </p-menu>
        </p-menu-item>
      </p-menu>
    `);

    const selectHandler = sinon.spy((event: PSelectEvent) => {
      const item = event.detail.item;
      expect(item.value).to.equal("submenu-item-1");
    });
    menu.addEventListener("p-select", selectHandler);

    const submenu = menu.querySelector("p-menu-item");
    submenu!.focus();
    await menu.updateComplete;
    await sendKeys({ press: "ArrowRight" });
    await menu.updateComplete;
    await sendKeys({ press: "Enter" });
    await menu.updateComplete;
    expect(selectHandler).to.have.been.calledOnce;
  });

  it("should focus on outer menu if ArrowRight is pressed on nested menuitem", async () => {
    const menu = await fixture<PMenuItem>(html`
      <p-menu>
        <p-menu-item value="outer-item-1">
          Submenu
          <p-menu slot="submenu">
            <p-menu-item value="inner-item-1"> Nested Item 1 </p-menu-item>
          </p-menu>
        </p-menu-item>
      </p-menu>
    `);

    const focusHandler = sinon.spy((event: FocusEvent) => {
      expect(event.target.value).to.equal("outer-item-1");
      expect(event.relatedTarget.value).to.equal("inner-item-1");
    });

    const outerItem = menu.querySelector("p-menu-item");
    outerItem!.focus();
    await menu.updateComplete;
    await sendKeys({ press: "ArrowRight" });

    outerItem.addEventListener("focus", focusHandler);
    await menu.updateComplete;
    await sendKeys({ press: "ArrowLeft" });
    await menu.updateComplete;
    expect(focusHandler).to.have.been.calledOnce;
  });
});

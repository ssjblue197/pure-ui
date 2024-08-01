import "../../../dist/pure-ui.js";
import { clickOnElement } from "../../internal/test.js";
import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { sendKeys } from "@web/test-runner-commands";
import sinon from "sinon";
import type { PSelectEvent } from "../../events/p-select.js";
import type PMenu from "./menu.js";
import type PMenuItem from "../menu-item/menu-item.component.js";

describe("<p-menu>", () => {
  it("emits p-select with the correct event detail when clicking an item", async () => {
    const menu = await fixture<PMenu>(html`
      <p-menu>
        <p-menu-item value="item-1">Item 1</p-menu-item>
        <p-menu-item value="item-2">Item 2</p-menu-item>
        <p-menu-item value="item-3">Item 3</p-menu-item>
        <p-menu-item value="item-4">Item 4</p-menu-item>
      </p-menu>
    `);
    const item2 = menu.querySelectorAll("p-menu-item")[1];
    const selectHandler = sinon.spy((event: PSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail("Incorrect event detail emitted with p-select");
      }
    });

    menu.addEventListener("p-select", selectHandler);
    await clickOnElement(item2);

    expect(selectHandler).to.have.been.calledOnce;
  });

  it("can be selected via keyboard", async () => {
    const menu = await fixture<PMenu>(html`
      <p-menu>
        <p-menu-item value="item-1">Item 1</p-menu-item>
        <p-menu-item value="item-2">Item 2</p-menu-item>
        <p-menu-item value="item-3">Item 3</p-menu-item>
        <p-menu-item value="item-4">Item 4</p-menu-item>
      </p-menu>
    `);
    const [item1, item2] = menu.querySelectorAll("p-menu-item");
    const selectHandler = sinon.spy((event: PSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail("Incorrect item selected");
      }
    });

    menu.addEventListener("p-select", selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: "ArrowDown" });
    await sendKeys({ press: "Enter" });

    expect(selectHandler).to.have.been.calledOnce;
  });

  it("does not select disabled items when clicking", async () => {
    const menu = await fixture<PMenu>(html`
      <p-menu>
        <p-menu-item value="item-1">Item 1</p-menu-item>
        <p-menu-item value="item-2" disabled>Item 2</p-menu-item>
        <p-menu-item value="item-3">Item 3</p-menu-item>
        <p-menu-item value="item-4">Item 4</p-menu-item>
      </p-menu>
    `);
    const item2 = menu.querySelectorAll("p-menu-item")[1];
    const selectHandler = sinon.spy();

    menu.addEventListener("p-select", selectHandler);

    await clickOnElement(item2);

    expect(selectHandler).to.not.have.been.calledOnce;
  });

  it("does not select disabled items when pressing enter", async () => {
    const menu = await fixture<PMenu>(html`
      <p-menu>
        <p-menu-item value="item-1">Item 1</p-menu-item>
        <p-menu-item value="item-2" disabled>Item 2</p-menu-item>
        <p-menu-item value="item-3">Item 3</p-menu-item>
        <p-menu-item value="item-4">Item 4</p-menu-item>
      </p-menu>
    `);
    const [item1, item2] = menu.querySelectorAll("p-menu-item");
    const selectHandler = sinon.spy();

    menu.addEventListener("p-select", selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: "ArrowDown" });
    expect(document.activeElement).to.equal(item2);
    await sendKeys({ press: "Enter" });
    await item2.updateComplete;

    expect(selectHandler).to.not.have.been.called;
  });

  // @see https://github.com/ssjblue197/pure-ui/issues/1596
  it('Should fire "p-select" when clicking an element within a menu-item', async () => {
    // eslint-disable-next-line
    const selectHandler = sinon.spy(() => {});

    const menu: PMenu = await fixture(html`
      <p-menu>
        <p-menu-item>
          <span>Menu item</span>
        </p-menu-item>
      </p-menu>
    `);

    menu.addEventListener("p-select", selectHandler);
    const span = menu.querySelector("span")!;
    await clickOnElement(span);

    expect(selectHandler).to.have.been.calledOnce;
  });

  // @see https://github.com/ssjblue197/pure-ui/issues/2115
  it("Should be able to check a checkbox menu item in a submenu", async () => {
    const menu: PMenu = await fixture(html`
      <p-menu style="max-width: 200px;">
        <p-menu-item>
          <span>Menu item</span>
          <p-menu slot="submenu">
            <p-menu-item type="checkbox" checked>Checkbox</p-menu-item>
          </p-menu>
        </p-menu-item>
      </p-menu>
    `);

    const menuItem = menu.querySelector<PMenuItem>("p-menu-item")!;
    const checkbox = menu.querySelector<PMenuItem>("[type='checkbox']")!;

    expect(checkbox.checked).to.equal(true);
    await clickOnElement(menuItem); // Focus the menu item
    await sendKeys({ press: "ArrowRight" }); // Open the submenu
    await clickOnElement(checkbox); // Click the checkbox
    await checkbox.updateComplete;
    expect(checkbox.checked).to.equal(false);
  });
});

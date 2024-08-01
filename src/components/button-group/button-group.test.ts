import "../../../dist/pure-ui.js";
import { elementUpdated, expect, fixture, html } from "@open-wc/testing";
import type PButtonGroup from "./button-group.js";

describe("<p-button-group>", () => {
  describe("defaults ", () => {
    it("passes accessibility test", async () => {
      const group = await fixture<PButtonGroup>(html`
        <p-button-group>
          <p-button>Button 1 Label</p-button>
          <p-button>Button 2 Label</p-button>
          <p-button>Button 3 Label</p-button>
        </p-button-group>
      `);
      await expect(group).to.be.accessible();
    });

    it("default label empty", async () => {
      const group = await fixture<PButtonGroup>(html`
        <p-button-group>
          <p-button>Button 1 Label</p-button>
          <p-button>Button 2 Label</p-button>
          <p-button>Button 3 Label</p-button>
        </p-button-group>
      `);
      expect(group.label).to.equal("");
    });
  });

  describe("slotted button data attributes", () => {
    it("slotted buttons have the right data attributes applied based on their order", async () => {
      const group = await fixture<PButtonGroup>(html`
        <p-button-group>
          <p-button>Button 1 Label</p-button>
          <p-button>Button 2 Label</p-button>
          <p-button>Button 3 Label</p-button>
        </p-button-group>
      `);

      const allButtons = group.querySelectorAll("p-button");
      const hasGroupAttrib = Array.from(allButtons).every(button => button.hasAttribute("data-p-button-group__button"));
      expect(hasGroupAttrib).to.be.true;

      expect(allButtons[0]).to.have.attribute("data-p-button-group__button--first");
      expect(allButtons[1]).to.have.attribute("data-p-button-group__button--inner");
      expect(allButtons[2]).to.have.attribute("data-p-button-group__button--last");
    });
  });

  describe("focus and blur events", () => {
    it("toggles focus data attribute to slotted buttons on focus/blur", async () => {
      const group = await fixture<PButtonGroup>(html`
        <p-button-group>
          <p-button>Button 1 Label</p-button>
          <p-button>Button 2 Label</p-button>
          <p-button>Button 3 Label</p-button>
        </p-button-group>
      `);

      const allButtons = group.querySelectorAll("p-button");
      allButtons[0].dispatchEvent(new FocusEvent("focusin", { bubbles: true }));

      await elementUpdated(allButtons[0]);
      expect(allButtons[0]).to.have.attribute("data-p-button-group__button--focus");

      allButtons[0].dispatchEvent(new FocusEvent("focusout", { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0]).to.not.have.attribute("data-p-button-group__button--focus");
    });
  });

  describe("mouseover and mouseout events", () => {
    it("toggles hover data attribute to slotted buttons on mouseover/mouseout", async () => {
      const group = await fixture<PButtonGroup>(html`
        <p-button-group>
          <p-button>Button 1 Label</p-button>
          <p-button>Button 2 Label</p-button>
          <p-button>Button 3 Label</p-button>
        </p-button-group>
      `);

      const allButtons = group.querySelectorAll("p-button");

      allButtons[0].dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0]).to.have.attribute("data-p-button-group__button--hover");

      allButtons[0].dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
      await elementUpdated(allButtons[0]);
      console.log(allButtons[0]);
      expect(allButtons[0]).to.not.have.attribute("data-p-button-group__button--hover");
    });
  });
});

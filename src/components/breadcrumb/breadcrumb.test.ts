import "../../../dist/pure-ui.js";
import { expect, fixture, html } from "@open-wc/testing";
import type PBreadcrumb from "./breadcrumb.js";

// The default link color just misses AA contrast, but the next step up is way too dark. Maybe we can solve this in the
// future with a prefers-contrast media query.
const ignoredRules = ["color-contrast"];

describe("<p-breadcrumb>", () => {
  let el: PBreadcrumb;

  describe("when provided a standard list of el-breadcrumb-item children and no parameters", () => {
    before(async () => {
      el = await fixture<PBreadcrumb>(html`
        <p-breadcrumb>
          <p-breadcrumb-item>Catalog</p-breadcrumb-item>
          <p-breadcrumb-item>Clothing</p-breadcrumb-item>
          <p-breadcrumb-item>Women's</p-breadcrumb-item>
          <p-breadcrumb-item>Shirts &amp; Tops</p-breadcrumb-item>
        </p-breadcrumb>
      `);
    });

    it("should pass accessibility tests", async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it("should render p-icon as separator", () => {
      expect(el.querySelectorAll("p-icon").length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll("p-breadcrumb-item");
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute("aria-current", "page");
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<PBreadcrumb>(html`
        <p-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <p-breadcrumb-item>First</p-breadcrumb-item>
          <p-breadcrumb-item>Second</p-breadcrumb-item>
          <p-breadcrumb-item>Third</p-breadcrumb-item>
        </p-breadcrumb>
      `);
    });

    it("should pass accessibility tests", async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>(
        "slot[name=separator]",
      )!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it("should replace the p-icon separator with the provided separator", () => {
      expect(el.querySelectorAll(".replacement-separator").length).to.eq(4);
      expect(el.querySelectorAll("p-icon").length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<PBreadcrumb>(html`
        <p-breadcrumb>
          <p-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </p-breadcrumb-item>
          <p-breadcrumb-item>First</p-breadcrumb-item>
          <p-breadcrumb-item>Second</p-breadcrumb-item>
          <p-breadcrumb-item>Third</p-breadcrumb-item>
        </p-breadcrumb>
      `);
    });

    it("should pass accessibility tests", async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<PBreadcrumb>(html`
        <p-breadcrumb>
          <p-breadcrumb-item>First</p-breadcrumb-item>
          <p-breadcrumb-item>Second</p-breadcrumb-item>
          <p-breadcrumb-item>Third</p-breadcrumb-item>
          <p-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </p-breadcrumb-item>
        </p-breadcrumb>
      `);
    });

    it("should pass accessibility tests", async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});

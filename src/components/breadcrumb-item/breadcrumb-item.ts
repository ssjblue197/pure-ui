import PBreadcrumbItem from "./breadcrumb-item.component.js";

export * from "./breadcrumb-item.component.js";
export default PBreadcrumbItem;

PBreadcrumbItem.define("p-breadcrumb-item");

declare global {
  interface HTMLElementTagNameMap {
    "p-breadcrumb-item": PBreadcrumbItem;
  }
}

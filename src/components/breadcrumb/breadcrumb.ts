import PBreadcrumb from './breadcrumb.component.js';

export * from './breadcrumb.component.js';
export default PBreadcrumb;

PBreadcrumb.define('p-breadcrumb');

declare global {
  interface HTMLElementTagNameMap {
    'p-breadcrumb': PBreadcrumb;
  }
}

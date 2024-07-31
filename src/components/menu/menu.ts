import PMenu from './menu.component.js';

export * from './menu.component.js';
export default PMenu;

PMenu.define('p-menu');

declare global {
  interface HTMLElementTagNameMap {
    'p-menu': PMenu;
  }
}

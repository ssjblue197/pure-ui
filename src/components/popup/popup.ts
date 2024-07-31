import PPopup from './popup.component.js';

export * from './popup.component.js';
export default PPopup;

PPopup.define('p-popup');

declare global {
  interface HTMLElementTagNameMap {
    'p-popup': PPopup;
  }
}

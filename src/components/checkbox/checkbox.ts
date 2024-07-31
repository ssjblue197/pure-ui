import PCheckbox from './checkbox.component.js';

export * from './checkbox.component.js';
export default PCheckbox;

PCheckbox.define('p-checkbox');

declare global {
  interface HTMLElementTagNameMap {
    'p-checkbox': PCheckbox;
  }
}

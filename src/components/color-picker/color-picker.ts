import PColorPicker from './color-picker.component.js';

export * from './color-picker.component.js';
export default PColorPicker;

PColorPicker.define('p-color-picker');

declare global {
  interface HTMLElementTagNameMap {
    'p-color-picker': PColorPicker;
  }
}

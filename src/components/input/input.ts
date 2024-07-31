import PInput from './input.component.js';

export * from './input.component.js';
export default PInput;

PInput.define('p-input');

declare global {
  interface HTMLElementTagNameMap {
    'p-input': PInput;
  }
}

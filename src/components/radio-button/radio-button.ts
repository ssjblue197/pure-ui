import PRadioButton from './radio-button.component.js';

export * from './radio-button.component.js';
export default PRadioButton;

PRadioButton.define('p-radio-button');

declare global {
  interface HTMLElementTagNameMap {
    'p-radio-button': PRadioButton;
  }
}

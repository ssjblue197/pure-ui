import PRadioGroup from './radio-group.component.js';

export * from './radio-group.component.js';
export default PRadioGroup;

PRadioGroup.define('p-radio-group');

declare global {
  interface HTMLElementTagNameMap {
    'p-radio-group': PRadioGroup;
  }
}

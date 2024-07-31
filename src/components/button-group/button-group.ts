import PButtonGroup from './button-group.component.js';

export * from './button-group.component.js';
export default PButtonGroup;

PButtonGroup.define('p-button-group');

declare global {
  interface HTMLElementTagNameMap {
    'p-button-group': PButtonGroup;
  }
}

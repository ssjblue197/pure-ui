import PIconButton from './icon-button.component.js';

export * from './icon-button.component.js';
export default PIconButton;

PIconButton.define('p-icon-button');

declare global {
  interface HTMLElementTagNameMap {
    'p-icon-button': PIconButton;
  }
}

import PCopyButton from './copy-button.component.js';

export * from './copy-button.component.js';
export default PCopyButton;

PCopyButton.define('p-copy-button');

declare global {
  interface HTMLElementTagNameMap {
    'p-copy-button': PCopyButton;
  }
}

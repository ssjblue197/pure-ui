import PAlert from './alert.component.js';

export * from './alert.component.js';
export default PAlert;

PAlert.define('p-alert');

declare global {
  interface HTMLElementTagNameMap {
    'p-alert': PAlert;
  }
}

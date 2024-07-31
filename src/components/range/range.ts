import PRange from './range.component.js';

export * from './range.component.js';
export default PRange;

PRange.define('p-range');

declare global {
  interface HTMLElementTagNameMap {
    'p-range': PRange;
  }
}

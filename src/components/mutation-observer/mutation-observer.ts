import PMutationObserver from './mutation-observer.component.js';

export * from './mutation-observer.component.js';
export default PMutationObserver;

PMutationObserver.define('p-mutation-observer');

declare global {
  interface HTMLElementTagNameMap {
    'p-mutation-observer': PMutationObserver;
  }
}

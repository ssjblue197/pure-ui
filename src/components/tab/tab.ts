import PTab from './tab.component.js';

export * from './tab.component.js';
export default PTab;

PTab.define('p-tab');

declare global {
  interface HTMLElementTagNameMap {
    'p-tab': PTab;
  }
}

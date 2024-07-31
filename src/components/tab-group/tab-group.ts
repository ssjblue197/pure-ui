import PTabGroup from './tab-group.component.js';

export * from './tab-group.component.js';
export default PTabGroup;

PTabGroup.define('p-tab-group');

declare global {
  interface HTMLElementTagNameMap {
    'p-tab-group': PTabGroup;
  }
}

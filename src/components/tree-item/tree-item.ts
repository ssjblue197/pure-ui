import PTreeItem from './tree-item.component.js';

export * from './tree-item.component.js';
export default PTreeItem;

PTreeItem.define('p-tree-item');

declare global {
  interface HTMLElementTagNameMap {
    'p-tree-item': PTreeItem;
  }
}

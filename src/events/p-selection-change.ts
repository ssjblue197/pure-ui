import type PTreeItem from '../components/tree-item/tree-item.js';

export type PSelectionChangeEvent = CustomEvent<{ selection: PTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'p-selection-change': PSelectionChangeEvent;
  }
}

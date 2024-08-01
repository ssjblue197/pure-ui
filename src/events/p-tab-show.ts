export type PTabShowEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-tab-show": PTabShowEvent;
  }
}

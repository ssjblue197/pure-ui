export type PTabHideEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-tab-hide": PTabHideEvent;
  }
}

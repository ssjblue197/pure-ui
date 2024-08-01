export type PAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-after-hide": PAfterHideEvent;
  }
}

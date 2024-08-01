export type PAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-after-show": PAfterShowEvent;
  }
}

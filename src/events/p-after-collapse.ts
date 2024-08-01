export type PAfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-after-collapse": PAfterCollapseEvent;
  }
}

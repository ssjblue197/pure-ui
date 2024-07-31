export type PAfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'p-after-expand': PAfterExpandEvent;
  }
}

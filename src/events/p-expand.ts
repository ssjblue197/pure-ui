export type PExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-expand": PExpandEvent;
  }
}

export type PChangeLimitEvent = CustomEvent<Record<PropertyKey, unknown>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-change-limit": PChangeLimitEvent;
  }
}

export type PChangeLimitEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-change-limit": PChangeLimitEvent;
  }
}

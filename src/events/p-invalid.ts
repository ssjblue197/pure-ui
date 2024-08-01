export type PInvalidEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-invalid": PInvalidEvent;
  }
}

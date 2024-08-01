export type PInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-initial-focus": PInitialFocusEvent;
  }
}

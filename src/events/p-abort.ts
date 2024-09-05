export type PAbortEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-abort": PAbortEvent;
  }
}

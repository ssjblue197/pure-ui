export type PRemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'p-remove': PRemoveEvent;
  }
}

export type PLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-lazy-load": PLazyLoadEvent;
  }
}

export type PLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'p-lazy-change': PLazyChangeEvent;
  }
}

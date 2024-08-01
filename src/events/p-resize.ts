export type PResizeEvent = CustomEvent<{ entries: ResizeObserverEntry[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-resize": PResizeEvent;
  }
}

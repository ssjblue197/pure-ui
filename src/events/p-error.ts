export type PErrorEvent = CustomEvent<{ status?: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-error": PErrorEvent;
  }
}

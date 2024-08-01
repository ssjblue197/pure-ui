export type PRequestCloseEvent = CustomEvent<{
  source: "close-button" | "keyboard" | "overlay";
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-request-close": PRequestCloseEvent;
  }
}

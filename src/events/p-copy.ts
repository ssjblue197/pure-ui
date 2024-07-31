export type PCopyEvent = CustomEvent<{ value: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'p-copy': PCopyEvent;
  }
}

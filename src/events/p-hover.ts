export type PHoverEvent = CustomEvent<{
  phase: "start" | "move" | "end";
  value: number;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-hover": PHoverEvent;
  }
}

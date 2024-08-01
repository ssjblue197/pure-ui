export type PMutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-mutation": PMutationEvent;
  }
}

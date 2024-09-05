import type { FileInfo } from "../components/file-upload/library.js";

export type PRemoveEvent = CustomEvent<{
  file?: FileInfo;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-remove": PRemoveEvent;
  }
}

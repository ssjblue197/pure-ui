import type { FileInfo } from "../components/file-upload/library.js";

export type PRemoveEvent = CustomEvent<FileInfo | Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-remove": PRemoveEvent;
  }
}

import type { FileInfo } from "../components/file-upload/library.js";

export type PChangeEvent = CustomEvent<FileInfo[] | Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-change": PChangeEvent;
  }
}

import type { FileInfo } from "../components/file-upload/library.js";

export type PChangeEvent = CustomEvent<{
  files?: FileInfo[];
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-change": PChangeEvent;
  }
}

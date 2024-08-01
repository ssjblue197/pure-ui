import type PMenuItem from "../components/menu-item/menu-item.js";

export type PSelectEvent = CustomEvent<{ item: PMenuItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-select": PSelectEvent;
  }
}

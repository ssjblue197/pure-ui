import type { TableRowData as PTableRowData } from "../components/table/table.js";

export type PTableRowSelectEvent = CustomEvent<{ selection: PTableRowData[]; row?: PTableRowData }>;

declare global {
  interface GlobalEventHandlersEventMap {
    "p-table-row-select": PTableRowSelectEvent;
  }
}

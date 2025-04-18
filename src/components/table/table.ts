import PTable from "./table.component.js";
import type { HTMLTemplateResult } from "lit";

export * from "./table.component.js";
export default PTable;

export interface ColumnConfig {
  field?: string;
  id?: string;
  type?: string | string[];
  cellDataType?: boolean | string; //'text', 'number', 'boolean', 'date', 'dateString' and 'object'. Default ise true
  hide?: boolean;
  draggable?: boolean;
  resizable?: boolean;
  sort?: boolean; // 'asc' or 'desc'
  comparator?: (T: unknown) => void;
  filter?: boolean;
  headerName?: string;
  headerRender?: (T: unknown) => string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  visible?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  filterOptions?: string[] | object[];
  editable?: boolean;
  render?: (T: unknown) => string;
  renderSlot?: (T: unknown) => symbol | HTMLTemplateResult | undefined;
  alignItems?: "flex-start" | "flex-end" | "center";
  justifyContent?: "flex-start" | "flex-end" | "center";
  justifyItems?: "flex-start" | "flex-end" | "center";
  classes?: string;
  truncate?: boolean;
  sticky?: "start" | "end";
  stickyOffset?: number;
}

export interface TableRowData {
  [key: string]: unknown;
}

export interface TableOptions<T> {
  columns: ColumnConfig[];
  getSelectedRows?: () => T[];
  minHeight?: string;
  maxHeight?: string;
  selectable?: boolean;
  draggable?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
  paginate?: boolean;
  expandable?: boolean;
  rowExpandable?: (T: unknown) => boolean;
  rowExpandRender?: (T: unknown) => string;
  onRowExpand?: (row: T) => symbol | HTMLTemplateResult | undefined;
  onRowCollapse?: (row: T) => symbol | HTMLTemplateResult | undefined;
}

PTable.define("p-table");

declare global {
  interface HTMLElementTagNameMap {
    "p-table": PTable;
  }
}

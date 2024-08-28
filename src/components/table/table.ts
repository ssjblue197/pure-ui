import PTable from "./table.component.js";

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
  headerTitle?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  visible?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  filterOptions?: string[] | object[];
  editable?: boolean;
  render?: (T: unknown) => void;
}

export interface TableOptions<TableRowData> {
  columns: ColumnConfig[];
  data: TableRowData[];
  onRowSelected?: (row: TableRowData) => void;
  getSelectedRows?: () => TableRowData[];
}

PTable.define("p-table");

declare global {
  interface HTMLElementTagNameMap {
    "p-table": PTable;
  }
}

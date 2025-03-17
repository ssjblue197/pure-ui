---
meta:
  headerTitle: Table
  description:
layout: component
---

```html:preview
<p-table
  class="table-example"
  limit="2"
>

</p-table>
<script>
  const table = document.querySelector('.table-example');

  table.addEventListener('click', (e) => {
    console.log(e);
  })

  table.loading = true;

  table.options = {
    paginate: true,
    selectable: true,
    columns: [{field: 'name',
    id: 'name',
    headerName: 'Full name',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizable: true,
    minWidth: '120px',
    sticky: 'start'
  },{field: 'age',
    id: 'age',
    headerName: 'Age',
  },{field: 'address.street',
    id: 'street',
    headerName: 'Street',
    maxWidth: '400px',
  },{field: 'address.department',
    id: 'department',
    headerName: 'Department',
  },{field: 'address.city',
    id: 'city',
    headerName: 'City',
  },{field: 'address.country',
    id: 'country',
    headerName: 'Country',
  }, {field: 'status',
    id: 'status',
    headerName: 'Status',
    render: (row) => `${String(row.status) == '1' ? 'Active' : 'Inactive'}`,
    justifyContent: 'center',
  }
  ]
  }

  setTimeout(() => {
    table.data = [{
    "name": "Alice",
    "age": "28",
    "address": {
      "street": "2 Elm Street",
      "department": "Greenwood",
      "city": "Portland",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "Bob",
    "age": "35",
    "address": {
      "street": "3 Oak Street",
      "department": "Lakeside",
      "city": "Chicago",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Charlie",
    "age": "22",
    "address": {
      "street": "4 Pine Street",
      "department": "Downtown",
      "city": "San Francisco",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "David",
    "age": "40",
    "address": {
      "street": "5 Maple Street",
      "department": "Westside",
      "city": "Los Angeles",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Eva",
    "age": "31",
    "address": {
      "street": "6 Birch Street",
      "department": "Riverside",
      "city": "Austin",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "Frank",
    "age": "29",
    "address": {
      "street": "7 Cedar Street",
      "department": "Northside",
      "city": "Denver",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Grace",
    "age": "33",
    "address": {
      "street": "8 Willow Street",
      "department": "Southside",
      "city": "Miami",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "Hannah",
    "age": "25",
    "address": {
      "street": "9 Walnut Street",
      "department": "Eastside",
      "city": "Boston",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Ivy",
    "age": "27",
    "address": {
      "street": "10 Chestnut Street",
      "department": "Central",
      "city": "Philadelphia",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "Jack",
    "age": "32",
    "address": {
      "street": "11 Ash Street",
      "department": "Uptown",
      "city": "Atlanta",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Karen",
    "age": "36",
    "address": {
      "street": "12 Fir Street",
      "department": "Midtown",
      "city": "Seattle",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "Leo",
    "age": "24",
    "address": {
      "street": "13 Poplar Street",
      "department": "Parkside",
      "city": "San Diego",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Mia",
    "age": "26",
    "address": {
      "street": "14 Sycamore Street",
      "department": "Harbor",
      "city": "San Jose",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "Nina",
    "age": "29",
    "address": {
      "street": "15 Magnolia Street",
      "department": "Hilltop",
      "city": "Las Vegas",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Oliver",
    "age": "31",
    "address": {
      "street": "16 Hickory Street",
      "department": "Downtown",
      "city": "Orlando",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "Paula",
    "age": "37",
    "address": {
      "street": "17 Locust Street",
      "department": "Sunset",
      "city": "Honolulu",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Quinn",
    "age": "23",
    "address": {
      "street": "18 Elm Street",
      "department": "Springfield",
      "city": "New York",
      "country": "USA"
    },
    "status": 1
  },
  {
    "name": "Rachel",
    "age": "34",
    "address": {
      "street": "19 Redwood Street",
      "department": "Elmwood",
      "city": "Washington",
      "country": "USA"
    },
    "status": 0
  },
  {
    "name": "Steve",
    "age": "38",
    "address": {
      "street": "20 Oak Street",
      "department": "Creekside",
      "city": "Dallas",
      "country": "USA"
    },
    "status": 1
  }]

  table.options = JSON.parse(JSON.stringify(table.options));

  table.loading = false;

  }, 3000);

</script>


```

## TableOptions Interface

The `TableOptions<T>` interface defines the configuration options for the table component. Below is a breakdown of each property:

```typescript
export interface TableOptions<T> {
  columns: ColumnConfig[];
  minHeight?: string;
  maxHeight?: string;
  selectable?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
  paginate?: boolean;
}
```

### `columns`

- **Type**: `ColumnConfig[]`
- **Required**: Yes
- **Description**: Defines the structure of columns in the table. The `ColumnConfig` array specifies how each column should be displayed, including options like the `field` (the data property associated with the column), `headerName` (the display name of the column), and other layout-related properties like `width`.

### `getSelectedRows`

- **Type**: `() => T[]`
- **Required**: No
- **Description**: A callback function that returns an array of selected rows. This is useful when the table has the `selectable` option enabled, allowing you to retrieve the selected rows programmatically.

### `minHeight`

- **Type**: `string`
- **Required**: No
- **Description**: Sets a minimum height for the table. The value can be provided in any valid CSS unit such as `px`, `%`, `em`, `rem`, etc. Ensures that the table will not shrink smaller than this height even if it contains little content.

### `maxHeight`

- **Type**: `string`
- **Required**: No
- **Description**: Sets a maximum height for the table. When the table's content exceeds this height, a scrollbar will appear to allow vertical scrolling. The value can be defined using any CSS height unit.

### `selectable`

- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: When set to `true`, rows in the table become selectable. This allows users to select one or multiple rows, which can later be retrieved using the `getSelectedRows` method.

### `hideHeader`

- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: When set to `true`, the header row (the row that displays column titles) is hidden from view. This can be useful when displaying minimalistic tables or when the header information is not required.

### `hideFooter`

- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: When set to `true`, the footer row is hidden from view. This is useful for tables that do not require a footer for pagination or summary information.

### `paginate`

- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: Enables pagination in the table. When set to `true`, the table will only display a limited number of rows per page, and users can navigate between different pages of data.

## ColumnConfig Properties

The `TableOptions<T>` interface defines the configuration options for the table component. Below is a breakdown of each property:

```typescript
export interface ColumnConfig {
  field?: string;
  hide?: boolean;
  resizable?: boolean;
  headerName?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  render?: (T: unknown) => string;
  alignItems?: "flex-start" | "flex-end" | "center";
  justifyContent?: "flex-start" | "flex-end" | "center";
  justifyItems?: "flex-start" | "flex-end" | "center";
  classes?: string;
  truncate?: boolean;
  sticky?: "start" | "end";
  stickyOffset?: number;
}
```

### `field`

- **Type**: `string`
- **Required**: No
- **Description**: The key in the data object that corresponds to the column’s value. This maps the column to the specific field in the data.

### `hide`

- **Type**: `boolean`
- **Required**: No
- **Description**: When set to `true`, this column will be hidden from the table.

### `resizable`

- **Type**: `boolean`
- **Required**: No
- **Description**: Makes the column resizable, allowing users to adjust the width of the column by dragging.

### `headerName`

- **Type**: `string`
- **Required**: No
- **Description**: The display name of the column in the header.

### `width`

- **Type**: `string`
- **Required**: No
- **Description**: Defines the width of the column. Can be set in any valid CSS unit like `px`, `em`, `%`, etc.

### `minWidth`

- **Type**: `string`
- **Required**: No
- **Description**: Sets the minimum width of the column in any valid CSS unit.

### `maxWidth`

- **Type**: `string`
- **Required**: No
- **Description**: Sets the maximum width of the column in any valid CSS unit.

### `render`

- **Type**: `(T: unknown) => string`
- **Required**: No
- **Description**: A custom render function that returns the HTML content as a string for each cell in the column.

### `alignItems`

- **Type**: `"flex-start" | "flex-end" | "center"`
- **Required**: No
- **Description**: Controls how the column content is aligned along the cross-axis (vertical) inside the column. Aligns to start, end, or center.

### `justifyContent`

- **Type**: `"flex-start" | "flex-end" | "center"`
- **Required**: No
- **Description**: Defines how the column content is aligned along the main axis (horizontal) inside the column.

### `justifyItems`

- **Type**: `"flex-start" | "flex-end" | "center"`
- **Required**: No
- **Description**: Defines the alignment of items inside the cell, aligning the content within the cell based on the specified value.

### `classes`

- **Type**: `string`
- **Required**: No
- **Description**: Additional CSS classes to apply to the column cells.

### `truncate`

- **Type**: `boolean`
- **Required**: No
- **Description**: If set to `true`, cell content that overflows will be truncated with ellipsis (`...`). This is useful for managing long content in limited column width.

### `sticky`

- **Type**: `"start" | "end"`
- **Required**: No
- **Description**: Makes the column sticky, so it stays in place when scrolling. `start` sticks the column to the left, and `end` sticks the column to the right.

### `stickyOffset`

- **Type**: `number`
- **Required**: No
- **Description**: Defines the offset (in pixels) for the sticky column from the edge (left or right) when the `sticky` option is used.

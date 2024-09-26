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
    width: '150px',
    minWidth: '120px',
    maxWidth: '300px'
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

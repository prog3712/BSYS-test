const allocatedColumnsConfig = [
  {
    Header: "Allocated Orders",
    columns: [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Date expected",
        accessor: "date",
      },
    ],
  },
];

const purchasesColumnsConfig = [
  {
    Header: "Purchase Orders",
    columns: [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Date Receiving",
        accessor: "receiving",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
    ],
  },
];

const salesColumnsConfig = [
  {
    Header: "Sales Orders",
    columns: [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Date Created",
        accessor: "created",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
    ],
  },
];

export { allocatedColumnsConfig, purchasesColumnsConfig, salesColumnsConfig };

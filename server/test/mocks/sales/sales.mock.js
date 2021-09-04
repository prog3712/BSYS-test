module.exports = {
  singleSale: {
    id: "S1",
    created: "2020-01-02",
    quantity: 6,
  },
  sales: [
    {
      id: "S1",
      created: "2020-01-02",
      quantity: 6,
    },
    {
      id: "S2",
      created: "2020-11-05",
      quantity: 2,
    },
    {
      id: "S3",
      created: "2019-12-04",
      quantity: 3,
    },
    {
      id: "S4",
      created: "2020-01-20",
      quantity: 2,
    },
    {
      id: "S5",
      created: "2019-12-15",
      quantity: 9,
    },
  ],
  orderedSales: [
    {
      id: "S3",
      created: "2019-12-04",
      date: new Date("2019-12-04"),
      quantity: 3,
    },
    {
      id: "S5",
      created: "2019-12-15",
      date: new Date("2019-12-15"),
      quantity: 9,
    },
    {
      id: "S1",
      created: "2020-01-02",
      date: new Date("2020-01-02"),
      quantity: 6,
    },
    {
      id: "S4",
      created: "2020-01-20",
      date: new Date("2020-01-20"),
      quantity: 2,
    },
    {
      id: "S2",
      created: "2020-11-05",
      date: new Date("2020-11-05"),
      quantity: 2,
    },
  ],
};

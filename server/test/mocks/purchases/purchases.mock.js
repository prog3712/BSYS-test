module.exports = {
  singlePurchase: {
    id: "P1",
    receiving: "2020-01-04",
    quantity: 4,
  },
  purchases: [
    {
      id: "P1",
      receiving: "2020-01-04",
      quantity: 4,
    },
    {
      id: "P2",
      receiving: "2020-01-05",
      quantity: 3,
    },
    {
      id: "P3",
      receiving: "2020-02-01",
      quantity: 5,
    },
    {
      id: "P4",
      receiving: "2020-03-05",
      quantity: 1,
    },
    {
      id: "P5",
      receiving: "2020-02-20",
      quantity: 7,
    },
  ],
  orderedPurchases: [
    {
      id: "P1",
      date: new Date("2020-01-04"),
      receiving: "2020-01-04",
      quantity: 4,
    },
    {
      id: "P2",
      date: new Date("2020-01-05"),
      receiving: "2020-01-05",
      quantity: 3,
    },
    {
      id: "P3",
      date: new Date("2020-02-01"),
      receiving: "2020-02-01",
      quantity: 5,
    },
    {
      id: "P5",
      date: new Date("2020-02-20"),
      receiving: "2020-02-20",
      quantity: 7,
    },
    {
      id: "P4",
      date: new Date("2020-03-05"),
      receiving: "2020-03-05",
      quantity: 1,
    },
  ],
};

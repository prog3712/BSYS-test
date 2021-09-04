const SupplyController = require("./supply.controller");

const {
  SalesMock: { orderedSales, singleSale, sales },
  PurchasesMock: { orderedPurchases, purchases },
} = require("../test/mocks");

describe("Supply Controller", () => {
  it("shuold get a singleton with getInstance function", () => {
    const _supplyController1 = SupplyController.getInstance();
    const _supplyController2 = SupplyController.getInstance();
    expect(_supplyController1).toEqual(_supplyController2);
  });

  it("should get the current stock", () => {
    const _supplyController = new SupplyController();
    const currentStock = _supplyController.getCurrentStock();
    expect(currentStock).toBe(0);
  });

  it("should add a quantity to the stock with a positive parameter", () => {
    const _supplyController = new SupplyController();
    const added = _supplyController.addToStock(5);
    const currentStock = _supplyController.getCurrentStock();
    expect(added).toBe(true);
    expect(currentStock).toBe(5);
  });

  it("should not add a quantity to the stock with a negative parameter", () => {
    const _supplyController = new SupplyController();
    const added = _supplyController.addToStock(-1);
    const currentStock = _supplyController.getCurrentStock();
    expect(added).toBe(false);
    expect(currentStock).toBe(0);
  });

  it("should remove from the stock with quantity lower than the current stock", () => {
    const _supplyController = new SupplyController();
    const added = _supplyController.addToStock(5);
    const removed = _supplyController.removeFromStock(3);
    expect(added).toBe(true);
    expect(removed).toBe(true);
  });

  it("should not remove from the stock with quantity greater than the current stock", () => {
    const _supplyController = new SupplyController();
    const added = _supplyController.addToStock(3);
    const removed = _supplyController.removeFromStock(5);
    expect(added).toBe(true);
    expect(removed).toBe(false);
  });

  it("should add a sale to a queue", () => {
    const _supplyController = new SupplyController();
    _supplyController.addSaleToQueue(singleSale);
    expect(_supplyController.salesQueue).toEqual([singleSale]);
  });

  it("should remove a sale from a queue", () => {
    const _supplyController = new SupplyController();
    _supplyController.addSaleToQueue(sales[0]);
    _supplyController.addSaleToQueue(sales[1]);
    expect(_supplyController.salesQueue.length).toBe(2);
    const saleRemoved = _supplyController.removeSaleFromQueue();
    expect(saleRemoved).toEqual(sales[0]);
    expect(_supplyController.salesQueue.length).toBe(1);
  });

  it("should return an ordered list with date attribute", () => {
    const _supplyController = new SupplyController();
    const orderedList = _supplyController.orderListWithDateAttr(
      sales,
      "created"
    );
    expect(orderedList).toEqual(orderedSales);
  });

  it("should process a purchase", () => {
    const _supplyController = new SupplyController();
    orderedSales.map((s) => _supplyController.addSaleToQueue(s));
    _supplyController.processPurchase(orderedPurchases[0]);
    const currentStock = _supplyController.getCurrentStock();
    expect(currentStock).toBe(1);
    expect(_supplyController.allocatedSales.length).toBe(1);
  });

  it("should allocate sales", () => {
    const _supplyController = new SupplyController();
    _supplyController.allocate(sales, purchases);
    const currentStock = _supplyController.getCurrentStock();
    expect(currentStock).toBe(0);
    expect(_supplyController.allocatedSales.length).toBe(4);
    expect(_supplyController.notAllocatedSales.length).toBe(1);
  });

  it("should allocate all sales with enough stock", () => {
    const _supplyController = new SupplyController();
    const morePurchases = [
      ...purchases,
      {
        id: "P6",
        receiving: "2020-12-12",
        quantity: 8,
      },
    ];
    _supplyController.allocate(sales, morePurchases);
    const currentStock = _supplyController.getCurrentStock();
    expect(currentStock).toBe(6);
    expect(_supplyController.allocatedSales.length).toBe(5);
    expect(_supplyController.notAllocatedSales.length).toBe(0);
  });

  it("allocate function should works even with empty sales and purchases", () => {
    const _supplyController = new SupplyController();
    _supplyController.allocate();
    const currentStock = _supplyController.getCurrentStock();
    expect(currentStock).toBe(0);
    expect(_supplyController.allocatedSales.length).toBe(0);
    expect(_supplyController.notAllocatedSales.length).toBe(0);
  });
});

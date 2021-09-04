class SupplyController {
  constructor() {
    this.allocatedSales = [];
    this.notAllocatedSales = [];
    this.instance;
    this.salesQueue = [];
    this.stock = 0;
  }

  static getInstance() {
    if (!SupplyController.instance) {
      SupplyController.instance = new SupplyController();
    }
    return SupplyController.instance;
  }

  addToStock(quantity) {
    if (quantity <= 0) {
      return false;
    }
    this.stock += quantity;
    return true;
  }

  removeFromStock(quantity) {
    if (quantity > this.stock) {
      return false;
    }
    this.stock -= quantity;
    return true;
  }

  getCurrentStock() {
    return this.stock;
  }

  orderListWithDateAttr(list, dateColumn) {
    return [...list]
      .map((item) => ({
        ...item,
        date: new Date(item[dateColumn]),
      }))
      .sort((o1, o2) => o1.date - o2.date);
  }

  addSaleToQueue(sale) {
    return this.salesQueue.push(sale);
  }

  removeSaleFromQueue() {
    return this.salesQueue.shift();
  }

  processPurchase(purchase) {
    this.addToStock(purchase.quantity);
    if (
      this.salesQueue.length > 0 &&
      this.salesQueue[0].date <= purchase.date &&
      this.stock >= this.salesQueue[0].quantity
    ) {
      const sale = this.removeSaleFromQueue();
      this.removeFromStock(sale.quantity);
      this.allocatedSales.push({
        id: sale.id,
        date: purchase.receiving,
      });
    }
  }

  allocate(salesOrders = [], purchaseOrders = []) {
    const purchases = this.orderListWithDateAttr(purchaseOrders, "receiving");

    this.orderListWithDateAttr(salesOrders, "created").map(this.addSaleToQueue.bind(this));

    purchases.forEach((purchase) => {
      this.processPurchase(purchase);
    });

    if (this.salesQueue.length > 0) {
      this.notAllocatedSales = this.salesQueue.map((sale) => ({
        id: sale.id,
        date: "Not Allocated. There is not enough product stock yet.",
      }));
      return [].concat(this.allocatedSales, this.notAllocatedSales);
    }

    return this.allocatedSales;
  }
}

module.exports = SupplyController;

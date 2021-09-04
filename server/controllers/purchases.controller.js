const { purchaseOrders } = require("../database");

class PurchasesController {
  getPurchases = () => purchaseOrders;
}

module.exports = PurchasesController;

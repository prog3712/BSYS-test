const { salesOrders } = require("../database");

class SalesController {
  getSales = () => salesOrders;
}

module.exports = SalesController;

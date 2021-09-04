const express = require("express");
const {
  PurchasesController,
  SalesController,
  SupplyController,
} = require("../controllers");

const router = express.Router();

/* GET allocated orders */
router.get("/supply/allocate", function (req, res, next) {
  const salesController = new SalesController();
  const purchasesController = new PurchasesController();
  const supplyController = SupplyController.getInstance();

  const sales = salesController.getSales();
  const purchases = purchasesController.getPurchases();

  const allocatedOrders = supplyController.allocate(sales, purchases);

  res.send(allocatedOrders);
});

module.exports = router;

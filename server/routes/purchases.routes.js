const express = require("express");
const { PurchasesController } = require("../controllers");

const router = express.Router();

/* GET purchases */
router.get("/purchases", function (req, res, next) {
  const purchases = new PurchasesController();
  res.send(purchases.getPurchases());
});

module.exports = router;

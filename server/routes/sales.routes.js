const express = require("express");
const { SalesController } = require("../controllers");

const router = express.Router();

/* GET sales */
router.get("/sales", function (req, res, next) {
  const sales = new SalesController();
  res.send(sales.getSales());
});

module.exports = router;

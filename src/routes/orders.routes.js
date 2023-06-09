const { Router } = require("express");
const {
  createOrder,
  addProductsToOrder,
} = require("../controllers/orders.controllers");

const router = Router();

router.post("/orders", createOrder);

router.post("/orders/:id/products", addProductsToOrder);

module.exports = router;

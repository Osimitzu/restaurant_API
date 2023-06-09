const { orders } = require("../models");

const createOrder = async (data) => {
  const order = await orders.create(data);
  return order;
};

module.exports = {
  createOrder,
};

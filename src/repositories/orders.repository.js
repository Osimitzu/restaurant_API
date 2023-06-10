const { orders } = require("../models");

const createOrder = async (data) => {
  const order = await orders.create(data);
  return order;
};

const updateTotal = async (price, id) => {
  const order = await orders.increment(
    { total: price },
    {
      where: { id },
    }
  );
  return order;
};

module.exports = {
  createOrder,
  updateTotal,
};

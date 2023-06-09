const { order_details } = require("../models");

const getOneProduct = (product_id) => {
  const product = order_details.findOne({
    where: { product_id },
  });
  return product;
  // si no existe --> null
  // si existe --> object
};

const addProduct = (product) => {
  const item = order_details.create(product);
  return item;
};

const updateQuantity = async (product_id) => {
  const product = order_details.increment(
    {
      quantity: 1,
    },
    {
      where: { product_id },
    }
  );
  return product;
};

module.exports = {
  getOneProduct,
  addProduct,
  updateQuantity,
};

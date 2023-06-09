const OrderServices = require("../services/orders.services");

const createOrder = async (req, res) => {
  try {
    const data = req.body;
    // const {tableId, userId} = req.body; <-- Es lo mismo que la linea de arriba.
    const order = await OrderServices.createNewOrder(data);
    // await OrderServices.createNewOrder({ tableId, userId }); <-- Y se usaria esta linea con la segunda forma.
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

const addProductsToOrder = async (req, res) => {
  try {
    const { product_id, price, quantity } = req.body;
    const { id: order_id } = req.params;
    await OrderServices.addNewProduct({
      order_id,
      product_id,
      price,
      quantity,
    });
    res.status(201).send();
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createOrder,
  addProductsToOrder,
};

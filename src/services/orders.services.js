const {
  getOneProduct,
  addProduct,
  updateQuantity,
} = require("../repositories/orderDetails.repository");
const {
  createOrder,
  updateTotal,
} = require("../repositories/orders.repository");

class OrderServices {
  static async createNewOrder(data) {
    try {
      return await createOrder(data);
    } catch (err) {
      throw err;
    }
  }

  static async addNewProduct(data) {
    try {
      // verificar si el producto ya existe en la orden
      // findOne (where: {product_id}):
      const product = await getOneProduct(data.product_id);
      // actualizar el total de la orden:
      await updateTotal(data.price, data.order_id);
      // si no existe, lo creo
      // addProduct(data):
      if (!product) {
        return await addProduct(data);
      }
      // si ya existe aumento la cantidad en 1
      // updateQuantity(where: {product_id}):
      return await updateQuantity(data.product_id);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = OrderServices;

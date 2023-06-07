"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetails.belongsTo(models.Orders, { foreignKey: "orderId" });
      OrderDetails.belongsTo(models.Products, { foreignKey: "productId" });
    }
  }
  OrderDetails.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.REAL,
    },
    {
      sequelize,
      modelName: "OrderDetails",
    }
  );
  return OrderDetails;
};

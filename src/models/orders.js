"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsTo(models.Users, { foreignKey: "userId" });
      Orders.belongsTo(models.Table, { foreignKey: "tableId" });
      Orders.hasMany(models.OrderDetails, { foreignKey: "orderId" });
    }
  }
  Orders.init(
    {
      tableId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      total: DataTypes.REAL,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};

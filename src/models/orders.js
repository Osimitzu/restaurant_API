"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.users, { foreignKey: "userId" });
      orders.belongsTo(models.tables, { foreignKey: "tableId" });
      orders.hasMany(models.order_details, { foreignKey: "orderId" });
    }
  }
  orders.init(
    {
      tableId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      total: DataTypes.REAL,
    },
    {
      sequelize,
      modelName: "orders",
    }
  );
  return orders;
};

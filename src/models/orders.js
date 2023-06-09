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
      orders.belongsTo(models.users, { foreignKey: "user_id" });
      orders.belongsTo(models.tables, { foreignKey: "table_id" });
      orders.hasMany(models.order_details, { foreignKey: "order_id" });
    }
  }
  orders.init(
    {
      table_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
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

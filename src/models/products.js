"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.OrderDetails, { foreignKey: "productId" });
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.REAL,
      available: DataTypes.BOOLEAN,
      productImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};

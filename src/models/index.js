"use strict";

const fs = require("fs"); // file system --> para leer y crear archivos de nuestra computadora
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && // no quiero archivos sin extensión
      file !== basename && // no quiero este mismo archivo
      file.slice(-3) === ".js" && // solo quiero archivos .js
      file.indexOf(".test.js") === -1 // solo quiero archivos .test.js
    );
  }) // [orderdetails.js, orders.js, products.js, table.js, users.js]
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    // const model = require('./models/orders.js')
    db[model.name] = model;
    /*
      db = {
        orders: require('./models/orders.js')
      }
    */
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

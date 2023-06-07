"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "table_id",
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "user_id",
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      total: {
        type: Sequelize.REAL,
        defaultValue: 0.0,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};

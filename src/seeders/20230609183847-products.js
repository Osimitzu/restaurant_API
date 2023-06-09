"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Tacos al pastor",
          description: "Deliciosos tacos de puerquito bien mamalucos",
          price: 10.0,
          product_image:
            "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        },
        {
          name: "Tacos de suadero",
          description: "Deliciosos tacos de puerquito bien mamalucos",
          price: 15.5,
          product_image:
            "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        },
        {
          name: "Tacos campechanos",
          description: "Deliciosos tacos de puerquito bien mamalucos",
          price: 20.5,
          product_image:
            "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        },
        {
          name: "Tacos de chistorra",
          description: "Deliciosos tacos de puerquito bien mamalucos",
          price: 18.5,
          product_image:
            "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        },
        {
          name: "Coca cola",
          description: "bebidas mamalucas",
          price: 6.5,
          product_image:
            "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        },
        {
          name: "Jamaica ",
          description: "bebidas mamalucas",
          price: 4.5,
          product_image:
            "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        },
        {
          name: "Horchata",
          description: "bebidas mamalucas",
          price: 4.5,
          product_image:
            "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

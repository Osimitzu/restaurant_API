const userRoutes = require("./users.routes");
const orderRoutes = require("./orders.routes");

const apiRouter = (app) => {
  app.use(userRoutes);
  app.use(orderRoutes);
};

module.exports = apiRouter;

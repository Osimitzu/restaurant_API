const userRoutes = require("./users.routes");

const apiRouter = (app) => {
  app.use(userRoutes);
};

module.exports = apiRouter;

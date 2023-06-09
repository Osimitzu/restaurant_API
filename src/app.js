const express = require("express");
const apiRouter = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor OK");
});

apiRouter(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

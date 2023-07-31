import express from "express";
import cors from "cors";

const bodyParser = require("body-parser");

import UserRoutes from "./routes/UserRoutes";
import HomeRoutes from "./routes/HomeRoutes";

import db from "./config/db";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rotas
app.use("/", HomeRoutes);
app.use("/users", UserRoutes);

try {
  app.listen(port, async () => {
    await db.sync();

    console.log("Connection has been established successfully.");
    console.log(`Listen to port ${port} `);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

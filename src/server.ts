import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize";
import path from "path";

import UserController from "./controller/UserController";

const app = express();
const port = process.env.PORT || 8080;

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "..", "database.sqlite"),
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ message: "Hello World" });
});

app.route("/users").post(UserController.create).get(UserController.listAll);

try {
  app.listen(port, async () => {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log("Listen to port 8080");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const database = process.env.DB_DATABASE ?? "your-database";
const username = process.env.DB_USERNAME ?? "your-username";
const password = process.env.DB_PASSWORD ?? "your-password";
const host = process.env.DB_HOST ?? "localhost";
const port = Number(process.env.DB_PORT) ?? 5432;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: "postgres",
});

export default sequelize;

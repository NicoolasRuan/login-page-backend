import express from "express";
import cors from "cors";

import { Router, Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.post("/user", (req, res) => {
  const user = req.body;

  console.log(user);

  res.send("oii");
});

app.listen(8080, () => {
  console.log("Listen to port 8080");
});

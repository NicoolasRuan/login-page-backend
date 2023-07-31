import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ message: "Hello World" });
});

export default router;

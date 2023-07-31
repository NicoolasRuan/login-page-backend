import express from "express";
import UserController from "../controller/UserController";

const router = express.Router();

router.route("/").get(UserController.listAll).post(UserController.create);

router.route("/:id").get(UserController.getById).put().delete();

export default router;

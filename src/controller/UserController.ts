import { Router, Request, Response } from "express";
import { User } from "../model/UserModel";

export default {
  listAll: async (req: Request, res: Response) => {
    await User.sync();
    try {
      const users = await User.findAll();

      console.log(`Todos os usuarios: ${users}`);
      res.send(users);
    } catch (error) {}
  },

  create: async (req: Request, res: Response) => {
    const user = req.body;

    try {
      await User.create(user);
      User.sync();

      console.log("usuario criado!");
    } catch (error) {}
  },
};

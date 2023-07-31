import { Request, Response } from "express";
import User from "../model/UserModel";

export default {
  listAll: async (req: Request, res: Response) => {
    try {
      const users = await User.findAll();

      res.json(users);
    } catch (error) {
      res.json({ error: error });
    }
  },

  create: async (req: Request, res: Response) => {
    const user = req.body;

    try {
      await User.create(user);

      res.json({ message: "Usuario criado com sucesso!", user: user });
    } catch (error) {
      res.json({ error: error });
    }
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const user = await User.findAll({ where: { id: id } });

      if (user.length > 0) {
        res.send(user);
      } else {
        res.json({ message: "User not found" });
      }
    } catch (error) {
      res.json({ error: error });
    }
  },
};

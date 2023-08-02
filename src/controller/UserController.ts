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

      res.json({ message: "User successfully created!", user: user });
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
  updateUser: async (req: Request, res: Response) => {
    const id = req.params.id;

    const updatedUser = req.body;

    try {
      await User.update(updatedUser, {
        where: {
          id: id,
        },
      });

      res.json({ message: "User successfully updated!" });
    } catch (error) {
      res.json({ error: error });
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      await User.destroy({
        where: {
          id: id,
        },
      });

      res.json({ message: "User has been deleted" });
    } catch (error) {
      res.json({ error: error });
    }
  },
};

import userService from "../services/user.service.js";
import { generateHash } from "../utils/bcypt.utils.js";

const create = async (req, res) => {
  try {
    const user = {
      ...req.body,
      password: await generateHash(req.body.password),
    };
    const result = await userService.create(user);

    return res.status(201).json({ message: "Created successfully", result });
  } catch (err) {
    return res.status(500).json({ message: "Interal server error" });
  }
};

const findAll = async (req, res) => {
  try {
    console.log(req.user);
    const users = await userService.findAll();
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ message: "Interal server error" });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.findOne(id);
    return res.status(200).json({ user: user });
  } catch (err) {
    return res.status(500).json({ message: "Interal server error" });
  }
};

const updateOne = async (req, res) => {};

const userController = { create, findAll, findOne };

export default userController;

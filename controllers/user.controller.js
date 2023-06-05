import userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const user = req.body;
    const result = await userService.create(user);

    return res.status(201).json({ message: "Created successfully", result });
  } catch (err) {
    return res.status(500).json({ message: "Interal server error" });
  }
};

const findAll = async (req, res) => {
  try {
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

const userController = { create, findAll, findOne };

export default userController;

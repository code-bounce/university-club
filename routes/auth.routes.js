import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import authController from "../controllers/auth.controller.js";

dotenv.config();

const router = Router();

router.post("/login", authController.login);

router.get(
  "/private",
  (req, res, next) => {
    const header = req.headers.authorization;
    const token = header.split(" ")[1];

    if (!header) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res.status(401).json({ message: "Unauthorized invalid token" });

      req.user = user;
      next();
    });
  },
  (req, res) => {
    res.json({
      user: req.user,
    });
  }
);

export default router;

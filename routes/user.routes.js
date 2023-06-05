import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.post("/", userController.create);

router.get("/", userController.findAll);

router.get("/:id", userController.findOne);

router.put("/:id");

router.delete("/:id");

export default router;

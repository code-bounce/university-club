import { Router } from "express";
import userController from "../controllers/user.controller.js";
import validateAccessToken from "../middleware/validateAccessToken.js";

const router = Router();

router.post("/", userController.create);

router.get("/", validateAccessToken, userController.findAll);

router.get("/:id", validateAccessToken, userController.findOne);

router.put("/:id", validateAccessToken);

router.delete("/:id", validateAccessToken);

export default router;

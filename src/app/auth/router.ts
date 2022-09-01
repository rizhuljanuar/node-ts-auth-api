import { Router } from "express";
import controller from "./controller";

const router = Router();
const AuthController = new controller();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/refresh-token", AuthController.refreshToken);
router.get("/logout", AuthController.logout);

export default router;

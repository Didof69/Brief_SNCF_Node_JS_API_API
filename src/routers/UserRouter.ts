import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController();

export default userRouter;

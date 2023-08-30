import { Request, Response, Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/signup", (request: Request, response: Response) => {
  userController.signUp(request, response);
});

userRouter.post("/login", (request: Request, response: Response) => {
  userController.login(request, response);
});

export default userRouter;

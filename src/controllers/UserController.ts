import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  private userService = new UserService();

  async signUp(request: Request, response: Response) {
    const pseudo = request.body.pseudo;
    const email = request.body.email;
    const password = request.body.password;
    const createdUser = await this.userService.signUp(pseudo, email, password);

    if (!createdUser) {
      response.status(500).send({ status: "FAILED", message: "Oups..." });
      return;
    }

    response.status(201).send({ status: "OK", data: createdUser });
  }

  async login(request: Request, response: Response) {
    const email = request.body.email;
    const password = request.body.password;

    const token = await this.userService.login(email, password);

    if (!token) {
      response.status(500).send({ status: "FAILED", message: "Oups..." });
      return;
    }

    response.send({ status: "OK", data: token });
  }
}

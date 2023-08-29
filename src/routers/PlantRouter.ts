import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.delete("/:id", (request: Request, response: Response) => {
    plantController.delete(request, response);
  }
);

export default plantRouter;

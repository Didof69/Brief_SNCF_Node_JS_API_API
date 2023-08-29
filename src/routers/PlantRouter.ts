import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/:id", (request: Request, response: Response) => {
  plantController.getPlantById(request, response);
});

export default plantRouter;

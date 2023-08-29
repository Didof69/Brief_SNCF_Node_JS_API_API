import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (request: Request, response: Response) => {
    plantController.getAllPlants(request, response);
});
export default plantRouter;

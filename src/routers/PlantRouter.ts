import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();


plantRouter.get("/", (request: Request, response: Response) => {
    plantController.getAllPlants(request, response);
});

plantRouter.get("/:id", (request: Request, response: Response) => {
    plantController.getPlantById(request, response);
});

plantRouter.put("/:id", (request: Request, response: Response) => {
    plantController.update(request, response);
});


export default plantRouter;
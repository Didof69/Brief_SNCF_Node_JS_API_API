import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.post("/", (request: Request, response: Response) => {
    plantController.create(request, response);
});

export default plantRouter;

import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();


plantRouter.put("/:id", (request: Request, response: Response) => {
    plantController.update(request, response);
});

export default plantRouter;

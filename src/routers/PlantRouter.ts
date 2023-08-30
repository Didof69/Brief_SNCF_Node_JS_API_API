import { Request, Response, Router } from "express";
import { PlantController } from "../controllers/PlantController";
import checkIdNumber from "../middlewares/checkIdNumber";
import checkPlant from "../middlewares/checkPlant";

const plantRouter = Router();
const plantController = new PlantController();
plantRouter.get("/", (request: Request, response: Response) => {
  plantController.getAllPlants(request, response);
});

plantRouter.get(
  "/:id",
  checkIdNumber,
  (request: Request, response: Response) => {
    plantController.getPlantById(request, response);
  }
);

plantRouter.put(
  "/:id",
  checkIdNumber, checkPlant,
  (request: Request, response: Response) => {
    plantController.update(request, response);
  }
);

plantRouter.post("/", checkPlant, (request: Request, response: Response) => {
  plantController.create(request, response);
});

plantRouter.delete(
  "/:id",
  checkIdNumber,
  (request: Request, response: Response) => {
    plantController.delete(request, response);
  }
);
export default plantRouter;

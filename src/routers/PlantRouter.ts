import { Router } from "express";
import { PlantController } from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

export default plantRouter;

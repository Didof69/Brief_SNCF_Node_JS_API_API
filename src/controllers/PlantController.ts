import { Request, Response } from "express";
import { PlantService } from "../services/PlantService";

export class PlantController {
    private plantService = new PlantService();

    async getAllPlants(request: Request, response: Response) {
        const allBooks = await this.plantService.getAll();
        response.send({ status: "OK", data : allBooks });
    }
}

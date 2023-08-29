import { Request, Response } from "express";
import { PlantService } from "../services/PlantService";

export class PlantController {
    private plantService = new PlantService();

    async create(request: Request, response: Response) {
        const body = request.body;
        const createdPlant = await this.plantService.create(body.nom, body.soleil, body.arrosage, body.categorie, body.image);
        response.send({ status: "OK", data: createdPlant });
    }
}
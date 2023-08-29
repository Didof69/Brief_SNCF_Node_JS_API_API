import { Request } from "express-serve-static-core";
import { PlantService } from "../services/PlantService";
import { Response } from "express";

export class PlantController {
    private plantService = new PlantService();


    update(request: Request, response: Response) {
        const id = Number(request.params.id);
        const body = request.body;
        const updatedPlant = this.plantService.update(id, body.title);
        if (!updatedPlant) {
            response.status(404).send({
              status: "FAILED",
              message: `la plante avec l'ide ${id} n'existe pas...`,  
            });
            return;
        }
        response.send({ status: "OK", data: updatedPlant});
    }
}
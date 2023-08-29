import { Request, Response } from "express";
import { PlantService } from "../services/PlantService";

export class PlantController {
  private plantService = new PlantService();

  async getPlantById(request: Request, response: Response) {
    const id = Number(request.params.id);
    const plant = await this.plantService.getById(id);
    if (!plant) {
      response.status(404).send({
        status: "FAILED",
        message: `La plante avec l'${id} n'existe pas...`,
      });
      return;
    }
    response.send({ status: "OK", data: plant });
  }
}

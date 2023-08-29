import { Request, Response } from "express";
import { PlantService } from "../services/PlantService";

export class PlantController {
  private plantService = new PlantService();

  async delete(request: Request, response: Response) {
    const id = Number(request.params.id);
    const deletedBook = await this.plantService.delete(id);
    response.send({
      status: "OK",
      message: `La plante d'id ${id} a bien été supprimée.`,
    });
  }
}
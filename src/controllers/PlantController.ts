import { PlantService } from "../services/PlantService";
import { Request, Response } from "express";

export class PlantController {
  private plantService = new PlantService();

  async getAllPlants(request: Request, response: Response) {
    const allBooks = await this.plantService.getAll();
    response.send({ status: "OK", data: allBooks });
  }

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

  update(request: Request, response: Response) {
    const id = Number(request.params.id);
    const body = request.body;
    const updatedPlant = this.plantService.update(
      id,
      body.nom,
      body.soleil,
      body.arrosage,
      body.categorie,
      body.image
    );
    if (!updatedPlant) {
      response.status(404).send({
        status: "FAILED",
        message: `la plante avec l'id ${id} n'existe pas...`,
      });
      return;
    }
    response.send({ status: "OK", data: updatedPlant });
  }

  async create(request: Request, response: Response) {
    const body = request.body;
    const createdPlant = await this.plantService.create(
      body.nom,
      body.soleil,
      body.arrosage,
      body.categorie,
      body.image
    );
    response.send({ status: "OK", data: createdPlant });
  }

  async delete(request: Request, response: Response) {
    const id = Number(request.params.id);
    const deletedBook = await this.plantService.delete(id);
    response.send({
      status: "OK",
      message: `La plante d'id ${id} a bien été supprimée.`,
    });
  }
}

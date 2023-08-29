import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";


export class PlantService {
  private plantRepository = AppDataSource.getRepository(Plant);

  async delete(id: number) {
      return await this.plantRepository.delete({id})
  }
}
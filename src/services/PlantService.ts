import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";

export class PlantService {
  private plantRepository = AppDataSource.getRepository(Plant);

  getById(idValue: number) {
    const found = this.plantRepository.findOneBy({ id: idValue });
    return found;
  }
}

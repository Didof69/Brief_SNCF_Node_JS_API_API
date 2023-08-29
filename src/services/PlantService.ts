import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";


export class PlantService {
 private plantRepository = AppDataSource.getRepository(Plant)
}
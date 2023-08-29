import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";


export class PlantService {
 private plantRepository = AppDataSource.getRepository(Plant);


update(id: number, titleToUpdate: string) {
    const plantToUpdate = this.getById(id);
    if(!plantToUpdate) {
        return null;
    }
    plantToUpdate.title =titleToUpdate;
    return this.plantRepository.save(plantToUpdate);
}



}
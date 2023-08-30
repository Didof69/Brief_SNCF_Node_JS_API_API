import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";

export class PlantService {
    private plantRepository = AppDataSource.getRepository(Plant);
    
    getAll() {
        return this.plantRepository.find();
    }
    
    getById(idValue: number) {
        const found = this.plantRepository.findOneBy({ id: idValue });
        return found;
    }
    
   async update(id: number, newName: string, newSun: string, newWater: number, newCategory: string, newImage: string) {
        const plantToUpdate = await this.plantRepository.preload({
            id,
            nom: newName,
            soleil: newSun,
            arrosage: newWater,
            categorie: newCategory,
            image: newImage,
        } );
        if(!plantToUpdate) {
            return null;
        }
        return this.plantRepository.save(plantToUpdate);
    }
}

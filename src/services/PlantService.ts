import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";


export class PlantService {
    private plantRepository = AppDataSource.getRepository(Plant);

    create(newNom: string, newSoleil: string, newArrosage: number, newCategorie: string, newImage: string) {
        const newPlant = this.plantRepository.create({
            nom: newNom,
            soleil: newSoleil,
            arrosage: newArrosage,
            categorie: newCategorie,
            image: newImage,
        });
console.log(newPlant);

        return this.plantRepository.save(newPlant);
    }
}
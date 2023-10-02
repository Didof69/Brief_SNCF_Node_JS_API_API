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

  async update(
    id: number,
    newNom: string,
    newSoleil: string,
    newArrosage: number,
    newCategorie: string,
    newImage: string
  ) {
    const plantToUpdate = await this.getById(id);

    if (!plantToUpdate) {
      return null;
    }

    plantToUpdate.nom = newNom;
    plantToUpdate.soleil = newSoleil;
    plantToUpdate.arrosage = newArrosage;
    plantToUpdate.categorie = newCategorie;
    plantToUpdate.image = newImage;

    console.log(plantToUpdate);

    return this.plantRepository.save(plantToUpdate);
  }

  create(
    newNom: string,
    newSoleil: string,
    newArrosage: number,
    newCategorie: string,
    newImage: string
  ) {
    const newPlant = this.plantRepository.create({
      nom: newNom,
      soleil: newSoleil,
      arrosage: newArrosage,
      categorie: newCategorie,
      image: newImage,
    });
    console.log("le token est passé et voici la plante", newPlant);

    return this.plantRepository.save(newPlant);
  }

  async delete(id: number) {
    return await this.plantRepository.delete({ id });
  }
}

import AppDataSource from "../data-source";
import { User } from "../entities/User";

export class PlantService {
    private plantRepository= AppDataSource.getRepository(User)
}
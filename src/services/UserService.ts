import AppDataSource from "../data-source";
import { User } from "../entities/User";

<<<<<<< HEAD
export class PlantService {
    private plantRepository= AppDataSource.getRepository(User)
}
=======
export class UserService {
  private UserRepository = AppDataSource.getRepository(User);
}
>>>>>>> d6ff4ee679d104389e1acbda48acf8d3cc11e742

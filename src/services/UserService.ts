import AppDataSource from "../data-source";
import { User } from "../entities/User";

export class UserService {
  private UserRepository = AppDataSource.getRepository(User);
}

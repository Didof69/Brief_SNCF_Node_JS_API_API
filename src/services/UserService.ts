import AppDataSource from "../data-source";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

      //inscription
    async signUp(pseudo: string, email : string, password:string) {
        console.log(`pseudo : ${pseudo}, email: ${email}, password: ${password}`);

        const rounds = 10; //nb de tours de hachage

    try {
      const hash = await bcrypt.hash(password, rounds);

      const newUser = this.userRepository.create({
        pseudo: pseudo,
        email: email,
        password: hash,
      });

      const createdUser = await this.userRepository.save(newUser);
        return createdUser;
        
    } catch (error) {
      console.error("Mon erreur", error);
      return null;
    }  
    }

    async login(email: string, password: string) {
       // recuperer le user par l'email
        const found = await this.userRepository.findOneBy({ email: email });
        if (!found) {
            return null;
        }

        //verifier le mot de passe
        const passwordMatched = await bcrypt.compare(password, found.password); //compare le password en clair dans les variables au password haché dans found.password

        if (!passwordMatched) {
            return null;
        }

        //obtenir le token
        const token = jwt.sign(
          { sub: found.id, email: found.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        return token;


    }
}

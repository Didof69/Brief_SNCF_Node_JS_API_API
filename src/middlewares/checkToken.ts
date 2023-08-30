import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const checkToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  /**
   * On extrait le token des entêtes de la requête
   */
  const token = request.headers.authorization;
  console.log("Middleware : ", token);

  /**
   * Si aucun token n'est présent dans les entêtes
   * on retourne une erreur d'authentification
   */
  if (!token) {
    response
      .status(403)
      .send({
        status: "FAILED",
        message: "Erreur d'authentification : pas de token",
      });
    return;
  }

  /**
   * On enlève le mot "Bearer " (ajouté pour pouvoir
   * transmettre le token) dans les entêtes de la
   * requête
   */
  const tokenToVerify = token.replace("Bearer ", "");
  try {
    /**
     * On vérifie la validité du token à l'aide
     * de la clé secrète
     */
    jwt.verify(tokenToVerify, process.env.JWT_SECRET);
  } catch (error) {
    /**
     * Si un erreur est détécté le Token n'est pas
     * correct, on renvoie donc une erreur
     */
    response
      .status(403)
      .send({
        status: "FAILED",
        message: "Erreur d'authentification : token HS",
      });
    return;
  }

  /**
   * Si on est arrivé ici, le token est bon on
   * laisse passer la requête !!!
   */
  next();
};

export default checkToken;

import { NextFunction, Request, Response } from "express";

const checkPlant = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const body = request.body;

  if (!body.nom || body.nom.trim() === "") {
    response
      .status(400)
      .send({ status: "FAILED", message: `Le nom doit être renseigné.` });
    return;
  }

  if (!body.soleil || body.soleil.trim() === "") {
    response
      .status(400)
      .send({ status: "FAILED", message: `Le soleil doit être renseigné.` });
    return;
  }

  if (isNaN(body.arrosage)||!body.arrosage){
    response
      .status(400)
      .send({ status: "FAILED", message: `L'arrosage doit être un nombre ou.` });
    return;
  }

  if (!body.categorie || body.categorie.trim() === "") {
    response
      .status(400)
      .send({ status: "FAILED", message: `Le categorie doit être renseigné.` });
      return;
      
  }
  if (!body.image || body.image.trim() === "") {
    response
      .status(400)
      .send({ status: "FAILED", message: `Le image doit être renseigné.` });
    return;
    }
    
  next();
};

export default checkPlant;

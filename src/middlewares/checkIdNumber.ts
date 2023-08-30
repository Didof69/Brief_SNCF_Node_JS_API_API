import { NextFunction, Request, Response } from "express";

const checkIdNumber = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramId = Number(request.params.id);

  if (isNaN(paramId)) {
    response
      .status(400)
      .send({ status: "FAILED", message: `L'id doit être un nombre.` });
    return;
  }

  next();
};

export default checkIdNumber;

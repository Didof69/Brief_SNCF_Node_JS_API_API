import express, { Response, Request } from "express";
import plantRouter from "./routers/PlantRouter";
import AppDataSource from "./data-source";
import userRouter from "./routers/UserRouter";
import cors from "cors";

//.then() permet d'attendre que l'initialisation soit faite (asynchrone)
AppDataSource.initialize()
  .then(() => {
    const app = express();

    //permet à notre API d'accepter des données en entrées en json
    app.use(express.json());

    //cors est nécessaire pour permettre à notre front et notre API de communiquer
    app.use(cors());

    //va rediriger les requetes de localhost:3000/api/books
    app.use("/api/plants", plantRouter);
    app.use("/api/users", userRouter);

    app.listen(3000, () => {
      console.log("application correctement lancée sur le port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

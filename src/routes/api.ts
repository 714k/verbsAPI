import { Application, Request, Response, Router } from "express";
import { verbsRoutes } from "./verbs";

export default(app: Application) => {
  const apiRouter = Router();
  const verbsRouter = Router();

  app.use("api/", apiRouter);
  app.use("api/verbs", verbsRouter);
  app.use("*", (req: Request, res: Response) => {
    res.status(404).send("Not a valid request");
  });

  verbsRoutes(app);
};

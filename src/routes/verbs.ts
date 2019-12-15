import { Application } from "express";
import { getAllVerbs, getVerbByCategory, getVerbByTitle , getVerbsByType }  from "../controllers/verbs";

export const  verbsRoutes = (app: Application) => {
  app.get("/api/verbs", getAllVerbs);
  app.get("/api/verbs/:title", getVerbByTitle);
  app.get("/api/verbs/types/:verbTypes", getVerbsByType);
  app.get("/api/verbs/category/:category", getVerbByCategory);
};

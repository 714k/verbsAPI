import bodyParser from "body-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import connectDB from "./config/connection";
import router from "./routes/api";

const app: Application = express();
const port: string|number = process.env.PORT || 5000;
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

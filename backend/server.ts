import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/database";
import { middlewaresConfig } from "./src/middlewares";
import { rootRoutes } from "./src/routes/index";
import path from "path";

/* Initialization */
const app = express();
/* Config */
connectDB();
dotenv.config({
  path: path.resolve(".env"),
});

/* Middleware Config */
middlewaresConfig(app);
rootRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV}mode on port ${PORT}`)
);

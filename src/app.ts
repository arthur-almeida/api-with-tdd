import express from "express";
import { db } from "./config/database.ts";
import { router } from "./routes/index.ts";

export const app = express();

function configureExpress() {
  app.use(express.json());
  app.use("/", router);
  app.database = db;
  return app;
}

export default async () => {
  const app = configureExpress();
  await app.database?.connect();
  return app;
}

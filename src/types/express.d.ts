import type { Application } from "express";
import type { DB } from "../config/database.ts";

declare module "express-serve-static-core" {
  interface Express {
    database?: DB;
  }
}

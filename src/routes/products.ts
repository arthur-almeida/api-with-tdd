import { Router } from "express";
import { ProductsController } from "../controllers/products.ts";

export const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get("/", (req, res) => productsController.get(req, res));

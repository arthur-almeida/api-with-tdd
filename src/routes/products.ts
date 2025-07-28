import { Router } from "express";
import { ProductsController } from "../controllers/products.ts";
import { Product } from "../models/product.ts";

export const productsRouter = Router();
const productsController = new ProductsController(Product);

productsRouter.get("/", (req, res) => productsController.get(req, res));

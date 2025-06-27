import { Router } from "express";
import { productsRouter } from "./products.ts";

export const router = Router();

router.use("/products", productsRouter);

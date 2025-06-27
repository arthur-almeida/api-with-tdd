import { Router } from "express";

export const productsRouter = Router();

productsRouter.get("/", (_req, res) => {
  res.json([
    {
      name: "Default product",
      description: "Product description",
      price: 100,
    },
  ]);
});

import type { Product } from "../models/product.ts";

export class ProductsController {
  private readonly Product: typeof Product;

  constructor(product: typeof Product) {
    this.Product = product;
  }

  async get(_req: any, res: any) {
    try {
      const products = await this.Product.find({});
      res.json(products);
    } catch (error: any) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  }
}

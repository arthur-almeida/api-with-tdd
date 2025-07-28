import type { Product } from "../models/product.ts";

export class ProductsController {
  private readonly Product: typeof Product;

  constructor(product: typeof Product) {
    this.Product = product;
  }

  async get(_req: any, res: any) {
    const products = await this.Product.find({});
    res.json(products);
  }
}

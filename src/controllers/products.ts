export class ProductsController {
  get(_req: any, res: any) {
    return res.json([
      {
        name: "Default product",
        description: "Product description",
        price: 100,
      },
    ]);
  }
}

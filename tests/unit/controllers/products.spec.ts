import { ProductsController } from "../../../src/controllers/products.ts";
import { Product } from "../../../src/models/product.ts";

describe("Controllers: Products", () => {
  const defaultProduct = {
    name: "Default product",
    description: "Product description",
    price: 100,
  };

  describe("get() products", () => {
    it("should return a list of products", async () => {
      const request = vitest.fn();
      const response = {
        json: vitest.fn(),
      };
      const findSpy = vitest
        .spyOn(Product, "find")
        .mockResolvedValueOnce([defaultProduct]);

      const productsController = new ProductsController(Product);

      await productsController.get(request, response);

      expect(findSpy).toHaveBeenCalledWith({});
      expect(response.json).toHaveBeenCalled();
      expect(response.json).toHaveBeenCalledWith([defaultProduct]);
    });
  });
});

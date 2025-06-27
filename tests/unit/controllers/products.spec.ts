import { ProductsController } from "../../../src/controllers/products.ts";

describe("Controllers: Products", () => {
  const defaultProduct = {
    name: "Default product",
    description: "Product description",
    price: 100,
  };

  describe("get() products", () => {
    it("should return a list of products", () => {
      const request = vitest.fn();
      const response = {
        json: vitest.fn(),
      };
      const productsController = new ProductsController();

      productsController.get(request, response);

      expect(response.json).toHaveBeenCalled();
      expect(response.json).toHaveBeenCalledWith([defaultProduct]);
    });
  });
});

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

  it("should return 400 when an error occurs", async () => {
    const request = vitest.fn();
    const response = {
      json: vitest.fn(),
      status: vitest.fn().mockImplementationOnce(() => response),
    };
    const error = { message: "Error" };
    const findSpy = vitest.spyOn(Product, "find").mockRejectedValueOnce(error);

    const productsController = new ProductsController(Product);

    await productsController.get(request, response);

    expect(findSpy).toHaveBeenCalledWith({});
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledOnce();
    expect(response.json).toHaveBeenCalledWith({
      status: "error",
      message: error.message,
    });
  });
});

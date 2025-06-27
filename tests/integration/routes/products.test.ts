import request from "supertest";
import { app } from "../../../src/app.ts";

describe("Routes: Products", () => {
  const defaultProduct = {
    name: "Default product",
    description: "Product description",
    price: 100,
  };

  describe("GET /products", () => {
    it("should return a list of products", async () => {
      const response = await request(app).get("/products").expect(200);
      expect(response.body[0]).toStrictEqual(defaultProduct);
    });
  });
});

import type { Express } from "express";
import request from "supertest";
import setupApp from "../../../src/app.ts";

describe("Routes: Products", () => {
  let app: Express;
  const defaultProduct = {
    name: "Default product",
    description: "Product description",
    price: 100,
  };

  beforeAll(async () => {
    app = await setupApp();
  });

  afterAll(async () => {
    await app.database?.close();
  });

  describe("GET /products", () => {
    it("should return a list of products", async () => {
      const response = await request(app).get("/products").expect(200);
      expect(response.body[0]).toStrictEqual(defaultProduct);
    });
  });
});

import type { Express } from "express";
import mongoose from "mongoose";
import request from "supertest";
import setupApp from "../../../src/app.ts";
import { Product } from "../../../src/models/product.ts";

describe("Routes: Products", () => {
  let app: Express;
  const defaultProduct = {
    name: "Default product",
    description: "Product description",
    price: 100,
  };
  const productId = new mongoose.Types.ObjectId("56cb91bdc3464f14678934ca");
  const expectedProduct = {
    __v: 0,
    _id: productId.toString(),
    ...defaultProduct,
  };

  beforeAll(async () => {
    app = await setupApp();
  });

  beforeEach(async () => {
    await Product.deleteMany();

    const product = new Product(defaultProduct);
    product._id = productId;
    return await product.save();
  });

  afterEach(async () => await Product.deleteMany());

  afterAll(async () => {
    await app.database?.close();
  });

  describe("GET /products", () => {
    it("should return a list of products", async () => {
      const response = await request(app).get("/products").expect(200);
      expect(response.body).toStrictEqual([expectedProduct]);
    });
  });
});

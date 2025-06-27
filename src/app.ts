import express from "express";

export const app = express();
app.use(express.json());

app.get("/products", (req, res) => {
  res.json([
    {
      name: "Default product",
      description: "Product description",
      price: 100,
    },
  ]);
});

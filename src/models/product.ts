import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

export const Product = mongoose.model("Product", schema);

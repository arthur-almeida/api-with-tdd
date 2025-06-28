import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost/test";
const connect = () => mongoose.connect(mongodbUrl);
const close = () => mongoose.connection.close();

export type DB = typeof db;
export const db = {
  connect,
  close,
};

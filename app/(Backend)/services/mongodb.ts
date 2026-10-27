import mongoose from "mongoose";

export default async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing");
  }

  await mongoose.connect(mongoUri);

  console.log("MongoDB connected");
}
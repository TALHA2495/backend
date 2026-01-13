import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("MongoDB Failed:", err.message);
    process.exit(1);
  });

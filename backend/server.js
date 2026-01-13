import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

//auth
app.use("/api/auth", authRoutes);
//product
app.use('/product',ProductRoutes);

app.get("/", (req, res) => {
  res.send("Product API is running");
});


const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`App is running on port${PORT}`);
});

console.log("MONGO_URI =", process.env.MONGO_URL);

import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js";

dotenv.config();

/* ------------------ UNSPLASH IMAGES BY CATEGORY ------------------ */
const images = {
  automobiles: [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    "https://images.unsplash.com/photo-1549924231-f129b911e442",
  ],
  clothes: [
    "https://images.unsplash.com/photo-1521334884684-d80222895322",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1542060748-10c28b62716b",
  ],
  home: [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  ],
  tech: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    "https://images.unsplash.com/photo-1602526216431-1f7c9fcaafc3",
  ],
  tools: [
    "https://images.unsplash.com/photo-1581141849291-1125c7b692b5",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09",
    "https://images.unsplash.com/photo-1581092919535-7146c0cda7c0",
  ],
  sports: [
    "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    "https://images.unsplash.com/photo-1502224562085-639556652f33",
  ],
  pets: [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
  ],
  machinery: [
    "https://images.unsplash.com/photo-1581092919535-7146c0cda7c0",
    "https://images.unsplash.com/photo-1580906855282-2a9d7f6bbec1",
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
    "https://images.unsplash.com/photo-1601987077677-5346c2c57d3f",
  ],
  more: [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1503602642458-232111445657",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  ],
};

const repeatImages = (arr) => [arr[0], arr[1], arr[2], arr[3]];

/* ------------------ PRODUCTS ------------------ */
const products = [
  /* -------- Automobiles (4) -------- */
  { name: "Car GPS Tracker", price: 45, category: "Automobiles", image: images.automobiles[0], images: repeatImages(images.automobiles), stock: 200 },
  { name: "Leather Seat Covers", price: 120, category: "Automobiles", image: images.automobiles[1], images: repeatImages(images.automobiles), stock: 80 },
  { name: "Car Air Compressor", price: 60, category: "Automobiles", image: images.automobiles[2], images: repeatImages(images.automobiles), stock: 150 },
  { name: "Dash Camera HD", price: 75, category: "Automobiles", image: images.automobiles[3], images: repeatImages(images.automobiles), stock: 120 },

  /* -------- Clothes and wear (5) -------- */
  { name: "Men Cotton T-Shirt", price: 12, category: "Clothes and wear", image: images.clothes[0], images: repeatImages(images.clothes), stock: 500 },
  { name: "Blue Denim Jeans", price: 35, category: "Clothes and wear", image: images.clothes[1], images: repeatImages(images.clothes), stock: 300 },
  { name: "Winter Hoodie", price: 28, category: "Clothes and wear", image: images.clothes[2], images: repeatImages(images.clothes), stock: 200 },
  { name: "Leather Jacket", price: 120, category: "Clothes and wear", image: images.clothes[3], images: repeatImages(images.clothes), stock: 90 },
  { name: "Casual Sneakers", price: 65, category: "Clothes and wear", image: images.clothes[4], images: repeatImages(images.clothes), stock: 150 },

  /* -------- Home interiors (4) -------- */
  { name: "Modern Sofa", price: 450, category: "Home interiors", image: images.home[0], images: repeatImages(images.home), stock: 20 },
  { name: "Wooden Dining Table", price: 380, category: "Home interiors", image: images.home[1], images: repeatImages(images.home), stock: 15 },
  { name: "Decorative Lamp", price: 40, category: "Home interiors", image: images.home[2], images: repeatImages(images.home), stock: 120 },
  { name: "Wall Art Frame", price: 30, category: "Home interiors", image: images.home[3], images: repeatImages(images.home), stock: 200 },

  /* -------- Computer and tech (5) -------- */
  { name: "Gaming Laptop", price: 1200, category: "Computer and tech", image: images.tech[0], images: repeatImages(images.tech), stock: 40 },
  { name: "Wireless Headphones", price: 220, category: "Computer and tech", image: images.tech[1], images: repeatImages(images.tech), stock: 150 },
  { name: "Mechanical Keyboard", price: 95, category: "Computer and tech", image: images.tech[2], images: repeatImages(images.tech), stock: 180 },
  { name: "DSLR Camera", price: 850, category: "Computer and tech", image: images.tech[3], images: repeatImages(images.tech), stock: 60 },
  { name: "Smart Watch", price: 180, category: "Computer and tech", image: images.tech[4], images: repeatImages(images.tech), stock: 200 },

  /* -------- Tools, equipments (4) -------- */
  { name: "Cordless Drill", price: 85, category: "Tools, equipments", image: images.tools[0], images: repeatImages(images.tools), stock: 100 },
  { name: "Socket Tool Set", price: 45, category: "Tools, equipments", image: images.tools[1], images: repeatImages(images.tools), stock: 140 },
  { name: "Electric Grinder", price: 70, category: "Tools, equipments", image: images.tools[2], images: repeatImages(images.tools), stock: 90 },
  { name: "Tool Box Kit", price: 55, category: "Tools, equipments", image: images.tools[3], images: repeatImages(images.tools), stock: 160 },

  /* -------- Sports and outdoor (4) -------- */
  { name: "Camping Tent", price: 75, category: "Sports and outdoor", image: images.sports[0], images: repeatImages(images.sports), stock: 130 },
  { name: "Football", price: 25, category: "Sports and outdoor", image: images.sports[1], images: repeatImages(images.sports), stock: 300 },
  { name: "Yoga Mat", price: 20, category: "Sports and outdoor", image: images.sports[2], images: repeatImages(images.sports), stock: 500 },
  { name: "Mountain Bicycle", price: 420, category: "Sports and outdoor", image: images.sports[3], images: repeatImages(images.sports), stock: 45 },

  /* -------- Animal and pets (4) -------- */
  { name: "Automatic Pet Feeder", price: 60, category: "Animal and pets", image: images.pets[0], images: repeatImages(images.pets), stock: 200 },
  { name: "Dog Bed", price: 35, category: "Animal and pets", image: images.pets[1], images: repeatImages(images.pets), stock: 250 },
  { name: "Pet Grooming Kit", price: 40, category: "Animal and pets", image: images.pets[2], images: repeatImages(images.pets), stock: 180 },
  { name: "Cat Scratching Post", price: 30, category: "Animal and pets", image: images.pets[3], images: repeatImages(images.pets), stock: 220 },

  /* -------- Machinery tools (4) -------- */
  { name: "CNC Cutting Machine", price: 25000, category: "Machinery tools", image: images.machinery[0], images: repeatImages(images.machinery), stock: 5 },
  { name: "Hydraulic Press", price: 5000, category: "Machinery tools", image: images.machinery[1], images: repeatImages(images.machinery), stock: 8 },
  { name: "Industrial Lathe", price: 12000, category: "Machinery tools", image: images.machinery[2], images: repeatImages(images.machinery), stock: 4 },
  { name: "Welding Machine", price: 900, category: "Machinery tools", image: images.machinery[3], images: repeatImages(images.machinery), stock: 25 },

  /* -------- More category (4) -------- */
  { name: "Office Desk Organizer", price: 15, category: "More category", image: images.more[0], images: repeatImages(images.more), stock: 400 },
  { name: "Travel Backpack", price: 55, category: "More category", image: images.more[1], images: repeatImages(images.more), stock: 220 },
  { name: "Travel Neck Pillow", price: 12, category: "More category", image: images.more[2], images: repeatImages(images.more), stock: 500 },
  { name: "Portable Power Bank", price: 35, category: "More category", image: images.more[3], images: repeatImages(images.more), stock: 300 },
];

/* ------------------ SEED SCRIPT ------------------ */
const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log(`✅ Seeded ${products.length} products successfully`);
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seed();

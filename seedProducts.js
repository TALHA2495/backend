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
  /* -------- Automobiles (8) -------- */
  { name: "Car GPS Tracker", price: "45", oldPrice: "60", description: "Real-time GPS tracking device", longDescription: "Advanced GPS tracker with real-time location monitoring, geofencing, and mobile app integration. Perfect for fleet management and personal vehicle security.", category: "Automobiles", image: images.automobiles[0], images: repeatImages(images.automobiles), stock: 200, rating: 4.5, reviews: 128, sold: 450 },
  { name: "Leather Seat Covers", price: "120", oldPrice: "150", description: "Premium leather car seat covers", longDescription: "High-quality genuine leather seat covers that provide comfort and style. Easy to install and maintain, fits most car models.", category: "Automobiles", image: images.automobiles[1], images: repeatImages(images.automobiles), stock: 80, rating: 4.7, reviews: 89, sold: 320 },
  { name: "Car Air Compressor", price: "60", oldPrice: "80", description: "Portable tire inflator", longDescription: "Compact and powerful air compressor for inflating tires, sports equipment, and more. Features digital pressure gauge and auto shut-off.", category: "Automobiles", image: images.automobiles[2], images: repeatImages(images.automobiles), stock: 150, rating: 4.3, reviews: 156, sold: 580 },
  { name: "Dash Camera HD", price: "75", oldPrice: "95", description: "1080P dashboard camera", longDescription: "Full HD dash cam with night vision, loop recording, and G-sensor. Captures clear footage for insurance claims and security.", category: "Automobiles", image: images.automobiles[3], images: repeatImages(images.automobiles), stock: 120, rating: 4.6, reviews: 203, sold: 670 },
  { name: "Car Phone Holder", price: "18", oldPrice: "25", description: "Universal smartphone mount", longDescription: "Adjustable car phone holder with strong suction cup and 360-degree rotation. Compatible with all smartphone sizes.", category: "Automobiles", image: images.automobiles[0], images: repeatImages(images.automobiles), stock: 350, rating: 4.4, reviews: 412, sold: 1250 },
  { name: "LED Headlight Bulbs", price: "55", oldPrice: "75", description: "Super bright LED headlights", longDescription: "Energy-efficient LED headlight bulbs with 6000K white light. Easy installation and long lifespan of 50,000 hours.", category: "Automobiles", image: images.automobiles[1], images: repeatImages(images.automobiles), stock: 200, rating: 4.8, reviews: 267, sold: 890 },
  { name: "Car Vacuum Cleaner", price: "42", oldPrice: "60", description: "Portable car vacuum", longDescription: "Powerful handheld vacuum cleaner for car interiors. Includes multiple attachments and washable HEPA filter.", category: "Automobiles", image: images.automobiles[2], images: repeatImages(images.automobiles), stock: 180, rating: 4.2, reviews: 145, sold: 520 },
  { name: "Steering Wheel Cover", price: "22", oldPrice: "30", description: "Ergonomic steering cover", longDescription: "Comfortable microfiber steering wheel cover with anti-slip design. Provides better grip and protects your steering wheel.", category: "Automobiles", image: images.automobiles[3], images: repeatImages(images.automobiles), stock: 400, rating: 4.5, reviews: 298, sold: 980 },

  /* -------- Clothes and wear (10) -------- */
  { name: "Men Cotton T-Shirt", price: "12", oldPrice: "18", description: "Comfortable cotton tee", longDescription: "100% premium cotton t-shirt with breathable fabric. Available in multiple colors and sizes. Perfect for casual wear.", category: "Clothes and wear", image: images.clothes[0], images: repeatImages(images.clothes), stock: 500, rating: 4.6, reviews: 567, sold: 2340 },
  { name: "Blue Denim Jeans", price: "35", oldPrice: "50", description: "Classic fit denim jeans", longDescription: "Durable denim jeans with classic fit and comfortable stretch. Features reinforced stitching and multiple pockets.", category: "Clothes and wear", image: images.clothes[1], images: repeatImages(images.clothes), stock: 300, rating: 4.7, reviews: 423, sold: 1560 },
  { name: "Winter Hoodie", price: "28", oldPrice: "40", description: "Warm fleece hoodie", longDescription: "Cozy fleece-lined hoodie perfect for cold weather. Features kangaroo pocket and adjustable drawstring hood.", category: "Clothes and wear", image: images.clothes[2], images: repeatImages(images.clothes), stock: 200, rating: 4.8, reviews: 389, sold: 1120 },
  { name: "Leather Jacket", price: "120", oldPrice: "180", description: "Genuine leather jacket", longDescription: "Premium quality genuine leather jacket with modern design. Features multiple pockets and durable YKK zippers.", category: "Clothes and wear", image: images.clothes[3], images: repeatImages(images.clothes), stock: 90, rating: 4.9, reviews: 156, sold: 340 },
  { name: "Casual Sneakers", price: "65", oldPrice: "90", description: "Comfortable walking shoes", longDescription: "Lightweight sneakers with cushioned insole and breathable mesh upper. Perfect for daily wear and light exercise.", category: "Clothes and wear", image: images.clothes[4], images: repeatImages(images.clothes), stock: 150, rating: 4.5, reviews: 678, sold: 1890 },
  { name: "Summer Dress", price: "38", oldPrice: "55", description: "Floral print sundress", longDescription: "Beautiful floral print dress made from lightweight, breathable fabric. Perfect for summer outings and beach wear.", category: "Clothes and wear", image: images.clothes[0], images: repeatImages(images.clothes), stock: 220, rating: 4.6, reviews: 234, sold: 780 },
  { name: "Sports Shorts", price: "22", oldPrice: "32", description: "Athletic performance shorts", longDescription: "Quick-dry athletic shorts with elastic waistband and side pockets. Ideal for running, gym, and outdoor activities.", category: "Clothes and wear", image: images.clothes[1], images: repeatImages(images.clothes), stock: 380, rating: 4.4, reviews: 445, sold: 1340 },
  { name: "Wool Scarf", price: "25", oldPrice: "38", description: "Soft winter scarf", longDescription: "Warm and soft wool blend scarf available in various colors. Perfect accessory for cold weather.", category: "Clothes and wear", image: images.clothes[2], images: repeatImages(images.clothes), stock: 290, rating: 4.7, reviews: 189, sold: 670 },
  { name: "Baseball Cap", price: "15", oldPrice: "22", description: "Adjustable sports cap", longDescription: "Classic baseball cap with adjustable strap and breathable design. Great for outdoor activities and sun protection.", category: "Clothes and wear", image: images.clothes[3], images: repeatImages(images.clothes), stock: 450, rating: 4.3, reviews: 512, sold: 1560 },
  { name: "Running Socks", price: "8", oldPrice: "12", description: "Athletic cushioned socks", longDescription: "Moisture-wicking running socks with arch support and cushioned sole. Pack of 3 pairs in assorted colors.", category: "Clothes and wear", image: images.clothes[4], images: repeatImages(images.clothes), stock: 600, rating: 4.5, reviews: 789, sold: 2890 },

  /* -------- Home interiors (8) -------- */
  { name: "Modern Sofa", price: "450", oldPrice: "650", description: "3-seater fabric sofa", longDescription: "Contemporary 3-seater sofa with premium fabric upholstery and solid wood frame. Comfortable cushions and elegant design.", category: "Home interiors", image: images.home[0], images: repeatImages(images.home), stock: 20, rating: 4.8, reviews: 67, sold: 145 },
  { name: "Wooden Dining Table", price: "380", oldPrice: "520", description: "Solid wood dining table", longDescription: "Handcrafted dining table made from solid oak wood. Seats 6 people comfortably with a timeless design.", category: "Home interiors", image: images.home[1], images: repeatImages(images.home), stock: 15, rating: 4.9, reviews: 45, sold: 98 },
  { name: "Decorative Lamp", price: "40", oldPrice: "60", description: "Modern table lamp", longDescription: "Stylish table lamp with adjustable brightness and contemporary design. Perfect for bedroom or living room.", category: "Home interiors", image: images.home[2], images: repeatImages(images.home), stock: 120, rating: 4.6, reviews: 234, sold: 670 },
  { name: "Wall Art Frame", price: "30", oldPrice: "45", description: "Canvas wall art", longDescription: "High-quality canvas print with wooden frame. Abstract design that complements modern home decor.", category: "Home interiors", image: images.home[3], images: repeatImages(images.home), stock: 200, rating: 4.5, reviews: 189, sold: 560 },
  { name: "Area Rug", price: "85", oldPrice: "120", description: "Soft living room rug", longDescription: "Plush area rug with modern geometric pattern. Made from soft, durable materials that are easy to clean.", category: "Home interiors", image: images.home[0], images: repeatImages(images.home), stock: 75, rating: 4.7, reviews: 156, sold: 420 },
  { name: "Curtain Set", price: "55", oldPrice: "80", description: "Blackout curtains", longDescription: "Thermal insulated blackout curtains that block 99% of light. Energy-efficient and available in multiple colors.", category: "Home interiors", image: images.home[1], images: repeatImages(images.home), stock: 150, rating: 4.6, reviews: 298, sold: 780 },
  { name: "Throw Pillows", price: "25", oldPrice: "38", description: "Decorative cushions set", longDescription: "Set of 4 decorative throw pillows with removable covers. Soft filling and stylish patterns for your sofa or bed.", category: "Home interiors", image: images.home[2], images: repeatImages(images.home), stock: 280, rating: 4.4, reviews: 412, sold: 1120 },
  { name: "Coffee Table", price: "120", oldPrice: "170", description: "Glass top coffee table", longDescription: "Modern coffee table with tempered glass top and metal frame. Spacious storage shelf underneath.", category: "Home interiors", image: images.home[3], images: repeatImages(images.home), stock: 45, rating: 4.7, reviews: 89, sold: 230 },

  /* -------- Computer and tech (10) -------- */
  { name: "Gaming Laptop", price: "1200", oldPrice: "1500", description: "High-performance gaming laptop", longDescription: "Powerful gaming laptop with RTX graphics, 16GB RAM, and 512GB SSD. Perfect for gaming and content creation.", category: "Computer and tech", image: images.tech[0], images: repeatImages(images.tech), stock: 40, rating: 4.8, reviews: 234, sold: 567 },
  { name: "Wireless Headphones", price: "220", oldPrice: "280", description: "Noise-canceling headphones", longDescription: "Premium wireless headphones with active noise cancellation and 30-hour battery life. Superior sound quality.", category: "Computer and tech", image: images.tech[1], images: repeatImages(images.tech), stock: 150, rating: 4.7, reviews: 456, sold: 1230 },
  { name: "Mechanical Keyboard", price: "95", oldPrice: "130", description: "RGB gaming keyboard", longDescription: "Mechanical keyboard with customizable RGB lighting and tactile switches. Perfect for gaming and typing.", category: "Computer and tech", image: images.tech[2], images: repeatImages(images.tech), stock: 180, rating: 4.6, reviews: 389, sold: 890 },
  { name: "DSLR Camera", price: "850", oldPrice: "1100", description: "Professional camera kit", longDescription: "24MP DSLR camera with 18-55mm lens kit. Includes camera bag and accessories for professional photography.", category: "Computer and tech", image: images.tech[3], images: repeatImages(images.tech), stock: 60, rating: 4.9, reviews: 178, sold: 340 },
  { name: "Smart Watch", price: "180", oldPrice: "250", description: "Fitness tracking smartwatch", longDescription: "Advanced smartwatch with heart rate monitor, GPS, and 7-day battery life. Compatible with iOS and Android.", category: "Computer and tech", image: images.tech[4], images: repeatImages(images.tech), stock: 200, rating: 4.5, reviews: 678, sold: 1560 },
  { name: "Wireless Mouse", price: "35", oldPrice: "50", description: "Ergonomic wireless mouse", longDescription: "Comfortable wireless mouse with adjustable DPI and long battery life. Works on multiple surfaces.", category: "Computer and tech", image: images.tech[0], images: repeatImages(images.tech), stock: 320, rating: 4.4, reviews: 567, sold: 1890 },
  { name: "USB-C Hub", price: "45", oldPrice: "65", description: "7-in-1 USB hub", longDescription: "Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery. Perfect for laptops.", category: "Computer and tech", image: images.tech[1], images: repeatImages(images.tech), stock: 250, rating: 4.6, reviews: 345, sold: 980 },
  { name: "Webcam HD", price: "65", oldPrice: "90", description: "1080P streaming webcam", longDescription: "High-definition webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.", category: "Computer and tech", image: images.tech[2], images: repeatImages(images.tech), stock: 180, rating: 4.5, reviews: 289, sold: 780 },
  { name: "External SSD", price: "120", oldPrice: "160", description: "1TB portable SSD", longDescription: "Fast external SSD with USB 3.1 interface. Compact design with shock-resistant casing for data protection.", category: "Computer and tech", image: images.tech[3], images: repeatImages(images.tech), stock: 140, rating: 4.8, reviews: 234, sold: 670 },
  { name: "Monitor 27 inch", price: "280", oldPrice: "380", description: "4K UHD monitor", longDescription: "27-inch 4K monitor with IPS panel and HDR support. Perfect for gaming, design work, and entertainment.", category: "Computer and tech", image: images.tech[4], images: repeatImages(images.tech), stock: 85, rating: 4.7, reviews: 156, sold: 420 },

  /* -------- Tools, equipments (8) -------- */
  { name: "Cordless Drill", price: "85", oldPrice: "120", description: "20V power drill kit", longDescription: "Powerful cordless drill with 2 batteries, charger, and carrying case. Variable speed and LED work light.", category: "Tools, equipments", image: images.tools[0], images: repeatImages(images.tools), stock: 100, rating: 4.7, reviews: 234, sold: 670 },
  { name: "Socket Tool Set", price: "45", oldPrice: "65", description: "108-piece socket set", longDescription: "Comprehensive socket set with ratchets, extensions, and storage case. Chrome vanadium steel construction.", category: "Tools, equipments", image: images.tools[1], images: repeatImages(images.tools), stock: 140, rating: 4.6, reviews: 189, sold: 560 },
  { name: "Electric Grinder", price: "70", oldPrice: "95", description: "Angle grinder 4.5 inch", longDescription: "Powerful angle grinder with adjustable guard and auxiliary handle. Perfect for cutting and grinding metal.", category: "Tools, equipments", image: images.tools[2], images: repeatImages(images.tools), stock: 90, rating: 4.5, reviews: 145, sold: 420 },
  { name: "Tool Box Kit", price: "55", oldPrice: "80", description: "Complete tool kit", longDescription: "All-in-one tool kit with hammer, screwdrivers, pliers, and more. Organized storage box included.", category: "Tools, equipments", image: images.tools[3], images: repeatImages(images.tools), stock: 160, rating: 4.4, reviews: 267, sold: 780 },
  { name: "Laser Level", price: "65", oldPrice: "90", description: "Self-leveling laser", longDescription: "Professional laser level with 360-degree coverage and magnetic base. Perfect for construction and DIY projects.", category: "Tools, equipments", image: images.tools[0], images: repeatImages(images.tools), stock: 120, rating: 4.8, reviews: 178, sold: 520 },
  { name: "Work Bench", price: "150", oldPrice: "210", description: "Portable workbench", longDescription: "Foldable work bench with adjustable height and built-in storage. Supports up to 300 lbs.", category: "Tools, equipments", image: images.tools[1], images: repeatImages(images.tools), stock: 45, rating: 4.7, reviews: 89, sold: 230 },
  { name: "Measuring Tape", price: "18", oldPrice: "25", description: "25ft measuring tape", longDescription: "Heavy-duty measuring tape with auto-lock and belt clip. Clear markings and durable construction.", category: "Tools, equipments", image: images.tools[2], images: repeatImages(images.tools), stock: 280, rating: 4.5, reviews: 456, sold: 1340 },
  { name: "Safety Goggles", price: "12", oldPrice: "18", description: "Protective eyewear", longDescription: "Impact-resistant safety goggles with anti-fog coating. Comfortable fit with adjustable strap.", category: "Tools, equipments", image: images.tools[3], images: repeatImages(images.tools), stock: 350, rating: 4.3, reviews: 345, sold: 980 },

  /* -------- Sports and outdoor (8) -------- */
  { name: "Camping Tent", price: "75", oldPrice: "110", description: "4-person camping tent", longDescription: "Waterproof camping tent with easy setup and ventilation windows. Includes carrying bag and stakes.", category: "Sports and outdoor", image: images.sports[0], images: repeatImages(images.sports), stock: 130, rating: 4.6, reviews: 234, sold: 670 },
  { name: "Football", price: "25", oldPrice: "35", description: "Professional soccer ball", longDescription: "Official size 5 football with durable synthetic leather cover. Perfect for training and matches.", category: "Sports and outdoor", image: images.sports[1], images: repeatImages(images.sports), stock: 300, rating: 4.5, reviews: 456, sold: 1340 },
  { name: "Yoga Mat", price: "20", oldPrice: "32", description: "Non-slip exercise mat", longDescription: "Thick yoga mat with excellent cushioning and non-slip surface. Includes carrying strap.", category: "Sports and outdoor", image: images.sports[2], images: repeatImages(images.sports), stock: 500, rating: 4.7, reviews: 678, sold: 1890 },
  { name: "Mountain Bicycle", price: "420", oldPrice: "580", description: "21-speed mountain bike", longDescription: "Durable mountain bike with front suspension and disc brakes. Perfect for trails and off-road adventures.", category: "Sports and outdoor", image: images.sports[3], images: repeatImages(images.sports), stock: 45, rating: 4.8, reviews: 156, sold: 340 },
  { name: "Hiking Backpack", price: "65", oldPrice: "90", description: "50L outdoor backpack", longDescription: "Large capacity hiking backpack with multiple compartments and rain cover. Comfortable padded straps.", category: "Sports and outdoor", image: images.sports[0], images: repeatImages(images.sports), stock: 180, rating: 4.6, reviews: 289, sold: 780 },
  { name: "Water Bottle", price: "18", oldPrice: "25", description: "Insulated sports bottle", longDescription: "Stainless steel water bottle that keeps drinks cold for 24 hours. Leak-proof lid and wide mouth.", category: "Sports and outdoor", image: images.sports[1], images: repeatImages(images.sports), stock: 420, rating: 4.4, reviews: 567, sold: 1560 },
  { name: "Resistance Bands", price: "22", oldPrice: "35", description: "Exercise band set", longDescription: "Set of 5 resistance bands with different strength levels. Includes door anchor and carrying bag.", category: "Sports and outdoor", image: images.sports[2], images: repeatImages(images.sports), stock: 280, rating: 4.5, reviews: 389, sold: 1120 },
  { name: "Running Shoes", price: "75", oldPrice: "105", description: "Lightweight running shoes", longDescription: "Breathable running shoes with cushioned sole and arch support. Perfect for jogging and marathon training.", category: "Sports and outdoor", image: images.sports[3], images: repeatImages(images.sports), stock: 220, rating: 4.7, reviews: 445, sold: 1230 },

  /* -------- Animal and pets (8) -------- */
  { name: "Automatic Pet Feeder", price: "60", oldPrice: "85", description: "Smart pet food dispenser", longDescription: "Programmable pet feeder with portion control and timer. Works with app for remote feeding.", category: "Animal and pets", image: images.pets[0], images: repeatImages(images.pets), stock: 200, rating: 4.6, reviews: 234, sold: 670 },
  { name: "Dog Bed", price: "35", oldPrice: "50", description: "Orthopedic pet bed", longDescription: "Comfortable dog bed with memory foam and removable washable cover. Perfect for senior dogs.", category: "Animal and pets", image: images.pets[1], images: repeatImages(images.pets), stock: 250, rating: 4.7, reviews: 345, sold: 890 },
  { name: "Pet Grooming Kit", price: "40", oldPrice: "60", description: "Complete grooming set", longDescription: "Professional grooming kit with clippers, scissors, brush, and comb. Quiet motor for anxious pets.", category: "Animal and pets", image: images.pets[2], images: repeatImages(images.pets), stock: 180, rating: 4.5, reviews: 189, sold: 560 },
  { name: "Cat Scratching Post", price: "30", oldPrice: "45", description: "Tall sisal scratching post", longDescription: "Sturdy scratching post with sisal rope and hanging toys. Protects furniture from cat scratches.", category: "Animal and pets", image: images.pets[3], images: repeatImages(images.pets), stock: 220, rating: 4.4, reviews: 267, sold: 780 },
  { name: "Pet Carrier", price: "45", oldPrice: "65", description: "Airline-approved carrier", longDescription: "Comfortable pet carrier with ventilation and safety locks. Suitable for cats and small dogs.", category: "Animal and pets", image: images.pets[0], images: repeatImages(images.pets), stock: 150, rating: 4.6, reviews: 156, sold: 520 },
  { name: "Dog Leash", price: "15", oldPrice: "22", description: "Retractable dog leash", longDescription: "16ft retractable leash with one-button brake and lock. Comfortable grip handle.", category: "Animal and pets", image: images.pets[1], images: repeatImages(images.pets), stock: 380, rating: 4.5, reviews: 456, sold: 1340 },
  { name: "Pet Water Fountain", price: "38", oldPrice: "55", description: "Automatic water fountain", longDescription: "Circulating pet water fountain with filter. Encourages pets to drink more water for better health.", category: "Animal and pets", image: images.pets[2], images: repeatImages(images.pets), stock: 190, rating: 4.7, reviews: 298, sold: 890 },
  { name: "Chew Toys Set", price: "20", oldPrice: "30", description: "Durable dog toys", longDescription: "Set of 10 chew toys made from safe, non-toxic materials. Perfect for teething puppies and active dogs.", category: "Animal and pets", image: images.pets[3], images: repeatImages(images.pets), stock: 320, rating: 4.3, reviews: 412, sold: 1120 },

  /* -------- Machinery tools (8) -------- */
  { name: "CNC Cutting Machine", price: "25000", oldPrice: "32000", description: "Industrial CNC router", longDescription: "Professional CNC cutting machine with high precision and large working area. Perfect for manufacturing.", category: "Machinery tools", image: images.machinery[0], images: repeatImages(images.machinery), stock: 5, rating: 4.9, reviews: 23, sold: 45 },
  { name: "Hydraulic Press", price: "5000", oldPrice: "6500", description: "20-ton hydraulic press", longDescription: "Heavy-duty hydraulic press for metalworking and fabrication. Includes safety guards and pressure gauge.", category: "Machinery tools", image: images.machinery[1], images: repeatImages(images.machinery), stock: 8, rating: 4.8, reviews: 34, sold: 67 },
  { name: "Industrial Lathe", price: "12000", oldPrice: "15000", description: "Metal turning lathe", longDescription: "Precision metal lathe with variable speed control and digital readout. Ideal for machining operations.", category: "Machinery tools", image: images.machinery[2], images: repeatImages(images.machinery), stock: 4, rating: 4.9, reviews: 18, sold: 34 },
  { name: "Welding Machine", price: "900", oldPrice: "1200", description: "MIG/TIG welder", longDescription: "Multi-process welding machine with digital display. Suitable for various welding applications.", category: "Machinery tools", image: images.machinery[3], images: repeatImages(images.machinery), stock: 25, rating: 4.7, reviews: 89, sold: 230 },
  { name: "Air Compressor", price: "650", oldPrice: "850", description: "Industrial air compressor", longDescription: "High-capacity air compressor with 80-gallon tank. Perfect for workshops and manufacturing facilities.", category: "Machinery tools", image: images.machinery[0], images: repeatImages(images.machinery), stock: 18, rating: 4.6, reviews: 67, sold: 156 },
  { name: "Band Saw", price: "1200", oldPrice: "1600", description: "Metal cutting band saw", longDescription: "Heavy-duty band saw for cutting metal and wood. Features adjustable speed and blade tension.", category: "Machinery tools", image: images.machinery[1], images: repeatImages(images.machinery), stock: 12, rating: 4.8, reviews: 45, sold: 98 },
  { name: "Drill Press", price: "800", oldPrice: "1100", description: "Floor standing drill press", longDescription: "Precision drill press with laser guide and digital depth gauge. Perfect for accurate drilling.", category: "Machinery tools", image: images.machinery[2], images: repeatImages(images.machinery), stock: 15, rating: 4.7, reviews: 56, sold: 134 },
  { name: "Plasma Cutter", price: "1500", oldPrice: "2000", description: "50A plasma cutter", longDescription: "Professional plasma cutter for cutting metal up to 1/2 inch thick. Includes consumables and torch.", category: "Machinery tools", image: images.machinery[3], images: repeatImages(images.machinery), stock: 10, rating: 4.8, reviews: 38, sold: 89 },

  /* -------- More category (8) -------- */
  { name: "Office Desk Organizer", price: "15", oldPrice: "22", description: "Desktop storage solution", longDescription: "Multi-compartment desk organizer for pens, papers, and office supplies. Bamboo construction.", category: "More category", image: images.more[0], images: repeatImages(images.more), stock: 400, rating: 4.4, reviews: 456, sold: 1340 },
  { name: "Travel Backpack", price: "55", oldPrice: "80", description: "40L travel backpack", longDescription: "Versatile travel backpack with laptop compartment and USB charging port. TSA-friendly design.", category: "More category", image: images.more[1], images: repeatImages(images.more), stock: 220, rating: 4.6, reviews: 345, sold: 980 },
  { name: "Travel Neck Pillow", price: "12", oldPrice: "18", description: "Memory foam neck pillow", longDescription: "Comfortable travel pillow with memory foam and washable cover. Perfect for long flights.", category: "More category", image: images.more[2], images: repeatImages(images.more), stock: 500, rating: 4.5, reviews: 567, sold: 1560 },
  { name: "Portable Power Bank", price: "35", oldPrice: "50", description: "20000mAh power bank", longDescription: "High-capacity power bank with fast charging and LED display. Charges multiple devices simultaneously.", category: "More category", image: images.more[3], images: repeatImages(images.more), stock: 300, rating: 4.7, reviews: 678, sold: 1890 },
  { name: "Bluetooth Speaker", price: "45", oldPrice: "65", description: "Waterproof portable speaker", longDescription: "Wireless Bluetooth speaker with 360-degree sound and 12-hour battery life. IPX7 waterproof rating.", category: "More category", image: images.more[0], images: repeatImages(images.more), stock: 280, rating: 4.6, reviews: 489, sold: 1230 },
  { name: "Sunglasses", price: "28", oldPrice: "42", description: "Polarized UV protection", longDescription: "Stylish sunglasses with polarized lenses and UV400 protection. Lightweight and durable frame.", category: "More category", image: images.more[1], images: repeatImages(images.more), stock: 350, rating: 4.4, reviews: 389, sold: 1120 },
  { name: "Umbrella", price: "18", oldPrice: "28", description: "Windproof travel umbrella", longDescription: "Compact automatic umbrella with wind-resistant frame. Includes carrying sleeve.", category: "More category", image: images.more[2], images: repeatImages(images.more), stock: 420, rating: 4.3, reviews: 512, sold: 1450 },
  { name: "Phone Case", price: "12", oldPrice: "18", description: "Protective phone cover", longDescription: "Shockproof phone case with raised edges for screen protection. Available for multiple phone models.", category: "More category", image: images.more[3], images: repeatImages(images.more), stock: 600, rating: 4.5, reviews: 789, sold: 2340 },
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

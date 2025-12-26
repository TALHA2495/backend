import tshirt from './assets/Layout/alibaba/Image/cloth/image 24.png';
import shorts from './assets/Layout/alibaba/Image/cloth/image 26.png';
import coat from './assets/Layout/alibaba/Image/cloth/image 30.png';
import bag from './assets/Layout/alibaba/Image/cloth/image 30.png';
import wallet from './assets/Layout/alibaba/Image/cloth/image 26.png';
import camera from './assets/Image/tech/6.png';
import headset from './assets/Image/tech/8.png';
import watch from './assets/Image/tech/image 29.png';
import laptop from './assets/Image/tech/image 32.png';
import phone from './assets/Image/tech/image 23.png';
import gaming from './assets/Image/tech/image 34.png';
import tech1 from './assets/Layout/alibaba/Image/tech/image 85.png';
import tech2 from './assets/Layout/alibaba/Image/tech/image 86.png';
import chair from './assets/Image/interior/1.png';
import sofa from './assets/Image/interior/3.png';
import dishes from './assets/Image/interior/6.png';
import mixer from './assets/Image/interior/7.png';
import blender from './assets/Image/interior/8.png';
import kettle from './assets/Image/interior/9.png';
import interior1 from './assets/Layout/alibaba/Image/interior/image 90.png';
import homeAppliance from './assets/Image/interior/image 89.png';

export const products = [
    // Recommended Items (IDs 1-10)
    {
        id: 1,
        name: "T-shirts with multiple colors, for men",
        price: "10.30",
        oldPrice: "15.00",
        description: "High quality cotton t-shirt with multiple color options. Breathable fabric suitable for summer wear.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: tshirt,
        rating: 4.5, reviews: 154, sold: 700,
        category: "Clothing"
    },
    {
        id: 2,
        name: "Jeans shorts for men blue color",
        price: "10.30",
        description: "Classic blue denim shorts for men. Durable stitching and comfortable fit.",
        longDescription: "Durable denim shorts featuring a classic five-pocket design and a comfortable fit for all-day wear.",
        image: shorts,
        rating: 4.3, reviews: 89, sold: 320,
        category: "Clothing"
    },
    {
        id: 3,
        name: "Brown winter coat medium size",
        price: "12.50",
        oldPrice: "25.00",
        description: "Warm winter coat in brown. Perfect for cold weather, stylish and comfortable.",
        longDescription: "Stay warm this winter with our premium quality winter coat. Made with high-grade insulation and a stylish brown exterior.",
        image: coat,
        rating: 4.8, reviews: 210, sold: 540,
        category: "Clothing"
    },
    {
        id: 4,
        name: "Jeans bag for travel for men",
        price: "34.00",
        description: "Durable denim travel bag. Spacious compartments and stylish look.",
        longDescription: "A versatile travel bag designed for the modern adventurer. Features multiple compartments for organized storage.",
        image: bag,
        rating: 4.0, reviews: 45, sold: 120,
        category: "Accessories"
    },
    {
        id: 5,
        name: "Leather wallet",
        price: "99.00",
        description: "Premium leather wallet with multiple card slots. Sleek design.",
        longDescription: "Handcrafted from genuine leather, this wallet offers both style and functionality with ample space for cards and cash.",
        image: wallet,
        rating: 4.9, reviews: 340, sold: 1100,
        category: "Accessories"
    },
    {
        id: 6,
        name: "Canon camera black, 100x zoom",
        price: "998.00",
        oldPrice: "1128.00",
        description: "High resolution Canon camera with 100x digital zoom. Capture moments with clarity.",
        longDescription: "Capture every detail with this high-resolution Canon camera. Featuring an incredible 100x zoom and advanced stabilization.",
        image: camera,
        rating: 4.6, reviews: 120, sold: 400,
        category: "Electronics"
    },
    {
        id: 7,
        name: "Headset for gaming with mic",
        price: "8.99",
        description: "Immersive gaming headset with noise-canceling microphone. Comfortable ear cups.",
        longDescription: "Experience crystal clear audio and deep bass with our premium gaming headset. Designed for long gaming sessions.",
        image: headset,
        rating: 4.2, reviews: 85, sold: 250,
        category: "Electronics"
    },
    {
        id: 8,
        name: "Smartwatch silver color modern",
        price: "10.30",
        description: "Modern silver smartwatch with fitness tracking, notifications, and long battery life.",
        longDescription: "Stay connected and track your health with this sleek silver smartwatch. Compatible with all major smartphones.",
        image: watch,
        rating: 4.4, reviews: 190, sold: 600,
        category: "Electronics"
    },
    {
        id: 9,
        name: "Blue wallet for men leather material",
        price: "10.30",
        description: "Stylish blue leather wallet. Compact yet spacious.",
        longDescription: "A compact blue leather wallet that doesn't compromise on storage. Perfect for the minimalist traveler.",
        image: wallet,
        rating: 4.1, reviews: 60, sold: 180,
        category: "Accessories"
    },
    {
        id: 10,
        name: "Jeans bag for travel for men",
        price: "80.95",
        description: "Large capacity travel bag made from high-quality denim.",
        longDescription: "Our most durable travel bag yet, made from heavy-duty denim to withstand the rigors of travel.",
        image: bag,
        rating: 4.7, reviews: 110, sold: 300,
        category: "Accessories"
    },

    // Home and Outdoor Items (IDs 11-18)
    { id: 11, name: "Soft chairs", price: "19.00", description: "Comfortable soft chair for home", longDescription: "High quality soft chair perfect for your living room.", image: chair, category: "Home", rating: 4.0, sold: 50 },
    { id: 12, name: "Sofa & chair", price: "19.00", description: "Modern sofa set", longDescription: "A stylish sofa and chair set that complements any modern interior.", image: sofa, category: "Home", rating: 4.5, sold: 20 },
    { id: 13, name: "Kitchen dishes", price: "19.00", description: "Ceramic dish set", longDescription: "Elegant ceramic dishes for your dining table.", image: dishes, category: "Home", rating: 4.2, sold: 100 },
    { id: 14, name: "Smart watches", price: "19.00", description: "Digital smart watch", longDescription: "Feature-rich smart watch with long battery life.", image: watch, category: "Electronics", rating: 4.1, sold: 80 },
    { id: 15, name: "Kitchen mixer", price: "100.00", description: "Professional kitchen mixer", longDescription: "Powerful mixer for all your baking and cooking needs.", image: mixer, category: "Home", rating: 4.9, sold: 15 },
    { id: 16, name: "Blenders", price: "39.00", description: "High speed blender", longDescription: "Blend smoothies and more with ease using this high-speed blender.", image: blender, category: "Home", rating: 4.3, sold: 45 },
    { id: 17, name: "Home appliance", price: "19.00", description: "Essential home appliance", longDescription: "A must-have appliance for every modern home.", image: homeAppliance, category: "Home", rating: 4.0, sold: 30 },
    { id: 18, name: "Coffee maker", price: "10.00", description: "Italian style coffee maker", longDescription: "Brew the perfect cup of coffee every morning.", image: kettle, category: "Home", rating: 4.4, sold: 60 },

    // Consumer Electronics (IDs 19-26)
    { id: 19, name: "Apple iPhone 13 Pro, Blue", price: "899.00", description: "Latest iPhone with Pro camera system", longDescription: "The iPhone 13 Pro features a Pro camera system and the A15 Bionic chip for ultimate performance.", image: phone, category: "Electronics", rating: 4.9, sold: 500 },
    { id: 20, name: "Logitech MX Master 3 Mouse", price: "99.00", description: "Advanced wireless mouse", longDescription: "Master your workflow with the MX Master 3, designed for precision and silence.", image: tech1, category: "Electronics", rating: 4.8, sold: 1200 },
    { id: 21, name: "Sony WH-1000XM4 Headphones", price: "348.00", description: "Noise canceling headphones", longDescription: "Leading noise-canceling headphones with premium sound quality.", image: tech2, category: "Electronics", rating: 4.7, sold: 800 },
    { id: 22, name: "Samsung Galaxy Watch 4", price: "249.00", description: "Smart fitness tracker", longDescription: "Track your fitness and stay connected with the Galaxy Watch 4.", image: watch, category: "Electronics", rating: 4.5, sold: 400 },
    { id: 23, name: "Razer BlackWidow Keyboard", price: "129.00", description: "Mechanical gaming keyboard", longDescription: "Responsive mechanical keys for a competitive edge in gaming.", image: gaming, category: "Electronics", rating: 4.6, sold: 350 },
    { id: 24, name: "MacBook Pro 14-inch", price: "1999.00", description: "Powerful laptop for pros", longDescription: "The M1 Pro chip delivers groundbreaking performance and amazing battery life.", image: laptop, category: "Electronics", rating: 4.9, sold: 200 },
    { id: 25, name: "Modern interior desk lamp", price: "45.00", description: "Sleek desk lamp for office", longDescription: "Illuminate your workspace with this modern and energy-efficient desk lamp.", image: interior1, category: "Home", rating: 4.2, sold: 150 },
    { id: 26, name: "Electric water kettle", price: "29.00", description: "Fast boiling electric kettle", longDescription: "Boil water in minutes with this stylish electric kettle.", image: kettle, category: "Home", rating: 4.1, sold: 90 },
];

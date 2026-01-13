import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    oldPrice: {
      type: String
    },
    image: {
      type: String
    },
    images: {
      type: [String],
      default: function () {
        return this.image ? [this.image, this.image, this.image, this.image, this.image] : [];
      }
    },
    description: {
      type: String
    },
    longDescription: {
      type: String
    },
    category: {
      type: String
    },
    rating: {
      type: Number,
      default: 4.5
    },
    reviews: {
      type: Number,
      default: 0
    },
    sold: {
      type: Number,
      default: 0
    },
    stock: {
      type: Number,
      default: 0
    },
    priceInfo: {
      type: [{
        qty: String,
        price: String
      }],
      default: function () {
        return [
          { qty: "50-100 pcs", price: this.price || "$0.00" },
          { qty: "100-700 pcs", price: "$90.00" },
          { qty: "700+ pcs", price: "$78.00" }
        ];
      }
    },
    details: {
      type: [{
        label: String,
        value: String
      }],
      default: [
        { label: "Price:", value: "Negotiable" },
        { label: "Type:", value: "Classic" },
        { label: "Material:", value: "High quality" },
        { label: "Design:", value: "Modern nice" }
      ]
    },
    customization: {
      type: String,
      default: "Customized logo and design custom packages"
    },
    protection: {
      type: String,
      default: "Refund Policy"
    },
    warranty: {
      type: String,
      default: "1 year full warranty"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);

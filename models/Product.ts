import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },

    description: {
      type: String,
      default: "",
    },

    price: { type: Number, required: true },

    stock: { type: Number, required: true },

    rating: {
      type: Number,
      default: 4.8, // ⭐ prevents UI crashes
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    imageUrl: { type: String, required: true },

    imagePublicId: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Product ||
  mongoose.model("Product", ProductSchema);
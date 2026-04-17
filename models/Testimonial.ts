import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, default: "Verified Buyer" },
    text: { type: String, required: true },
    highlight: { type: Boolean, default: false },
    approved: { type: Boolean, default: false }, // 🔐 moderation
    reviewUrl: { type: String, required: true },
    reviewPublicId: { type: String, required: true },
    resourceType: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);

import mongoose, { Schema, models } from "mongoose";

const VideoTestimonialSchema = new Schema(
  {
    name: { type: String, required: true },

    videoUrl: { type: String, required: true },
    videoPublicId: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.VideoTestimonial ||
  mongoose.model("VideoTestimonial", VideoTestimonialSchema);
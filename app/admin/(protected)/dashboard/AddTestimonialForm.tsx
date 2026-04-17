"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AddTestimonialForm() {
  const [name, setName] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!video) {
      toast.error("Please select a video");
      return;
    }

    if (video.size > 15 * 1024 * 1024) {
      toast.error("Video must be under 15MB");
      return;
    }

    try {
      setLoading(true);

      // 🔥 STEP 1: Upload directly to Cloudinary
      const formData = new FormData();
      formData.append("file", video);
      formData.append("upload_preset", "testimonials"); // unsigned preset

      const cloudinaryRes = await fetch(
        "https://api.cloudinary.com/v1_1/daknbumls/video/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!cloudinaryRes.ok) throw new Error("Cloudinary upload failed");

      const cloudinaryData = await cloudinaryRes.json();
      console.log("Cloudinary response:", cloudinaryData);

      // 🔥 STEP 2: Save testimonial metadata
      const res = await fetch("/api/admin/video-testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          videoUrl: cloudinaryData.secure_url,
          videoPublicId: cloudinaryData.public_id,
        }),
      });

      if (!res.ok) throw new Error("DB save failed");

      toast.success("✅ Testimonial added");
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error("Failed to upload testimonial");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Plus className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Video Testimonial</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label>Video (MP4, ≤ 15MB)</Label>
            <Input
              type="file"
              accept="video/mp4"
              onChange={(e) =>
                setVideo(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Uploading..." : "Save Testimonial"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
"use client"
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";

// ✅ Cloudinary video URL (no import)
const aboutVideo =
  "https://res.cloudinary.com/daknbumls/video/upload/f_auto,q_auto/VideoMotivation_b7kkgl.mp4";

export default function AboutVideoModal({   onClose,
}: {
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Lock body scroll + stop video on close
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      videoRef.current?.pause();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-600 hover:text-black cursor-pointer"
        >
          <FaTimes size={22} />
        </button>

        {/* Video */}
        <div className="aspect-video w-full bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={aboutVideo}
            autoPlay
            controls
            playsInline
            preload="metadata"
          />
        </div>

        {/* Text */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            About Natural Relief
          </h2>
          <p className="text-gray-600">
            We believe in healing hair naturally with science-backed,
            personalized care.
          </p>
        </div>
      </div>
    </div>
  );
}

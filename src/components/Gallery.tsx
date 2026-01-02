// src/components/Gallery.tsx
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "../types";
import { heroImages } from "../data/constants";

interface GalleryProps {
  gallery: GalleryImage[];
  setSelectedImage: (image: GalleryImage) => void;
}

const Gallery = ({ gallery, setSelectedImage }: GalleryProps) => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const reelRef = useRef<HTMLDivElement>(null);

  // Tambahkan ini untuk timer
  const galleryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto slide gallery utama
  useEffect(() => {
    if (isPlaying) {
      galleryTimerRef.current = setTimeout(() => {
        setCurrentGalleryIndex((prev) => (prev + 1) % gallery.length);
      }, 4000);
    }

    return () => {
      if (galleryTimerRef.current) {
        clearTimeout(galleryTimerRef.current);
      }
    };
  }, [currentGalleryIndex, gallery.length, isPlaying]);

  // Auto slide reel horizontal
  useEffect(() => {
    if (isPlaying) {
      reelTimerRef.current = setTimeout(() => {
        setCurrentReelIndex((prev) => (prev + 1) % heroImages.length);
      }, 3000);
    }

    return () => {
      if (reelTimerRef.current) {
        clearTimeout(reelTimerRef.current);
      }
    };
  }, [currentReelIndex, isPlaying]);
  const handlePrev = () => {
    setCurrentGalleryIndex(
      (prev) => (prev - 1 + gallery.length) % gallery.length
    );
  };

  const handleNext = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % gallery.length);
  };

  const handleReelPrev = () => {
    setCurrentReelIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const handleReelNext = () => {
    setCurrentReelIndex((prev) => (prev + 1) % heroImages.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Navigasi dengan keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === " ") {
        togglePlayPause();
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);

  return (
    <section
      id="galeri"
      className="py-10 md:py-20 bg-linear-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
              GALLERY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 px-2">
            Doukemntasi{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Kerja
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
            Dokumentasi proses dan hasil pekerjaan kami di lapangan
          </p>
        </div>

        {/* Gallery Carousel Utama */}

        {/* Image Reel Horizontal (Instagram-like) */}
        <div className="mb-12">
          <div className="flex items-center justify-end mb-6">
            <div className="flex gap-2 ">
              <button
                onClick={handleReelPrev}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleReelNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next reel"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div
            ref={reelRef}
            className="relative h-64 rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReelIndex * 100}%)` }}
            >
              {heroImages.map((image) => (
                <div key={image.id} className="relative w-full h-full shrink-0">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-bold">{image.title}</h4>
                      <p className="text-blue-100 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReelIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentReelIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {gallery.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`relative group aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                idx === currentGalleryIndex
                  ? "ring-4 ring-blue-500 ring-offset-2 scale-105"
                  : "hover:scale-105"
              }`}
              onMouseEnter={() => {
                if (isPlaying) {
                  setCurrentGalleryIndex(idx);
                }
              }}
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className={
                  "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500/20"
                }
              >
                <div className="text-center p-4">
                  <h4 className="font-bold text-white drop-shadow-lg text-sm">
                    {item.title}
                  </h4>
                  {/* <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full mt-2 inline-block ${
                      item.category === "before"
                        ? "bg-blue-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {item.category === "before" ? "SEBELUM" : "SESUDAH"}
                  </span> */}
                </div>
              </div>

              {/* Indicator for current image */}
              {idx === currentGalleryIndex && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Instructions */}
        <div className="hidden md:block mt-8 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-2">
            <span className="hidden md:inline">Gunakan</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←</kbd>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">→</kbd>
            <span>untuk navigasi atau</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">SPACE</kbd>
            <span>untuk pause/play</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

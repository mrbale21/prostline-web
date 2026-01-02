import { useEffect, useState, useRef } from "react";
import { Star, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { heroImages } from "../data/constants";
import { FaWhatsapp } from "react-icons/fa";

interface HeroProps {
  scrollToSection: (id: string) => void;
  sendWhatsApp: (message: string) => void;
}

const Hero = ({ scrollToSection, sendWhatsApp }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Auto slide hero images
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentImageIndex, isPlaying]);

  const handlePrev = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    }
  };

  const handleNext = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && timerRef.current === null) {
      timerRef.current = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    } else if (isPlaying && timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Navigasi keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === " ") {
        togglePlayPause();
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);

  return (
    <section
      id="beranda"
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 4rem)", minHeight: "600px" }}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay linear untuk meningkatkan kontras teks */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-blue-800/60 to-cyan-900/80"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center pt-8">
        {" "}
        {/* pt-4 untuk sedikit padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="mb-6 inline-block">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                  <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                  <span className="text-sm font-semibold">
                    Dipercaya 500+ Pelanggan
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
                <span className="block bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  Solusi Profesional
                </span>
                <span className="block mt-1 md:mt-2 text-3xl md:text-4xl lg:text-5xl">
                  Service & Perawatan <span className="text-cyan-300">AC</span>
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-xl mb-6 md:mb-10 text-blue-50 font-light max-w-2xl leading-relaxed">
                Teknisi bersertifikat, harga transparan, garansi resmi hingga 30
                hari. Layanan cepat untuk rumah, kantor, dan gedung.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() =>
                    sendWhatsApp(
                      "Halo, saya ingin konsultasi tentang service AC"
                    )
                  }
                  className="group bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                  Hubungi Kami Sekarang
                </button>
                <button
                  onClick={() => scrollToSection("paket")}
                  className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Lihat Paket Hemat
                </button>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="hidden md:block relative h-75 sm:h-87.5 md:h-100 lg:h-112.5 rounded-2xl overflow-hidden shadow-2xl group mt-4 lg:mt-0">
              {/* Current Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{
                  backgroundImage: `url(${heroImages[currentImageIndex].imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
              </div>

              {/* Image Info Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="mb-4">
                  <div className="text-xs md:text-sm font-semibold px-3 md:px-4 py-1 rounded-full inline-block mb-2 md:mb-3 bg-blue-500/90">
                    {heroImages[currentImageIndex].category.toUpperCase()}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                    {heroImages[currentImageIndex].title}
                  </h3>
                  <p className="text-blue-100 max-w-md text-sm md:text-base">
                    {heroImages[currentImageIndex].description}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePrev}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 md:h-1.5 bg-black/30 z-20">
                <div
                  className="h-full bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-5000 ease-linear"
                  style={{
                    width: `${
                      ((currentImageIndex + 1) / heroImages.length) * 100
                    }%`,
                  }}
                />
              </div>

              {/* Thumbnail Indicators */}
              <div className="absolute top-6 md:top-8 right-6 flex gap-1.5 md:gap-2 z-20">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (timerRef.current) clearTimeout(timerRef.current);
                      setCurrentImageIndex(idx);
                      if (isPlaying) {
                        timerRef.current = setTimeout(() => {
                          setCurrentImageIndex(
                            (prev) => (prev + 1) % heroImages.length
                          );
                        }, 5000);
                      }
                    }}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "w-4 md:w-6 bg-white"
                        : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute  bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("tentang")}
          className="text-white/80 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll ke bawah"
        >
          <ChevronLeft className="w-7 h-7 rotate-90 p-0.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all transform hover:scale-110 shadow-lg" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

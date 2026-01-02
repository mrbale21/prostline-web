// src/components/Testimonials.tsx
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "../types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!testimonials.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      id="testimoni"
      className="bg-linear-to-br from-gray-50 to-blue-50 py-12 md:py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
              TESTIMONI
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 px-2">
            Testimoni{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Pelanggan
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
            Solusi terpadu untuk semua kebutuhan perawatan AC Anda
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`transition-opacity duration-700 ${
                idx === current
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }`}
            >
              <div className="bg-white rounded-xl shadow-md p-5 md:p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm md:text-base italic leading-relaxed mb-4">
                  “{t.text}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                    {t.avatarUrl && (
                      <img
                        src={t.avatarUrl}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-xs">{t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

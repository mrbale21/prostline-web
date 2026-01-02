import { Shield } from "lucide-react";
import type { Benefit } from "../types";

interface BenefitsProps {
  benefits: Benefit[];
}

const About = ({ benefits }: BenefitsProps) => {
  return (
    <section
      id="tentang"
      className="py-12 sm:py-16 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-blue-50 rounded-full filter blur-xl sm:blur-2xl opacity-60"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-cyan-50 rounded-full filter blur-xl sm:blur-2xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Grid Layout - Stack di mobile, side-by-side di desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Company Description */}
          <div className="order-1 lg:order-1">
            {/* Section Label */}
            <div className="mb-3 sm:mb-4">
              <span className="inline-block bg-linear-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-100">
                TENTANG KAMI
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              Tentang{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                PT. FROSTLINE INDONESIA
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed sm:leading-loose">
                <span className="font-medium text-blue-700">
                  Frostline Indonesia
                </span>{" "}
                adalah perusahaan spesialis sistem AC VRV/VRF dan HVAC gedung
                yang berfokus pada kualitas, keandalan, dan efisiensi energi.
                Kami menyediakan layanan pengadaan unit, instalasi,
                commissioning, serta perawatan dan maintenance dengan standar
                teknis dan keselamatan kerja yang tinggi.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed sm:leading-loose">
                Dengan dukungan teknisi berpengalaman, Frostline Indonesia
                menangani proyek gedung perkantoran, rumah sakit, area
                komersial, dan fasilitas industri, menghadirkan sistem pendingin
                yang stabil, tenang, dan berkelanjutan untuk setiap kebutuhan
                ruang.
              </p>

              {/* Highlighted Commitment Box */}
              <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-linear-to-r from-blue-50/50 to-cyan-50/50 rounded-xl sm:rounded-2xl border-l-4 border-blue-500">
                <p className="text-gray-700 text-sm sm:text-base font-medium italic leading-relaxed">
                  "Kami berkomitmen memberikan solusi pendingin yang presisi,
                  efisien, dan terpercaya, guna mendukung kenyamanan dan
                  operasional bangunan secara optimal."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits Grid */}
          <div className="order-2 lg:order-2">
            {/* Benefits Title */}
            <div className="mb-6 sm:mb-8 lg:mt-13">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                Keunggulan <span className="text-blue-600">Kami</span>
              </h3>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="group  transition-all duration-300 active:scale-[0.98] sm:active:scale-100"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Icon Container */}
                    <div className="shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-lg sm:text-xl">{item.icon}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action - Desktop only */}
            <div className="hidden sm:block mt-8 md:mt-10">
              <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-100">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="shrink-0">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                      Garansi & Dukungan Penuh
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      Nikmati layanan purna jual dan garansi resmi untuk setiap
                      instalasi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

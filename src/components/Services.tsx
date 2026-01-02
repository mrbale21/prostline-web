import type { Service } from "../types";

interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  return (
    <section
      id="layanan"
      className="py-8 md:pt-4 lg:pb-18 bg-linear-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 relative overflow-hidden"
    >
      {/* Animated background elements - lebih kecil di mobile */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-200 rounded-full filter blur-xl sm:blur-2xl md:blur-3xl opacity-10 sm:opacity-15 md:opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-cyan-200 rounded-full filter blur-xl sm:blur-2xl md:blur-3xl opacity-10 sm:opacity-15 md:opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
              LAYANAN KAMI
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 px-2">
            Layanan{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Lengkap
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
            Solusi terpadu untuk semua kebutuhan perawatan AC Anda
          </p>
        </div>

        {/* Services Grid - Responsive dengan mobile-first approach */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl sm:rounded-2xl
  p-3 sm:p-4 md:p-5 lg:p-6
  shadow-md hover:shadow-lg transition-all duration-300
  sm:hover:-translate-y-1
  border border-gray-100 group"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
      bg-linear-to-br from-blue-50 to-cyan-50
      rounded-lg sm:rounded-xl
      flex items-center justify-center
      text-blue-600 mb-3"
                >
                  <div className="text-lg sm:text-xl md:text-2xl">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1.5">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { CheckCircle } from "lucide-react";
import type { Package, PriceItem } from "../types";

interface PackagesProps {
  packages: Package[];
  priceList: PriceItem[];
  sendWhatsApp: (message: string) => void;
}

const Packages = ({ packages, priceList, sendWhatsApp }: PackagesProps) => {
  return (
    <section
      id="paket"
      className="py-12 md:pt-20 md:pb-4 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
              PAKET
            </span>
          </div> */}

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 px-2">
            Paket{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Service AC
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* Packages */}
        <div className="relative -mx-4">
          <div
            className="flex md:grid md:grid-cols-3 gap-3 md:gap-8 
    overflow-x-auto md:overflow-visible 
    px-4 pb-5 snap-x snap-mandatory scrollbar-hide"
          >
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl md:rounded-2xl
        p-4 md:p-8 shrink-0
        w-[78vw] sm:w-[65vw] md:w-auto min-w-65
        snap-center transition-all
        ${
          pkg.recommended
            ? "ring-2 ring-blue-500 pt-2"
            : "border border-gray-100"
        }`}
              >
                {pkg.recommended && (
                  <span className="inline-block mb-3 text-[10px] font-bold px-3 py-1 rounded-full bg-blue-500 text-white">
                    REKOMENDASI
                  </span>
                )}

                <h3 className="text-base md:text-2xl font-bold text-gray-800 mb-1">
                  {pkg.name}
                </h3>

                <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-4">
                  Rp {pkg.price}
                </div>

                <ul className="space-y-2 mb-5">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span className="text-gray-600 text-xs md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    sendWhatsApp(
                      `Halo, saya tertarik dengan Paket ${pkg.name} (Rp ${pkg.price})`
                    )
                  }
                  className={`w-full py-2.5 rounded-md font-semibold text-xs md:text-base transition ${
                    pkg.recommended
                      ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white"
                      : "bg-blue-50 text-blue-600 border border-blue-200"
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Price List */}
        <div className="mt-8 md:mt-14 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-linear-to-r from-blue-600 to-cyan-500 px-4 py-4 md:p-8 text-white">
            <h3 className="text-base md:text-3xl font-bold">
              Daftar Harga Layanan
            </h3>
            <p className="text-blue-100 text-xs md:text-base mt-0.5">
              Harga transparan & jelas
            </p>
          </div>

          <div className="p-3 md:p-8">
            <div className="space-y-2 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
              {priceList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center
          px-3 py-2 md:p-4
          rounded-lg border border-gray-100
          text-sm md:text-base"
                >
                  <span className="text-gray-700 font-medium">
                    {item.service}
                  </span>
                  <span className="text-blue-600 font-semibold">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Packages;

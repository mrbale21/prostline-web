import { X } from "lucide-react";
import type { GalleryImage } from "../types";

interface ImageModalProps {
  selectedImage: GalleryImage;
  setSelectedImage: (image: GalleryImage | null) => void;
}

const ImageModal = ({ selectedImage, setSelectedImage }: ImageModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedImage(null)}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 bg-gray-100 dark:bg-gray-900 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            {/* <div
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                selectedImage.category === "before"
                  ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                  : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              }`}
            >
              {selectedImage.category === "before" ? "SEBELUM" : "SESUDAH"}
            </div> */}
            <h3 className="font-bold text-gray-800 dark:text-white">
              {selectedImage.title}
            </h3>
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Deskripsi
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedImage.description ||
                    `Contoh hasil kerja yang dilakukan service oleh tim profesional kami.`}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Detail Service
                </h4>

                <ul className="space-y-2">
                  {selectedImage.serviceDetails?.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Waktu Pengerjaan
                </h4>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">
                    {selectedImage.duration || "± 2 Jam"}
                  </span>
                </div>
              </div>

              {selectedImage.location && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    Lokasi
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedImage.location}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

// src/components/FloatingWhatsApp.tsx
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppProps {
  sendWhatsApp: (message: string) => void;
}

const FloatingWhatsApp = ({ sendWhatsApp }: FloatingWhatsAppProps) => {
  return (
    <button
      onClick={() =>
        sendWhatsApp("Halo, saya ingin konsultasi tentang service AC")
      }
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all z-50 group"
    >
      <FaWhatsapp className="w-6 h-6" />
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Konsultasi Gratis
      </div>
    </button>
  );
};

export default FloatingWhatsApp;

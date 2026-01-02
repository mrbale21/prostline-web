// src/components/Contact.tsx
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="kontak"
      className="bg-linear-to-br from-blue-900 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Content */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 mb-10">
          {/* Company */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              PT. FROSTLINE INDONESIA
            </h2>
            <p className="text-blue-200 text-sm md:text-base mb-5 leading-relaxed">
              Solusi profesional untuk service dan maintenance AC rumah, kantor,
              dan industri.
            </p>

            <div className="flex gap-3">
              {[FaFacebook, FaInstagram, FaTiktok].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-blue-800/40 flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex gap-3">
                <Phone className="w-4.5 h-4.5 text-cyan-400 mt-0.5" />
                <span className="text-blue-200">+62 812-1065-4754</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4.5 h-4.5 text-cyan-400 mt-0.5" />
                <span className="text-blue-200 break-all">
                  frostline.indonesia@gmail.com
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4.5 h-4.5 text-cyan-400 mt-0.5" />
                <span className="text-blue-200 leading-relaxed text-sm">
                  Citeureup, Kab. Bogor – Jawa Barat
                </span>
              </li>
            </ul>
          </div>

          {/* Operational Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>

            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex justify-between">
                <span>Senin – Jumat</span>
                <span>08:00 – 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabtu</span>
                <span>08:00 – 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Minggu & Libur</span>
                <span>08:00 – 16:00</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-cyan-400 font-medium">
              * Layanan darurat 24 jam tersedia
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-blue-800 pt-6 text-center text-blue-400 text-sm">
          <p>© {currentYear} PT. FROSTLINE INDONESIA. All rights reserved.</p>
          <p className="mt-1 text-xs">Terima kasih atas kepercayaan Anda</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

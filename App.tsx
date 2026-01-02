import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  CheckCircle,
  Wrench,
  Droplets,
  Settings,
  Users,
  Award,
  Shield,
  Clock,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

type GalleryImage = {
  id: number;
  title: string;
  category: "before" | "after";
  description?: string;
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto slide gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters((prev) => ({
        projects: prev.projects < 1000 ? prev.projects + 20 : 1000,
        clients: prev.clients < 500 ? prev.clients + 10 : 500,
        years: prev.years < 10 ? prev.years + 1 : 10,
        satisfaction: prev.satisfaction < 99 ? prev.satisfaction + 2 : 99,
      }));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Service AC",
      desc: "Perawatan rutin AC rumah dan kantor untuk performa optimal",
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Cuci AC",
      desc: "Pembersihan menyeluruh komponen AC hingga bersih maksimal",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Perbaikan AC",
      desc: "Diagnosa dan perbaikan kerusakan AC dengan teknisi profesional",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Bongkar Pasang AC",
      desc: "Instalasi dan relokasi AC dengan aman dan profesional",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Maintenance Gedung",
      desc: "Perawatan sistem AC gedung dan kantor secara berkala",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Service Cepat",
      desc: "Layanan darurat AC 24 jam untuk kebutuhan mendesak",
    },
  ];

  const benefits = [
    {
      icon: <Users />,
      title: "Teknisi Berpengalaman",
      desc: "Tim profesional dengan sertifikasi resmi",
    },
    {
      icon: <Award />,
      title: "Harga Transparan",
      desc: "Tidak ada biaya tersembunyi",
    },
    {
      icon: <Clock />,
      title: "Respon Cepat",
      desc: "Siap datang dalam 2-4 jam",
    },
    {
      icon: <Shield />,
      title: "Bergaransi",
      desc: "Garansi service hingga 30 hari",
    },
    {
      icon: <CheckCircle />,
      title: "Sparepart Berkualitas",
      desc: "Menggunakan parts original dan terjamin",
    },
    {
      icon: <Star />,
      title: "Kepuasan Pelanggan",
      desc: "Rating 4.9/5 dari 500+ pelanggan",
    },
  ];

  const packages = [
    {
      name: "Basic",
      price: "150.000",
      features: [
        "Cuci AC Standard",
        "Cek Freon",
        "Pembersihan Filter",
        "Garansi 7 Hari",
      ],
      recommended: false,
    },
    {
      name: "Standard",
      price: "250.000",
      features: [
        "Cuci AC Premium",
        "Isi Freon 0.5 PK",
        "Pembersihan Menyeluruh",
        "Cek Komponen",
        "Garansi 14 Hari",
      ],
      recommended: true,
    },
    {
      name: "Premium",
      price: "450.000",
      features: [
        "Full Service AC",
        "Isi Freon 1 PK",
        "Overhaul Komplit",
        "Ganti Sparepart",
        "Garansi 30 Hari",
        "Free Check Up 3x",
      ],
      recommended: false,
    },
  ];

  const priceList = [
    { service: "Cuci AC 0.5 - 1 PK", price: "Rp 75.000" },
    { service: "Cuci AC 1.5 - 2 PK", price: "Rp 100.000" },
    { service: "Service AC + Isi Freon", price: "Rp 250.000" },
    { service: "Bongkar AC", price: "Rp 150.000" },
    { service: "Pasang AC", price: "Rp 250.000" },
    { service: "Perbaikan Ringan", price: "Rp 200.000" },
    { service: "Perbaikan Berat", price: "Rp 500.000" },
    { service: "Maintenance Bulanan", price: "Rp 1.500.000" },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "PT. Maju Jaya",
      rating: 5,
      text: "Pelayanan sangat profesional dan cepat. AC di kantor kami jadi dingin maksimal lagi!",
    },
    {
      name: "Siti Nurhaliza",
      company: "Rumah Pribadi",
      rating: 5,
      text: "Teknisinya ramah dan berpengalaman. Harga juga sangat terjangkau. Recommended!",
    },
    {
      name: "Ahmad Fauzi",
      company: "Hotel Bintang Lima",
      rating: 5,
      text: "Sudah langganan untuk maintenance AC hotel. Selalu tepat waktu dan hasil memuaskan.",
    },
  ];

  const gallery: GalleryImage[] = [
    { id: 1, title: "Service AC Rumah", category: "before" },
    { id: 2, title: "Hasil Cuci AC", category: "after" },
    { id: 3, title: "Instalasi AC Kantor", category: "before" },
    { id: 4, title: "Maintenance Gedung", category: "after" },
    { id: 5, title: "Perbaikan AC", category: "before" },
    { id: 6, title: "AC Bersih Maksimal", category: "after" },
  ];

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const sendWhatsApp = (message: any) => {
    const phone = "6281234567890";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="font-sans">
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                PROSTLINE
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "Beranda",
                "Tentang",
                "Layanan",
                "Keunggulan",
                "Paket",
                "Galeri",
                "Testimoni",
                "Kontak",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    scrolled ? "text-gray-700" : "text-white"
                  } hover:text-blue-600 transition-colors font-medium`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className={scrolled ? "text-gray-700" : "text-white"} />
              ) : (
                <Menu className={scrolled ? "text-gray-700" : "text-white"} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            {[
              "Beranda",
              "Tentang",
              "Layanan",
              "Keunggulan",
              "Paket",
              "Galeri",
              "Testimoni",
              "Kontak",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-800 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  5 + Math.random() * 10
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
              <span className="text-sm font-semibold">
                Dipercaya 500+ Pelanggan
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Solusi Profesional
            </span>
            <br />
            <span className="text-white">Service & Perawatan AC</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-blue-50 font-light max-w-3xl mx-auto leading-relaxed">
            Teknisi bersertifikat, harga transparan, garansi resmi hingga 30
            hari
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                sendWhatsApp("Halo, saya ingin konsultasi tentang service AC")
              }
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Hubungi Kami Sekarang
            </button>
            <button
              onClick={() => scrollToSection("paket")}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105"
            >
              Lihat Paket Hemat
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Garansi Resmi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Teknisi Bersertifikat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Harga Transparan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Tentang PT. PROSTLINE INDONESIA
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                PT. PROSTLINE INDONESIA adalah perusahaan yang bergerak di
                bidang jasa service dan maintenance AC profesional. Dengan
                pengalaman lebih dari 10 tahun, kami telah melayani ribuan
                pelanggan dari berbagai segmen, mulai dari rumah tinggal hingga
                gedung perkantoran.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Didukung oleh tim teknisi bersertifikat dan berpengalaman, kami
                berkomitmen memberikan layanan terbaik dengan harga yang
                kompetitif dan transparan.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Visi Kami
                  </h3>
                  <p className="text-gray-600">
                    Menjadi perusahaan service AC terpercaya dan terdepan di
                    Indonesia dengan standar kualitas internasional.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Misi Kami
                  </h3>
                  <p className="text-gray-600">
                    Memberikan solusi perawatan AC yang profesional, cepat, dan
                    terpercaya dengan harga yang terjangkau untuk semua
                    kalangan.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Settings className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-center mb-4">
                    Profesional & Terpercaya
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Teknisi Bersertifikat",
                      "Peralatan Modern",
                      "Layanan 24/7",
                      "Garansi Resmi",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section
        id="layanan"
        className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                LAYANAN KAMI
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Layanan{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Lengkap
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Solusi terpadu untuk semua kebutuhan perawatan AC Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Selengkapnya</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Keunggulan Kami
            </h2>
            <p className="text-gray-600 text-lg">
              Mengapa memilih PT. PROSTLINE INDONESIA?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white transform hover:scale-110 transition-transform">
              <div className="text-6xl font-extrabold mb-2 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">
                {counters.projects}+
              </div>
              <div className="text-blue-100 font-semibold">AC Diservice</div>
            </div>
            <div className="text-center text-white transform hover:scale-110 transition-transform">
              <div className="text-6xl font-extrabold mb-2 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">
                {counters.clients}+
              </div>
              <div className="text-blue-100 font-semibold">Pelanggan Puas</div>
            </div>
            <div className="text-center text-white transform hover:scale-110 transition-transform">
              <div className="text-6xl font-extrabold mb-2 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">
                {counters.years}+
              </div>
              <div className="text-blue-100 font-semibold">
                Tahun Pengalaman
              </div>
            </div>
            <div className="text-center text-white transform hover:scale-110 transition-transform">
              <div className="text-6xl font-extrabold mb-2 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">
                {counters.satisfaction}%
              </div>
              <div className="text-blue-100 font-semibold">
                Tingkat Kepuasan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paket */}
      <section id="paket" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Paket Service AC
            </h2>
            <p className="text-gray-600 text-lg">
              Pilih paket yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.recommended ? "ring-4 ring-blue-500 scale-105" : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    REKOMENDASI
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  Rp {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    sendWhatsApp(
                      `Halo, saya tertarik dengan Paket ${pkg.name} (Rp ${pkg.price})`
                    )
                  }
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    pkg.recommended
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                      : "bg-blue-50 hover:bg-blue-100 text-blue-600 border-2 border-blue-100"
                  }`}
                >
                  {pkg.recommended ? "Pilih Paket Ini" : "Pilih Paket"}
                </button>
              </div>
            ))}
          </div>

          {/* Price List */}
          <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
              <h3 className="text-3xl font-bold">Daftar Harga Layanan</h3>
              <p className="text-blue-100">
                Harga transparan, tidak ada biaya tersembunyi
              </p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {priceList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 hover:bg-blue-50 rounded-lg transition-colors border border-gray-100"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.service}
                    </span>
                    <span className="text-blue-600 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Galeri Hasil Kerja
            </h2>
            <p className="text-gray-600 text-lg">
              Sebelum dan sesudah service oleh tim profesional kami
            </p>
          </div>

          {/* Gallery Carousel */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/80 z-10 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="text-3xl font-bold mb-2">
                  {gallery[currentGalleryIndex].title}
                </h3>
                <div
                  className={`text-sm font-semibold px-4 py-1 rounded-full inline-block ${
                    gallery[currentGalleryIndex].category === "before"
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {gallery[currentGalleryIndex].category === "before"
                    ? "SEBELUM"
                    : "SESUDAH"}
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 z-20">
              <span className="bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                {currentGalleryIndex + 1} / {gallery.length}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`relative overflow-hidden rounded-xl h-48 ${
                  idx === currentGalleryIndex ? "ring-4 ring-blue-500" : ""
                }`}
                onMouseEnter={() => setCurrentGalleryIndex(idx)}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    item.category === "before"
                      ? "bg-red-500/20"
                      : "bg-green-500/20"
                  }`}
                >
                  <div className="text-center">
                    <h4 className="font-bold text-white drop-shadow-lg">
                      {item.title}
                    </h4>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full mt-2 inline-block ${
                        item.category === "before"
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {item.category === "before" ? "SEBELUM" : "SESUDAH"}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section
        id="testimoni"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Testimoni Pelanggan
            </h2>
            <p className="text-gray-600 text-lg">
              Apa kata pelanggan tentang layanan kami
            </p>
          </div>

          <div className="relative h-96">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === currentTestimonial
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentTestimonial ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kontak & Footer */}
      <section
        id="kontak"
        className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                PROSTLINE
              </div>
              <p className="text-blue-200 mb-6">
                Solusi profesional untuk semua kebutuhan service dan maintenance
                AC Anda.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <span className="font-bold">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <span className="font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <span className="font-bold">TW</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Kontak Kami</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-blue-200">+62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-blue-200">info@prostline.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-blue-200">
                    Jl. Sudirman No. 123, Jakarta
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Jam Operasional</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-blue-200">
                  <span>Senin - Jumat</span>
                  <span>08:00 - 22:00</span>
                </div>
                <div className="flex justify-between text-blue-200">
                  <span>Sabtu</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-blue-200">
                  <span>Minggu & Libur</span>
                  <span>08:00 - 16:00</span>
                </div>
                <div className="mt-4 text-sm text-cyan-400 font-semibold">
                  * Layanan Darurat 24 Jam Tersedia
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-blue-400">
            <p>
              &copy; {new Date().getFullYear()} PT. PROSTLINE INDONESIA. Semua
              hak dilindungi.
            </p>
            <p className="text-sm mt-2">
              Terima kasih atas kepercayaan Anda kepada kami.
            </p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() =>
          sendWhatsApp("Halo, saya ingin konsultasi tentang service AC")
        }
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all z-50 group"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Konsultasi Gratis
        </div>
      </button>

      {/* Modal Image Detail */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <div
                className={`w-full h-64 flex items-center justify-center rounded-lg ${
                  selectedImage.category === "before"
                    ? "bg-red-100"
                    : "bg-green-100"
                }`}
              >
                <span
                  className={`text-2xl font-bold ${
                    selectedImage.category === "before"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {selectedImage.category === "before"
                    ? "CONTOH SEBELUM SERVICE"
                    : "CONTOH SETELAH SERVICE"}
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-center">
                Contoh hasil kerja{" "}
                {selectedImage.category === "before" ? "sebelum" : "setelah"}{" "}
                dilakukan service oleh tim profesional kami
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

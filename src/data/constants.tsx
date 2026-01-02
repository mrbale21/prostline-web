// src/data/constants.ts
import {
  Settings,
  Droplets,
  Wrench,
  TrendingUp,
  Users,
  Zap,
  Award,
  Clock,
  Shield,
  CheckCircle,
  Star,
} from "lucide-react";
import type {
  Benefit,
  GalleryImage,
  Package,
  PriceItem,
  Service,
  Testimonial,
} from "../types";

export const services: Service[] = [
  {
    icon: <Settings />,
    title: "Service AC",
    desc: "Perawatan rutin AC rumah dan kantor untuk performa optimal",
  },
  {
    icon: <Droplets />,
    title: "Cuci AC",
    desc: "Pembersihan menyeluruh komponen AC hingga bersih maksimal",
  },
  {
    icon: <Wrench />,
    title: "Perbaikan AC",
    desc: "Diagnosa dan perbaikan kerusakan AC dengan teknisi profesional",
  },
  {
    icon: <TrendingUp />,
    title: "Bongkar Pasang AC",
    desc: "Instalasi dan relokasi AC dengan aman dan profesional",
  },
  {
    icon: <Users />,
    title: "Maintenance Gedung",
    desc: "Perawatan sistem AC gedung dan kantor secara berkala",
  },
  {
    icon: <Zap />,
    title: "Service Cepat",
    desc: "Layanan darurat AC 24 jam untuk kebutuhan mendesak",
  },
];

export const benefits: Benefit[] = [
  {
    icon: <Users className=" text-white/80 " />,
    title: "Teknisi Berpengalaman",
    desc: "Tim profesional dengan sertifikasi resmi",
  },
  {
    icon: <Award className=" text-white/80 " />,
    title: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi",
  },
  {
    icon: <Clock className=" text-white/80 " />,
    title: "Respon Cepat",
    desc: "Siap datang dalam 2-4 jam",
  },
  {
    icon: <Shield className=" text-white/80 " />,
    title: "Bergaransi",
    desc: "Garansi service hingga 30 hari",
  },
  {
    icon: <CheckCircle className=" text-white/80 " />,
    title: "Sparepart Berkualitas",
    desc: "Menggunakan parts original dan terjamin",
  },
  {
    icon: <Star className=" text-white/80 " />,
    title: "Kepuasan Pelanggan",
    desc: "Rating 4.9/5 dari 500+ pelanggan",
  },
];

export const packages: Package[] = [
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

export const priceList: PriceItem[] = [
  { service: "Cuci AC 0.5 - 1 PK", price: "Rp 75.000" },
  { service: "Cuci AC 1.5 - 2 PK", price: "Rp 100.000" },
  { service: "Service AC + Isi Freon", price: "Rp 250.000" },
  { service: "Bongkar AC", price: "Rp 150.000" },
  { service: "Pasang AC", price: "Rp 250.000" },
  { service: "Perbaikan Ringan", price: "Rp 200.000" },
  { service: "Perbaikan Berat", price: "Rp 500.000" },
  { service: "Maintenance Bulanan", price: "Rp 1.500.000" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    company: "PT. Maju Jaya",
    rating: 5,
    text: "Pelayanan sangat profesional dan cepat. AC di kantor kami jadi dingin maksimal lagi!",
    avatarUrl: "/assets/images/testi2.jpg",
  },
  {
    name: "Siti Nurhaliza",
    company: "Rumah Pribadi",
    rating: 5,
    text: "Teknisinya ramah dan berpengalaman. Harga juga sangat terjangkau. Recommended!",
    avatarUrl: "/assets/images/testi.jpg",
  },
  {
    name: "Ahmad Fauzi",
    company: "Hotel Bintang Lima",
    rating: 5,
    text: "Sudah langganan untuk maintenance AC hotel. Selalu tepat waktu dan hasil memuaskan.",
    avatarUrl: "/assets/images/testi3.jpg",
  },
];

export const gallery: GalleryImage[] = [
  {
    id: 1,
    title: "Service AC Rumah",
    description: "AC rumah yang membutuhkan perawatan rutin",
    imageUrl: "/assets/images/ac.jpg",
    serviceDetails: [
      "Pembersihan evaporator & filter",
      "Cek tekanan freon",
      "Pengecekan kelistrikan",
    ],
    duration: "± 2 Jam",
    location: "Rumah Tinggal",
  },
  {
    id: 2,
    title: "Hasil Cuci AC",
    description: "AC bersih setelah proses cuci menyeluruh",
    imageUrl: "/assets/images/ac2.jpg",
    serviceDetails: [
      "Cuci indoor & outdoor",
      "Pembersihan saluran pembuangan",
      "Test dingin maksimal",
    ],
    duration: "± 2–3 Jam",
    location: "Perumahan",
  },
  {
    id: 3,
    title: "Instalasi AC Kantor",
    description: "Proses instalasi AC di ruangan kantor",
    imageUrl: "/assets/images/ac3.jpg",
    serviceDetails: [
      "Pemasangan unit indoor & outdoor",
      "Vacuum instalasi",
      "Testing & finishing",
    ],
    duration: "± 3 Jam",
    location: "Kantor",
  },
  {
    id: 4,
    title: "Maintenance AC Gedung",
    description: "Perawatan rutin sistem AC pada gedung bertingkat",
    imageUrl: "/assets/images/ac4.jpg",
    serviceDetails: [
      "Pembersihan unit indoor & outdoor",
      "Pengecekan jalur pipa",
      "Pengukuran arus listrik",
    ],
    duration: "± 4 Jam",
    location: "Gedung Perkantoran",
  },
  {
    id: 5,
    title: "Perbaikan AC Tidak Dingin",
    description: "AC bermasalah dan tidak mengeluarkan udara dingin",
    imageUrl: "/assets/images/wash2.jpg",
    serviceDetails: [
      "Cek kebocoran freon",
      "Perbaikan komponen bermasalah",
      "Pengisian freon sesuai standar",
    ],
    duration: "± 2 Jam",
    location: "Rumah & Ruko",
  },
  {
    id: 6,
    title: "Cuci AC Apartemen",
    description: "Pembersihan AC unit apartemen secara menyeluruh",
    imageUrl: "/assets/images/wash.jpg",
    serviceDetails: [
      "Cuci evaporator & blower",
      "Pembersihan filter udara",
      "Test performa pendinginan",
    ],
    duration: "± 2 Jam",
    location: "Apartemen",
  },
];

export const heroImages = [
  {
    id: 1,
    title: "Service AC Profesional",
    description: "Tim teknisi bersertifikat siap melayani Anda",
    imageUrl: "/assets/images/ac.jpg",
    category: "service",
  },
  {
    id: 2,
    title: "Perawatan AC Berkala",
    description: "Maintenance rutin untuk performa optimal",
    imageUrl: "/assets/images/ac2.jpg",
    category: "maintenance",
  },
  {
    id: 3,
    title: "Instalasi & Bongkar Pasang",
    description: "Instalasi profesional dengan garansi",
    imageUrl: "/assets/images/ac3.jpg",
    category: "installation",
  },
  {
    id: 4,
    title: "Emergency Service 24/7",
    description: "Layanan darurat kapan saja Anda butuhkan",
    imageUrl: "/assets/images/wash2.jpg",
    category: "emergency",
  },
];

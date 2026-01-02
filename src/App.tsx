// src/App.tsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import {
  services,
  benefits,
  packages,
  priceList,
  testimonials,
  gallery,
} from "./data/constants";
import type { GalleryImage } from "./types";
import { sendWhatsApp } from "./utils/helpers";
import FloatingWhatsApp from "./components/WhatsAppButton";
import ImageModal from "./components/ImageModal";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans">
      <Navbar scrolled={scrolled} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} sendWhatsApp={sendWhatsApp} />
      <About benefits={benefits} />
      <Services services={services} />
      {/* <Benefits benefits={benefits} /> */}
      <Statistics />
      <Packages
        packages={packages}
        priceList={priceList}
        sendWhatsApp={sendWhatsApp}
      />
      <Gallery gallery={gallery} setSelectedImage={setSelectedImage} />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <FloatingWhatsApp sendWhatsApp={sendWhatsApp} />
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default App;

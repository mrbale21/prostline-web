// src/components/Navbar.tsx
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  scrolled: boolean;
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrolled, scrollToSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "beranda",
    "tentang",
    "layanan",
    "keunggulan",
    "paket",
    "galeri",
    "testimoni",
    "kontak",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-linear-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl md:text-2xl font-bold bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              FROSTLINE
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 transition-colors font-medium capitalize`}
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
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

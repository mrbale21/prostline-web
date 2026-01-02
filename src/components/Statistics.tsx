import { useEffect, useState } from "react";

const Statistics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  });

  // Animation timing untuk counter
  useEffect(() => {
    const targets = {
      projects: 500,
      clients: 300,
      years: 3,
      satisfaction: 98,
    };
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setCounters({
        projects: Math.min(
          Math.floor(progress * targets.projects),
          targets.projects
        ),
        clients: Math.min(
          Math.floor(progress * targets.clients),
          targets.clients
        ),
        years: Math.min(Math.floor(progress * targets.years), targets.years),
        satisfaction: Math.min(
          Math.floor(progress * targets.satisfaction),
          targets.satisfaction
        ),
      });

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-linear-to-r from-blue-600 via-blue-500 to-cyan-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `radial-linear(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Stats Grid - Responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Stat 1 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20 hover:border-white/30">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 text-white">
              {counters.projects.toLocaleString()}
              <span className="text-blue-200">+</span>
            </div>
            <div className="text-blue-100 font-semibold text-sm sm:text-base md:text-lg">
              AC Diservice
            </div>
            <div className="mt-2 sm:mt-3 text-blue-100/70 text-xs sm:text-sm">
              Proyek terselesaikan
            </div>
          </div>

          {/* Stat 2 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20 hover:border-white/30">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 text-white">
              {counters.clients.toLocaleString()}
              <span className="text-blue-200">+</span>
            </div>
            <div className="text-blue-100 font-semibold text-sm sm:text-base md:text-lg">
              Pelanggan Puas
            </div>
            <div className="mt-2 sm:mt-3 text-blue-100/70 text-xs sm:text-sm">
              Dari berbagai kota
            </div>
          </div>

          {/* Stat 3 - Break column di mobile kecil */}
          <div className="sm:col-span-1 group bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20 hover:border-white/30">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 text-white">
              {counters.years}
              <span className="text-blue-200">+</span>
            </div>
            <div className="text-blue-100 font-semibold text-sm sm:text-base md:text-lg">
              Tahun Pengalaman
            </div>
            <div className="mt-2 sm:mt-3 text-blue-100/70 text-xs sm:text-sm">
              Di industri HVAC
            </div>
          </div>

          {/* Stat 4 */}
          <div className=" sm:col-span-1 group bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20 hover:border-white/30">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 text-white">
              {counters.satisfaction}
              <span className="text-blue-200">%</span>
            </div>
            <div className="text-blue-100 font-semibold text-sm sm:text-base md:text-lg">
              Tingkat Kepuasan
            </div>
            <div className="mt-2 sm:mt-3 text-blue-100/70 text-xs sm:text-sm">
              Garansi kepuasan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

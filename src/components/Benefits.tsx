import type { Benefit } from "../types";

interface BenefitsProps {
  benefits: Benefit[];
}

const Benefits = ({ benefits }: BenefitsProps) => {
  return (
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
  );
};

export default Benefits;

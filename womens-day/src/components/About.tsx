import { WomenSymbolFilled } from "./WomenSymbol";
import { Heart } from "lucide-react";

const acupunctureImages = [
  {
    url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Relaxing",
    title: "Relaxing",
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    alt: "Acupuncture Therapy Session",
    title: "Holistic Healing",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ruby-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blush-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ruby-50 border border-ruby-100 rounded-full text-sm font-medium text-ruby-700 mb-4">
            <span>♀</span> About Us <span>♀</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-gray-900 tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-ruby-600 to-ruby-500 bg-clip-text text-transparent">
              Ruby Wellness Center
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
            A dedicated acupuncture clinic focused on women's health, pain relief, and holistic balance in Gobichettipalayam.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left - Visual Images */}
          <div className="grid grid-cols-2 gap-6 relative">
            {acupunctureImages.map((img, idx) => (
              <div key={idx} className={`flex flex-col gap-4 ${idx % 2 === 1 ? 'mt-12' : ''}`}>
                <div className="overflow-hidden rounded-3xl shadow-2xl border-8 border-white aspect-[3/4] transition-all duration-500 hover:rotate-2">
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </div>
                <div className="bg-ruby-50 border border-ruby-100 p-3 rounded-2xl shadow-sm">
                  <p className="text-xs font-black text-ruby-800 uppercase tracking-widest text-center">{img.title}</p>
                </div>
              </div>
            ))}
            {/* Small floating women symbol decoration */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-30 hidden xl:block pointer-events-none">
              <WomenSymbolFilled size={160} />
            </div>
          </div>

          {/* Right - Text */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-6">
              Your Trusted{" "}
              <span className="text-ruby-600">Acupuncture Clinic</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Ruby Wellness Center, we help you heal naturally and live with balance. Specializing in Six-Qi Healing, Reiki, Bach Flower Remedies, Essential Oils, Color Therapy, and Acupressure, we provide holistic wellness solutions that address the root cause of stress, emotional imbalance, and physical discomfort.
              </p>
              <p>
                Our approach blends ancient wisdom with modern practices to support stress relief, emotional balance, pain management, and personalized therapy sessions. We are your trusted partner for wellness and healing in Gobichettipalayam.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-ruby-600 to-ruby-700 rounded-full shadow-lg shadow-ruby-500/25 hover:shadow-ruby-500/40 hover:scale-105 transition-all duration-300"
              >
                <Heart className="h-4 w-4" />
                Visit Us on JustDial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

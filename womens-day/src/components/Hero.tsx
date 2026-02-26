import { WomenSymbol } from "./WomenSymbol";
import { ArrowRight } from "lucide-react";

function FloatingPetal({ delay, left, size }: { delay: number; left: string; size: number }) {
  return (
    <div
      className="absolute top-0 animate-petal-fall opacity-60 pointer-events-none"
      style={{
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${8 + Math.random() * 6}s`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
        <ellipse cx="15" cy="10" rx="8" ry="10" fill="#FDA4AF" opacity="0.6" transform="rotate(25 15 10)" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ruby-50 via-blush-50 to-white" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-ruby-100/40 to-blush-200/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-blush-100/40 to-ruby-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Falling Petals */}
      <FloatingPetal delay={0} left="10%" size={20} />
      <FloatingPetal delay={2} left="25%" size={16} />
      <FloatingPetal delay={4} left="45%" size={22} />
      <FloatingPetal delay={1} left="65%" size={18} />
      <FloatingPetal delay={3} left="80%" size={20} />
      <FloatingPetal delay={5} left="90%" size={14} />
      <FloatingPetal delay={6} left="5%" size={18} />
      <FloatingPetal delay={2.5} left="55%" size={16} />

      {/* Decorative Women Symbols */}
      <div className="absolute top-24 left-8 sm:left-16 opacity-10 animate-float-slow">
        <WomenSymbol size={80} color="#E11D48" />
      </div>
      <div className="absolute bottom-24 right-8 sm:right-16 opacity-10 animate-float animation-delay-1000">
        <WomenSymbol size={100} color="#BE123C" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-5 animate-spin-slow hidden lg:block">
        <WomenSymbol size={150} color="#F43F5E" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="text-center max-w-5xl mx-auto">
          {/* Women's Day Badge */}
          <div className="animate-fade-in-down inline-flex items-center gap-2 px-5 py-2.5 bg-ruby-50 border border-ruby-200 rounded-full text-sm font-medium text-ruby-700 mb-6 sm:mb-8 shadow-sm">
            <span className="text-lg">✿</span>
            <span>International Women's Day 2026</span>
            <span className="text-lg">✿</span>
          </div>

          {/* Main Acupuncture Hero Image */}
          <div className="animate-scale-in animation-delay-200 flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-ruby-400 to-blush-300 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-2 bg-white shadow-2xl overflow-hidden">
                <img 
                  src="logo.jpg" 
                  alt="Acupuncture Treatment" 
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Small women symbol beside */}
              <div className="absolute -right-8 top-4 animate-bounce-gentle z-20 bg-white/80 p-2 rounded-full backdrop-blur-sm shadow-lg">
                <WomenSymbol size={32} color="#E11D48" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up animation-delay-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif tracking-tight text-gray-900 leading-[1.1]">
            Ruby Wellness Center
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Acupuncture Clinic</span>
            <br />
            <span className="bg-gradient-to-r from-ruby-700 via-ruby-500 to-blush-400 bg-clip-text text-transparent">
              Gobichettipalayam, Tamil Nadu
            </span>
          </h1>

          {/* Inspiring Quote */}
          <div className="animate-fade-in-up animation-delay-500 mt-8 sm:mt-10 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-cursive text-ruby-600 leading-relaxed">
              "Healing begins the moment balance is restored — gently, naturally, and with care."
            </p>
            <p className="mt-3 text-sm sm:text-base text-ruby-400 font-medium">— Ruby Wellness Center</p>
          </div>

          {/* Subtitle */}
          <p className="animate-fade-in-up animation-delay-600 mt-6 sm:mt-8 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-ruby-700">Ruby Wellness Center</span> is a dedicated
            <span className="font-semibold text-ruby-600"> acupuncture clinic</span> in Gobichettipalayam, Tamil Nadu —
            supporting women with gentle, natural pain relief, stress reduction, and holistic balance.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-700 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-ruby-600 to-ruby-700 rounded-full shadow-xl shadow-ruby-500/25 hover:shadow-ruby-500/40 hover:scale-105 transition-all duration-300"
            >
              Visit Our Clinic on JustDial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

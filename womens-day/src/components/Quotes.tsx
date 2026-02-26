import { WomenSymbol } from "./WomenSymbol";

export function Quotes() {
  return (
    <section id="quotes" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ruby-800 via-ruby-900 to-ruby-950" />
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="quotePattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#quotePattern)" />
        </svg>
      </div>

      {/* Decorative women symbols */}
      <div className="absolute top-16 left-8 opacity-10 animate-float-slow">
        <WomenSymbol size={100} color="#FFF" />
      </div>
      <div className="absolute bottom-16 right-8 opacity-10 animate-float animation-delay-2000">
        <WomenSymbol size={80} color="#FFF" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-ruby-200 mb-4 backdrop-blur-sm">
            ♀ உந்துதல் ♀
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            பெண்களின்{" "}
            <span className="bg-gradient-to-r from-ruby-300 to-blush-300 bg-clip-text text-transparent">
              நலனுக்கான சொற்கள்
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-ruby-200 leading-relaxed">
            குணமடைதல், சமநிலை மற்றும் உள்ளார்ந்த வலிமையை ஊக்குவிக்கும் மென்மையான நினைவூட்டல்கள்.
          </p>
        </div>

        {/* Featured large quote */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-ruby-600/20 to-blush-500/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-ruby-500 to-blush-500 rounded-full p-3 shadow-lg animate-heartbeat">
                <span className="text-2xl">♀</span>
              </div>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-cursive text-white leading-relaxed">
              “அக்கறையும், பொறுமையும், உடலின் இயற்கை அறிவும் சேர்ந்தால்தான் உண்மையான குணமடைதல் நடைபெறுகிறது.”
            </p>
            <p className="mt-4 text-ruby-300 font-medium">
              — Ruby Wellness Center
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
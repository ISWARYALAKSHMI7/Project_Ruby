import { WomenSymbolFilled } from "./WomenSymbol";
import { Heart } from "lucide-react";

const acupunctureImages = [
  {
    url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "ஓய்வு",
    title: "மன அமைதி",
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    alt: "அக்குபங்சர் சிகிச்சை அமர்வு",
    title: "முழுமையான நலன்",
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
            <span>♀</span> எங்களை பற்றி <span>♀</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-gray-900 tracking-tight">
            RUBY {" "}
            <span className="bg-gradient-to-r from-ruby-600 to-ruby-500 bg-clip-text text-transparent">
              WELLNESS CENTER
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
            கோபிச்செட்டிபாளையத்தில் பெண்களின் ஆரோக்கியம், வலி நிவாரணம் மற்றும்
            முழுமையான நலனுக்காக அர்ப்பணிக்கப்பட்ட அக்குபங்சர் சிகிச்சை மையம்.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left - Visual Images */}
          <div className="grid grid-cols-2 gap-6 relative">
            {acupunctureImages.map((img, idx) => (
              <div key={idx} className={`flex flex-col gap-4 ${idx % 2 === 1 ? "mt-12" : ""}`}>
                <div className="overflow-hidden rounded-3xl shadow-2xl border-8 border-white aspect-[3/4] transition-all duration-500 hover:rotate-2">
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </div>
                <div className="bg-ruby-50 border border-ruby-100 p-3 rounded-2xl shadow-sm">
                  <p className="text-xs font-black text-ruby-800 uppercase tracking-widest text-center">
                    {img.title}
                  </p>
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
              உங்கள் நம்பிக்கையான{" "}
              <span className="text-ruby-600">அக்குபங்சர் சிகிச்சை மையம்</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                ரூபி வெல்ல்நெஸ் சென்டரில், இயற்கை முறையில் உடலும் மனமும்
                ஆரோக்கியமாக இருக்க நாங்கள் உதவுகிறோம். சிக்ஸ்-கீ ஹீலிங்,
                பாக் பிளவர் ரெமிடீஸ், எசென்ஷியல் ஆயில்ஸ், கலர் தெரபி மற்றும்
                அகுபிரஷர் போன்ற சிகிச்சைகள் மூலம் மன அழுத்தம், உணர்ச்சி சமநிலை
                மற்றும் உடல் வலிகளின் அடிப்படை காரணங்களை சரி செய்கிறோம்.
              </p>
              <p>
                பழமையான அறிவையும் நவீன சிகிச்சை முறைகளையும் இணைத்து,
                மனஅமைதி, வலி நிவாரணம் மற்றும் தனிப்பட்ட தேவைக்கேற்ற
                சிகிச்சை அமர்வுகளை வழங்குகிறோம். கோபிச்செட்டிபாளையத்தில்
                உங்கள் ஆரோக்கிய பயணத்திற்கு நாங்கள் உங்கள் நம்பிக்கையான துணை.
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
                Just Dial-ல் எங்களை பாருங்கள்
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
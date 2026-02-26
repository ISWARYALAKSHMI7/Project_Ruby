import { Heart } from "lucide-react";
import { WomenSymbol } from "./WomenSymbol";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-ruby-950 to-gray-950 text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-ruby-500 via-blush-500 to-ruby-600" />

      {/* Background women symbol */}
      <div className="absolute bottom-10 right-10 opacity-5">
        <WomenSymbol size={200} color="#FFF" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8 text-center">
            {/* Brand */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <a href="#home" className="flex items-center gap-3 group">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-ruby-400 group-hover:border-ruby-300 transition-colors shadow-lg">
                  <img src="/logo.jpg" alt="Ruby Wellness Center" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xl font-bold font-serif text-white leading-tight">
                    Ruby Wellness
                  </span>
                  <span className="text-[10px] font-medium text-ruby-300 tracking-widest uppercase">
                    Center
                  </span>
                </div>
              </a>
              <p className="mt-4 text-ruby-200/60 text-sm leading-relaxed max-w-xs">
                A women-focused acupuncture clinic in Gobichettipalayam, dedicated to natural pain relief, balance, and wellbeing.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-ruby-400">♀</span>
                <span className="text-xs text-ruby-300 font-medium">Women-Centered Acupuncture Care</span>
                <span className="text-ruby-400">♀</span>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-serif">
                Visit Us
              </h4>
              <div className="space-y-3 text-sm text-ruby-200/60">
                <p>Gandhi Nagar</p>
                <p>Gobichettipalayam</p>
                <p>Tamil Nadu, India</p>
                <p className="text-ruby-300 font-medium">Mon - Sat: 9AM - 8PM</p>
              </div>
              <a
                href="https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-ruby-600 hover:bg-ruby-500 text-white text-xs font-semibold rounded-full transition-colors"
              >
                Find Us on JustDial →
              </a>
            </div>
          </div>
        </div>

        {/* Women's Day Message */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-lg sm:text-xl font-cursive text-ruby-300 mb-3">
            "Wishing all the incredible women a very Happy Women's Day! 🌸"
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-ruby-200/40">
            <span>© {new Date().getFullYear()} Ruby Wellness Center. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3.5 w-3.5 text-ruby-500 fill-ruby-500" /> for Women's Day
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

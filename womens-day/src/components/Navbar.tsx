import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Inspiration", href: "#quotes" },
  { label: "Gallery", href: "#gallery" },
];


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-ruby-500/5 border-b border-ruby-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border-2 border-ruby-200 group-hover:border-ruby-400 transition-all duration-300 shadow-md">
              <img src="/logo.jpg" alt="Ruby Wellness Center" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold font-serif bg-gradient-to-r from-ruby-700 to-ruby-500 bg-clip-text text-transparent leading-tight">
                Ruby Wellness
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-ruby-400 tracking-widest uppercase">
                Center
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-ruby-600 rounded-lg hover:bg-ruby-50 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-ruby-600 to-ruby-700 rounded-full shadow-lg shadow-ruby-500/25 hover:shadow-ruby-500/40 hover:scale-105 transition-all duration-300"
            >
              Visit Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-ruby-600 hover:bg-ruby-50 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-ruby-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-ruby-600 hover:bg-ruby-50 rounded-xl transition-all duration-200 text-center"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-ruby-600 to-ruby-700 rounded-full shadow-lg"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

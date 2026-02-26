const acupunctureGallery = [
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    title: "Precision Acupuncture",
  },
  {
    url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Acupuncture Needles Close Up",
  },
  {
    url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Traditional",
  },
  {
    url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cupping Therapy",
  },
  {
    url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    title: "Relaxing",
  }
  
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-ruby-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blush-50/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ruby-50 border border-ruby-100 rounded-full text-sm font-medium text-ruby-700 mb-4">
            🌸 Clinical Gallery 🌸
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-gray-900 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-ruby-600 to-blush-500 bg-clip-text text-transparent">
              Acupuncture Clinic
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
            Take a look at our clinical environment and specialized acupuncture treatments in Gobichettipalayam.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {acupunctureGallery.map((item, idx) => (
            <div
              key={idx}
              className="relative group break-inside-avoid rounded-3xl overflow-hidden border-4 border-ruby-100 shadow-md hover:shadow-xl transition-all duration-500 hover:border-ruby-300 bg-white p-3"
            >
              <div className="rounded-2xl overflow-hidden aspect-square sm:aspect-auto">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-900 font-serif text-lg font-bold">{item.title}</p>
                <div className="mt-1 h-1 w-10 bg-ruby-500 mx-auto rounded-full" />
              </div>
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-ruby-600 uppercase tracking-widest shadow-sm border border-ruby-100">
                Ruby Wellness
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a
            href="https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-ruby-600 rounded-full hover:bg-ruby-700 transition-all hover:scale-105 shadow-xl shadow-ruby-500/20"
          >
            Experience It Personally →
          </a>
        </div>
      </div>
    </section>
  );
}

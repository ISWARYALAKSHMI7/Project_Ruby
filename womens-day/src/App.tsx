import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Quotes } from "./components/Quotes";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quotes />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

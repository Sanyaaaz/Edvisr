import { Sparkle } from "lucide-react";
import Features from "./components/Features";
import FloatingIcons from "./components/Floating-icons";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/Howitworks";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">

  {/* Sparkles behind everything */}
  <div className="pointer-events-none fixed inset-0 z-0 opacity-10">
    <Sparkle />
  </div>

  {/* Main content with black background */}
  <div className="relative z-10">
    <FloatingIcons />
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <Footer />
  </div>

</main>

  

  );
}

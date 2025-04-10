"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = (id: string) => {
    if (typeof window === "undefined") return;

    // Clear any pending scroll attempts
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Element with id ${id} not found`);
        return;
      }

      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      // Check if element is already in view (with threshold)
      const viewportThreshold = window.innerHeight * 0.3;
      const isAlreadyVisible = 
        elementPosition >= navbarHeight && 
        elementPosition <= viewportThreshold;

      if (!isAlreadyVisible) {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100); // Slight delay to ensure DOM stability
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
                Edvisr
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handleScroll("features")}
                className="hover:text-purple-400"
              >
                Features
              </button>
              <button
                onClick={() => handleScroll("how-it-works")}
                className="hover:text-purple-400"
              >
                How it Works
              </button>
              <button
                onClick={() => handleScroll("examples")}
                className="hover:text-purple-400"
              >
                Examples
              </button>
              <Link href="/pricingpage" className="hover:text-purple-400">
                Pricing
              </Link>
              {/* <Link href="/signin" className="text-white hover:text-purple-100">
                Sign In
              </Link>
              <Link href="/get-started">
                <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                  Get Started
                </button>
              </Link> */}
              <div className="hidden md:flex items-center space-x-4">
        <Link href="/auth">
          <Button variant="ghost" className="text-white hover:text-purple-400">
            Sign In
          </Button>
        </Link>
        <Link href="/auth">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
        </Link>
      </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
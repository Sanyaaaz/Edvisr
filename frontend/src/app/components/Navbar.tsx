"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
              Edvisr
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400">Features</a>
              <a href="#how-it-works" className="hover:text-purple-400">How it Works</a>
              <a href="#examples" className="hover:text-purple-400">Examples</a>

              {/* Updated Pricing link to go to /pricing route */}
              <Link href="/pricingpage" className="hover:text-purple-400">Pricing</Link>

              <Link href="/signin" className="text-white hover:text-purple-100">Sign In</Link>
              <Link href="/get-started">
                <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

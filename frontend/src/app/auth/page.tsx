"use client";

import AuthForm from "../components/auth-form";
import { SparklesCore } from "../components/Sparkles";
import Link from "next/link";
import { Bot } from "lucide-react";
import Navbar from "../components/Navbar";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col items-center p-4">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="particles-auth" 
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      {/* Navbar at the top */}
      <div className="w-full z-100">
        <Navbar />
      </div>

      {/* Centered content container with increased top margin */}
      <div className="relative z-10 w-full max-w-md mt-32 flex flex-col items-center"> {/* Changed mt-10 to mt-32 */}
        <div className="mb-8 flex justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="w-10 h-10 text-purple-500" />
            <span className="text-white font-medium text-2xl">Edvisr</span>
          </Link>
        </div> 

        <AuthForm />

        <div className="mt-8 text-center text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
import { SparklesCore } from "../components/Sparkles";
import QuizGenerator from "../components/quiz-generator";
import WhatIfGenerator from "../components/what-if-generator";
import Sidebar from "../components/Sidebar";

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen">
        
        {/* Sidebar */}
        <div className="w-64 shrink-0 border-r border-gray-700 relative z-20">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-y-auto relative z-10">
          <div className="container mx-auto px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Generate
              </span>{" "}
              Quiz
            </h1>

            <div className="space-y-8">
              <QuizGenerator />
              <WhatIfGenerator />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

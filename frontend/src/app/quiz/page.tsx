import { SparklesCore } from "../components/Sparkles";
import QuizGenerator from "../components/quiz-generator";
import WhatIfGenerator from "../components/what-if-generator";
import Sidebar from "../components/Sidebar"; // Assuming you have a Sidebar component

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
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

      <div className="relative z-10 flex">
        {/* Sidebar wrapped with border */}
        <div className="w-1/5.2 border-r border-gray-700">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-[80.77%] p-4 h-screen overflow-y-scroll">
          <div className="container mx-auto px-8 py-12 ">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Generate
              </span>{" "}
              Quiz
            </h1>

            {/* Stacked Layout for QuizGenerator and WhatIfGenerator */}
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

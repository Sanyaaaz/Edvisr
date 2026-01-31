"use client";

import { SparklesCore } from "./Sparkles";

export default function ClientSparkles() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <SparklesCore
        background="transparent"
        particleColor="#ffffff"
        minSize={1}
        maxSize={3}
        particleDensity={100}
        speed={1}
        className="w-full h-full"
      />
    </div>
  );
}

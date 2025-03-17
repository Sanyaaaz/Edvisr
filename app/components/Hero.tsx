"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-primary text-white px-6">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        AI-Powered Teaching Assistant
      </motion.h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl">
        Smart automation, real-time analytics & AI-driven insights for teachers.
      </p>
      <Link href="/auth">
        <motion.button
          className="mt-6 bg-accent text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-purple-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Start for Free
        </motion.button>
      </Link>
    </section>
  );
};

export default Hero;

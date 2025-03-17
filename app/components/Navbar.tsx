"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-primary p-5 flex justify-between items-center shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h1 className="text-3xl text-white font-bold">Edvisr</h1>
      <div className="space-x-6">
        <Link href="#features">
          <span className="text-lg text-white cursor-pointer hover:text-accent transition">
            Features
          </span>
        </Link>
        <Link href="#about">
          <span className="text-lg text-white cursor-pointer hover:text-accent transition">
            About us
          </span>
        </Link>
        <Link href="/auth">
          <button className="text-lg bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-purple-600">
            Get Started
          </button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;

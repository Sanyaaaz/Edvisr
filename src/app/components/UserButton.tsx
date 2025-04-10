"use client";

import {
  useUser,
  useClerk,
  SignedIn,
} from "@clerk/nextjs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CustomUserButton() {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <SignedIn>
      <div className="relative z-50">
        {/* Avatar Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full ring-2 ring-purple-500 overflow-hidden w-10 h-10"
        >
          <Image
            src={user.imageUrl}
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-64 bg-black text-white border border-gray-900 rounded-b-lg shadow-xl p-4 backdrop-blur-lg"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={user.imageUrl}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{user.fullName}</p>
                  <p className="text-sm text-gray-400">{user.primaryEmailAddress?.emailAddress}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <button
                  onClick={() => {
                    openUserProfile();
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-600 transition"
                >
                  Profile
                </button>

                <Link href="/dashboard">
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-600 transition"
                  >
                    Dashboard
                  </button>
                </Link>

                <button
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-600 transition text-white"
                >
                  Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SignedIn>
  );
}
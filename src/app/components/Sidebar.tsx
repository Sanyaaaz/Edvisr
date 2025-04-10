"use client"

import React from "react";
import { MessageCircle, Calendar, FileText, Users, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import {
  useUser,
  useClerk,
  SignedIn,
} from "@clerk/nextjs";
import { useState } from "react";

export default function Sidebar() {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="h-screen w-64  text-white flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="p-6 text-xl font-semibold border-b border-purple-600">
          Edvisr
        </div>
        <ul className="mt-6 space-y-4 px-4">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <AiOutlineAppstoreAdd size={20} />
            <Link href='dashboard'><span>Dashboard</span></Link>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <MessageCircle size={20} />
            <Link href="/quiz">
              <span>Quiz</span>
            </Link>
          </li>


          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <Calendar size={20} />
            <span>Schedule</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <HiOutlineChartBar size={20} />
            <span>Insights</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <FileText size={20} />
            <span>Suggestions</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <Users size={20} />
            <span>Discussion</span>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <ul className="mb-6 px-4">
        <button
          onClick={() => {
            openUserProfile();
            setOpen(false);
          }}
          className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Profile
        </button>
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
          <Settings size={20} />
          <span>Settings</span>
        </li>

        <button
          onClick={() => {
            signOut();
            setOpen(false);
          }}
          className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-600 transition text-white"
        >
          Sign Out
        </button>
      </ul>
    </div>
  );
};



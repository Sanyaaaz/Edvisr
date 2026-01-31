"use client";

import React from "react";
import Sidebar from "../components/Sidebar";

const MainPanel = () => {
  return (
    <div className="flex h-screen w-screen bg-black overflow-hidden">

      {/* Sidebar */}
      <div className="w-64 shrink-0 border-r border-gray-700 relative z-20">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto relative z-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 text-sm">
              Wednesday, March 26, 2025
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Class Schedule */}
          <div className="lg:col-span-2 bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
              Today’s Schedule
            </h2>
            <div className="space-y-4">
              {[
                { title: "Design Thinking", time: "08:00 - 09:30", students: 43 },
                { title: "Illustration Practice", time: "10:00 - 11:30", students: 32 },
                { title: "UI Heuristics", time: "12:00 - 13:30", students: 29 },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#2A2A33] border-l-4 border-[#8B79F9]"
                >
                  <div className="font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.time} · {item.students} Students
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
              Student Assignments
            </h2>
            <div className="space-y-4">
              <div className="bg-[#3A2F1F] p-4 rounded-lg border-l-4 border-pink-500">
                <h3 className="font-semibold text-white">
                  Create a landing page in Figma
                </h3>
                <p className="text-sm text-gray-400">Due: Tomorrow</p>
                <p className="text-xs mt-1 text-gray-500">
                  Assigned to 34 students
                </p>
              </div>

              <div className="bg-[#1F332C] p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-white">
                  Revise UI Heuristics
                </h3>
                <p className="text-sm text-gray-400">Due: Friday</p>
                <p className="text-xs mt-1 text-gray-500">
                  Assigned to 29 students
                </p>
              </div>
            </div>
          </div>

          {/* Online Courses & Announcements */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-8 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
                My Online Course
              </h2>
              <div className="space-y-3">
                <div className="bg-[#2B2B33] p-3 rounded-lg">
                  <p className="font-medium text-white">UX Foundations</p>
                  <p className="text-sm text-gray-400">
                    5 Modules · 32 Students
                  </p>
                </div>
                <div className="bg-[#2B2B33] p-3 rounded-lg">
                  <p className="font-medium text-white">
                    Product Design 101
                  </p>
                  <p className="text-sm text-gray-400">
                    4 Modules · 28 Students
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
                Announcements
              </h2>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="border-l-4 border-purple-500 pl-3">
                  Design Test shifted to Friday.
                </div>
                <div className="border-l-4 border-pink-500 pl-3">
                  New students added to your Product Design class.
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
              Quick Messages
            </h2>
            <div className="space-y-4">
              {["James", "Tina", "Ravi"].map((name, idx) => (
                <div
                  key={idx}
                  className="bg-[#2B2B33] p-3 rounded-md"
                >
                  <p className="font-medium text-white">{name}</p>
                  <p className="text-sm text-gray-400">
                    “Sorry, I might miss the class today.”
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainPanel;

"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import { Calendar } from "lucide-react";

export default function SchedulePage() {
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
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <Calendar className="w-8 h-8 text-purple-500" />
              Schedule
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Manage your class schedules and appointments
            </p>
          </div>
        </div>

        {/* Schedule Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Schedule */}
          <div className="lg:col-span-2 bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
              This Week's Schedule
            </h2>
            <div className="space-y-4">
              {[
                { day: "Monday", classes: [
                  { title: "Design Thinking", time: "08:00 - 09:30", students: 43 },
                  { title: "Illustration Practice", time: "10:00 - 11:30", students: 32 },
                ]},
                { day: "Tuesday", classes: [
                  { title: "UI Heuristics", time: "12:00 - 13:30", students: 29 },
                  { title: "Product Design", time: "14:00 - 15:30", students: 38 },
                ]},
                { day: "Wednesday", classes: [
                  { title: "Design Thinking", time: "08:00 - 09:30", students: 43 },
                  { title: "UX Foundations", time: "10:00 - 11:30", students: 35 },
                ]},
              ].map((daySchedule, idx) => (
                <div key={idx} className="bg-[#2A2A33] p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-3">{daySchedule.day}</h3>
                  <div className="space-y-2">
                    {daySchedule.classes.map((cls, clsIdx) => (
                      <div key={clsIdx} className="p-3 rounded-lg bg-[#1A1A22] border-l-4 border-[#8B79F9]">
                        <div className="font-medium text-white">{cls.title}</div>
                        <div className="text-sm text-gray-400">
                          {cls.time} · {cls.students} Students
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2B2B33] p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-medium text-white">Design Test</p>
                <p className="text-sm text-gray-400">Friday, March 28</p>
                <p className="text-xs mt-1 text-gray-500">10:00 AM</p>
              </div>
              <div className="bg-[#2B2B33] p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-medium text-white">Parent Meeting</p>
                <p className="text-sm text-gray-400">Monday, March 31</p>
                <p className="text-xs mt-1 text-gray-500">2:00 PM</p>
              </div>
              <div className="bg-[#2B2B33] p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-medium text-white">Workshop</p>
                <p className="text-sm text-gray-400">Wednesday, April 2</p>
                <p className="text-xs mt-1 text-gray-500">3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

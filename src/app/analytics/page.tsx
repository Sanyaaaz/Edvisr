"use client";

import React from "react";
import Sidebar from "../components/Sidebar";

export default function AnalyticsPage() {
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
            <h1 className="text-3xl font-bold text-white">Analytics</h1>
            <p className="text-gray-400 text-sm">
              Track and analyze student performance
            </p>
          </div>
        </div>

        {/* Analytics Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Overview */}
          <div className="lg:col-span-2 bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
              Performance Overview
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#2A2A33] border-l-4 border-[#8B79F9]">
                <div className="font-semibold text-white">
                  Average Score: 85%
                </div>
                <div className="text-sm text-gray-400">
                  Across all classes and assignments
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#2A2A33] border-l-4 border-green-500">
                <div className="font-semibold text-white">
                  Completion Rate: 92%
                </div>
                <div className="text-sm text-gray-400">
                  Students completing assignments on time
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
              Quick Stats
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2B2B33] p-4 rounded-lg">
                <p className="font-medium text-white">Total Students</p>
                <p className="text-2xl font-bold text-purple-400">156</p>
              </div>
              <div className="bg-[#2B2B33] p-4 rounded-lg">
                <p className="font-medium text-white">Active Classes</p>
                <p className="text-2xl font-bold text-purple-400">12</p>
              </div>
              <div className="bg-[#2B2B33] p-4 rounded-lg">
                <p className="font-medium text-white">Assignments</p>
                <p className="text-2xl font-bold text-purple-400">48</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

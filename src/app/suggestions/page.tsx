"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import { FileText, Lightbulb } from "lucide-react";

export default function SuggestionsPage() {
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
              <FileText className="w-8 h-8 text-purple-500" />
              Suggestions
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              AI-powered suggestions to improve your teaching
            </p>
          </div>
        </div>

        {/* Suggestions Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Teaching Suggestions */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9] flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Teaching Improvements
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A33] p-4 rounded-xl border-l-4 border-[#8B79F9]">
                <h3 className="font-semibold text-white mb-2">
                  Interactive Learning Activities
                </h3>
                <p className="text-sm text-gray-400">
                  Consider incorporating more hands-on activities in your Design Thinking class. 
                  Students show higher engagement with practical exercises.
                </p>
              </div>
              <div className="bg-[#2A2A33] p-4 rounded-xl border-l-4 border-pink-500">
                <h3 className="font-semibold text-white mb-2">
                  Break Time Optimization
                </h3>
                <p className="text-sm text-gray-400">
                  Your 90-minute sessions could benefit from a 10-minute break at the 45-minute mark 
                  to maintain student focus and retention.
                </p>
              </div>
              <div className="bg-[#2A2A33] p-4 rounded-xl border-l-4 border-green-500">
                <h3 className="font-semibold text-white mb-2">
                  Visual Aids Enhancement
                </h3>
                <p className="text-sm text-gray-400">
                  Adding more visual examples and diagrams could help students in Illustration Practice 
                  better understand complex concepts.
                </p>
              </div>
            </div>
          </div>

          {/* Student Performance Suggestions */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9] flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Student Support
            </h2>
            <div className="space-y-4">
              <div className="bg-[#2A2A33] p-4 rounded-xl border-l-4 border-[#8B79F9]">
                <h3 className="font-semibold text-white mb-2">
                  Individual Attention Needed
                </h3>
                <p className="text-sm text-gray-400">
                  5 students in UI Heuristics are falling behind. Consider scheduling 
                  one-on-one sessions or providing additional resources.
                </p>
              </div>
              <div className="bg-[#2A2A33] p-4 rounded-xl border-l-4 border-yellow-500">
                <h3 className="font-semibold text-white mb-2">
                  Assignment Difficulty
                </h3>
                <p className="text-sm text-gray-400">
                  Recent assignments show a 15% lower completion rate. You might want to 
                  review the difficulty level or provide more guidance.
                </p>
              </div>
              <div className="bg-[#2A2A33] p-4 rounded-xl border-l-4 border-blue-500">
                <h3 className="font-semibold text-white mb-2">
                  Peer Collaboration
                </h3>
                <p className="text-sm text-gray-400">
                  Encouraging group projects could help struggling students learn from 
                  their peers and improve overall class performance.
                </p>
              </div>
            </div>
          </div>

          {/* Curriculum Suggestions */}
          <div className="lg:col-span-2 bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9] flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Curriculum Enhancements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#2B2B33] p-4 rounded-lg">
                <p className="font-medium text-white">Add Case Studies</p>
                <p className="text-sm text-gray-400 mt-1">
                  Real-world case studies could enhance understanding of design principles
                </p>
              </div>
              <div className="bg-[#2B2B33] p-4 rounded-lg">
                <p className="font-medium text-white">Guest Speakers</p>
                <p className="text-sm text-gray-400 mt-1">
                  Industry professionals could provide valuable insights to students
                </p>
              </div>
              <div className="bg-[#2B2B33] p-4 rounded-lg">
                <p className="font-medium text-white">Updated Resources</p>
                <p className="text-sm text-gray-400 mt-1">
                  Consider updating reading materials with latest design trends
                </p>
              </div>
              <div className="bg-[#2B2B33] p-4 rounded-lg">
                <p className="font-medium text-white">Assessment Variety</p>
                <p className="text-sm text-gray-400 mt-1">
                  Mix of quizzes, projects, and presentations could better evaluate skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

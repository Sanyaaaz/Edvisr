"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import { Users, MessageCircle, Send } from "lucide-react";

export default function DiscussionsPage() {
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
              <Users className="w-8 h-8 text-purple-500" />
              Discussions
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Engage with students and colleagues in discussions
            </p>
          </div>
        </div>

        {/* Discussions Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Discussions */}
          <div className="lg:col-span-2 bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-[#A594F9] flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Active Discussions
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Design Thinking - Assignment Questions",
                  author: "Sarah Johnson",
                  time: "2 hours ago",
                  replies: 12,
                  category: "Design Thinking",
                },
                {
                  title: "Best practices for UI prototyping?",
                  author: "Michael Chen",
                  time: "5 hours ago",
                  replies: 8,
                  category: "UI Heuristics",
                },
                {
                  title: "Illustration techniques discussion",
                  author: "Emma Davis",
                  time: "1 day ago",
                  replies: 15,
                  category: "Illustration Practice",
                },
                {
                  title: "Product Design portfolio feedback",
                  author: "James Wilson",
                  time: "2 days ago",
                  replies: 6,
                  category: "Product Design",
                },
              ].map((discussion, idx) => (
                <div
                  key={idx}
                  className="bg-[#2A2A33] p-4 rounded-xl border-l-4 border-[#8B79F9] hover:bg-[#2F2F3A] transition cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">{discussion.title}</h3>
                    <span className="text-xs text-gray-500 bg-purple-900/30 px-2 py-1 rounded">
                      {discussion.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>By {discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.time}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {discussion.replies} replies
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="space-y-6">
            {/* Start New Discussion */}
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
                Start Discussion
              </h2>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                New Discussion
              </button>
            </div>

            {/* Categories */}
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
                Categories
              </h2>
              <div className="space-y-2">
                {[
                  "Design Thinking",
                  "UI Heuristics",
                  "Illustration Practice",
                  "Product Design",
                  "UX Foundations",
                ].map((category, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2B2B33] p-3 rounded-lg hover:bg-[#33333A] transition cursor-pointer"
                  >
                    <p className="font-medium text-white">{category}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {Math.floor(Math.random() * 20 + 5)} discussions
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-[#A594F9]">
                Recent Activity
              </h2>
              <div className="space-y-3">
                {[
                  { user: "Alex", action: "replied to", topic: "Design Thinking" },
                  { user: "Maria", action: "started", topic: "New Discussion" },
                  { user: "David", action: "liked", topic: "Your post" },
                ].map((activity, idx) => (
                  <div key={idx} className="text-sm text-gray-300">
                    <span className="text-purple-400">{activity.user}</span>{" "}
                    {activity.action} {activity.topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

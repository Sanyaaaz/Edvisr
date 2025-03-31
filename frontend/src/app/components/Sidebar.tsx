import React from "react";
import { Home, MessageCircle, Calendar, BookOpen, FileText, Users, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64  text-white flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="p-6 text-xl font-semibold border-b border-purple-600">
          Edvisr
        </div>
        <ul className="mt-6 space-y-4 px-4">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <Home size={20} />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <MessageCircle size={20} />
            <span>Messages</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <Calendar size={20} />
            <span>Schedule</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <BookOpen size={20} />
            <span>Online Course</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <FileText size={20} />
            <span>Assignment</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <Users size={20} />
            <span>Discussion</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
            <FileText size={20} />
            <span>Announcement</span>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <ul className="mb-6 px-4">
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
          <Settings size={20} />
          <span>Settings</span>
        </li>
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
          <LogOut size={20} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

"use client";

import {
  Bot,
  //FileText,
  //BookOpen,
  GraduationCap,
  //PenLine,
  Pencil,
  //ScrollText,
  //NotebookPen,
} from "lucide-react";

export default function FloatingIcons() {
  return (
    <div className="absolute w-full h-full pointer-events-none z-0">
      {/* 🎯 Large Bot - Hero Section */}
      <div className="animate-float-medium absolute top-[28%] left-[65%] text-purple-500">
        <Bot className="w-[220px] h-[220px] opacity-50" />
      </div>

      {/* 🌀 Floating Education Icons */}
      {/* <div className="animate-float-fast absolute top-[10%] left-[10%] text-blue-400">
        <FileText className="w-16 h-16 opacity-60" />
      </div>
      <div className="animate-float-medium absolute bottom-[18%] left-[15%] text-green-400">
        <BookOpen className="w-[72px] h-[72px] opacity-55" />
      </div> */}
      <div className="animate-float-slow absolute top-[50%] left-[22%] text-yellow-400">
        <GraduationCap className="w-20 h-20 opacity-50" />
      </div>
      {/* <div className="animate-float-fast absolute bottom-[10%] right-[30%] text-cyan-400">
        <PenLine className="w-16 h-16 opacity-60" />
      </div> */}
      <div className="animate-float-slow absolute top-[65%] right-[12%] text-emerald-300">
        <Pencil className="w-14 h-14 opacity-60" />
      </div>
      {/* <div className="animate-float-medium absolute top-[32%] left-[70%] text-fuchsia-400">
        <ScrollText className="w-[72px] h-[72px] opacity-55" />
      </div>
      <div className="animate-float-fast absolute top-[15%] right-[20%] text-orange-400">
        <NotebookPen className="w-16 h-16 opacity-65" />
      </div> */}
    </div>
  );
}

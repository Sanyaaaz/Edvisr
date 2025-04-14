"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Edit, Mail, MapPin, Users } from "lucide-react";

export interface TeacherProfile {
  name: string;
  subject: string;
  experience: number;
  location: string;
  avatar: string;
  email: string;
  googleAccount: string;
}

interface ProfileProps {
  teacher: TeacherProfile;
  onClose: () => void;
}

export default function Profile({ teacher, onClose }: ProfileProps) {
  return (
    <div className="max-w-[900px] mx-auto mt-10 p-6 bg-[#0f0e17] text-[#ffffffcc] border border-[#23212f] rounded-xl shadow-lg space-y-6">
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-semibold">Teacher Profile</h2>
        <div className="flex flex-col items-end gap-8">
          <button
            onClick={onClose}
            className="h-4 w-4 text-2xl text-gray-500 hover:text-white"
          >
            ×
          </button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1 border-[#a066ff] text-[#a066ff] hover:bg-[#2a223e]"
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Avatar className="h-24 w-24 border-4 border-background">
          <AvatarImage src={teacher.avatar} alt={teacher.name} />
          <AvatarFallback className="text-3xl capitalize">
            {teacher.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold capitalize">{teacher.name}</h2>
          <div className="mt-1 flex flex-wrap justify-center sm:justify-start items-center gap-2 text-[#a699c1]">
            <Badge variant="outline" className="bg-[#a066ff] text-white rounded-full">
              {teacher.subject} Teacher
            </Badge>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4" />
              {teacher.location}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <InfoCard
          icon={<Users className="h-5 w-5 text-[#a066ff]" />}
          label="Teaching Experience"
          value={`${teacher.experience} years`}
        />
        <InfoCard
          icon={<Mail className="h-5 w-5 text-[#a066ff]" />}
          label="Email"
          value={teacher.email}
        />
        <InfoCard
          icon={<GoogleIcon />}
          label="Google Account"
          value={teacher.googleAccount}
        />
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-[#23212f] bg-[#16151e]">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2a223e]">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white leading-tight">{label}</p>
        <p className="text-[#a699c1] text-sm">{value}</p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5 text-[#a066ff]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.35 11.1h-9.18v2.91h5.5c-.24 1.33-1.39 3.9-5.5 3.9-3.31 0-6-2.69-6-6s2.69-6 6-6c1.89 0 3.15.81 3.87 1.5l2.64-2.55C16.95 3.63 14.67 2.5 12 2.5 6.73 2.5 2.5 6.73 2.5 12S6.73 21.5 12 21.5c6.04 0 10.09-4.23 10.09-10.18 0-.69-.07-1.22-.18-1.72z" />
    </svg>
  );
}

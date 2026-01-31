// "use client";

// import React, { useState } from "react";
// import {
//   MessageCircle,
//   Calendar,
//   FileText,
//   Users,
//   Settings,
//   LogOutIcon,
//   User,
//   GraduationCap,
// } from "lucide-react";
// import Link from "next/link";
// import { AiOutlineAppstoreAdd } from "react-icons/ai";
// import { HiOutlineChartBar } from "react-icons/hi";
// import { useUser, useClerk } from "@clerk/nextjs";
// import Profile from "./Profile";

// export default function Sidebar() {
//   const { user } = useUser();
//   const { signOut } = useClerk();
//   const [, setOpen] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   if (!user) return null;

//   const teacher = {
//     name: user.fullName || "John Doe",
//     subject: "Mathematics",
//     experience: 5,
//     location: "New York",
//     avatar: user.imageUrl,
//     email: user.primaryEmailAddress?.emailAddress || "john@example.com",
//     googleAccount: user.externalAccounts?.[0]?.emailAddress || "john.doe@gmail.com",
//   };

//   return (
//     <>
//       <div className="h-screen w-64 text-white flex flex-col justify-between">
//         {/* Top Section */}
//         <div>
//           <div className="p-6 text-2xl font-semibold border-b border-purple-600 flex items-center">
//             <GraduationCap className="w-8 h-8 text-purple-500 mr-2" />
//             <span>Edvisr</span>
//           </div>

//           <ul className="mt-6 space-y-4 px-4">
//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <AiOutlineAppstoreAdd size={20} />
//               <Link href="/dashboard">
//                 <span>Dashboard</span>
//               </Link>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <MessageCircle size={20} />
//               <Link href="/quiz">
//                 <span>Quiz</span>
//               </Link>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <Calendar size={20} />
//               <span>Schedule</span>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <HiOutlineChartBar size={20} />
//               <span>Insights</span>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <FileText size={20} />
//               <span>Suggestions</span>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <Users size={20} />
//               <span>Discussion</span>
//             </li>
//           </ul>
//         </div>

//         {/* Bottom Section */}
//         <ul className="mb-6 px-4">
//           <button
//             onClick={() => setShowProfile(true)}
//             className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition"
//           >
//             <User size={20} />
//             <span>Profile</span>
//           </button>

//           <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//             <Settings size={20} />
//             <span>Settings</span>
//           </li>

//           <button
//             onClick={() => {
//               signOut();
//               setOpen(false);
//             }}
//             className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition"
//           >
//             <LogOutIcon size={20} />
//             <span>Sign Out</span>
//           </button>
//         </ul>
//       </div>

//        {/* Profile Popup Modal */}
//        {showProfile && (
//         <div className="fixed inset-0 z-50 bg-blend-darken backdrop-blur-xs bg-opacity-50 flex items-center justify-center">
//           <div className="relative w-full max-w-4xl mx-auto my-auto">
//             <div className="relative rounded-xl shadow-lg h-full overflow-hidden">
//               {/* Profile Component */}
//               <Profile teacher={teacher} onClose={() => setShowProfile(false)} />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import {
//   MessageCircle,
//   Calendar,
//   FileText,
//   Users,
//   Settings,
//   LogOutIcon,
//   User,
//   GraduationCap,
// } from "lucide-react";
// import Link from "next/link";
// import { AiOutlineAppstoreAdd } from "react-icons/ai";
// import { HiOutlineChartBar } from "react-icons/hi";
// import { useUser, useClerk } from "@clerk/nextjs";
// import Profile from "./Profile";

// export default function Sidebar() {
//   const { user, isLoaded } = useUser(); // ✅ IMPORTANT
//   const { signOut } = useClerk();
//   const [, setOpen] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   // ✅ WAIT for Clerk to hydrate
//   if (!isLoaded) {
//     return (
//       <div className="h-screen w-64 bg-black border-r border-gray-700" />
//     );
//   }

//   // ✅ User not logged in
//   if (!user) {
//     return null;
//   }

//   const teacher = {
//     name: user.fullName || "John Doe",
//     subject: "Mathematics",
//     experience: 5,
//     location: "New York",
//     avatar: user.imageUrl,
//     email: user.primaryEmailAddress?.emailAddress || "john@example.com",
//     googleAccount:
//       user.externalAccounts?.[0]?.emailAddress || "john.doe@gmail.com",
//   };

//   return (
//     <>
//       <div className="h-screen w-64 shrink-0 bg-black text-white flex flex-col justify-between border-r border-gray-700">
//         {/* Top Section */}
//         <div>
//           <div className="p-6 text-2xl font-semibold border-b border-purple-600 flex items-center">
//             <GraduationCap className="w-8 h-8 text-purple-500 mr-2" />
//             <span>Edvisr</span>
//           </div>

//           <ul className="mt-6 space-y-4 px-4">
//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <AiOutlineAppstoreAdd size={20} />
//               <Link href="/dashboard">Dashboard</Link>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <MessageCircle size={20} />
//               <Link href="/quiz">Quiz</Link>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <Calendar size={20} />
//               <span>Schedule</span>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <HiOutlineChartBar size={20} />
//               <span>Insights</span>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <FileText size={20} />
//               <span>Suggestions</span>
//             </li>

//             <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//               <Users size={20} />
//               <span>Discussion</span>
//             </li>
//           </ul>
//         </div>

//         {/* Bottom Section */}
//         <ul className="mb-6 px-4">
//           <button
//             onClick={() => setShowProfile(true)}
//             className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition"
//           >
//             <User size={20} />
//             <span>Profile</span>
//           </button>

//           <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
//             <Settings size={20} />
//             <span>Settings</span>
//           </li>

//           <button
//             onClick={() => {
//               signOut();
//               setOpen(false);
//             }}
//             className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition"
//           >
//             <LogOutIcon size={20} />
//             <span>Sign Out</span>
//           </button>
//         </ul>
//       </div>

//       {/* Profile Modal */}
//       {showProfile && (
//         <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
//           <Profile
//             teacher={teacher}
//             onClose={() => setShowProfile(false)}
//           />
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Calendar,
  FileText,
  Users,
  Settings,
  LogOutIcon,
  User,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { HiOutlineChartBar } from "react-icons/hi";
import { useUser, useClerk } from "@clerk/nextjs";
import Profile from "./Profile";

export default function Sidebar() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [showProfile, setShowProfile] = useState(false);

  // Show loading state while Clerk is loading
  if (!isLoaded) {
    return (
      <div className="h-screen w-64 shrink-0 bg-black text-white flex flex-col justify-between border-r border-gray-700">
        <div className="p-6 text-2xl font-semibold border-b border-purple-600 flex items-center">
          <GraduationCap className="w-8 h-8 text-purple-500 mr-2" />
          <span>Edvisr</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen w-64 shrink-0 bg-black text-white flex flex-col justify-between border-r border-gray-700">
        {/* Top */}
        <div>
          <div className="p-6 text-2xl font-semibold border-b border-purple-600 flex items-center">
            <GraduationCap className="w-8 h-8 text-purple-500 mr-2" />
            <span>Edvisr</span>
          </div>

          <ul className="mt-6 space-y-4 px-4">
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
              <AiOutlineAppstoreAdd size={20} />
              <Link href="/dashboard">Dashboard</Link>
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
              <MessageCircle size={20} />
              <Link href="/quiz">Quiz</Link>
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
              <HiOutlineChartBar size={20} />
              <Link href="/analytics">Analytics</Link>
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
              <Calendar size={20} />
              <Link href="/schedule">Schedule</Link>
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
              <FileText size={20} />
              <Link href="/suggestions">Suggestions</Link>
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
              <Users size={20} />
              <Link href="/discussions">Discussions</Link>
            </li>
          </ul>
        </div>

        {/* Bottom */}
        <ul className="mb-6 px-4">
          {user && (
            <>
              <button
                onClick={() => setShowProfile(true)}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition"
              >
                <User size={20} />
                <span>Profile</span>
              </button>

              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
                <Settings size={20} />
                <span>Settings</span>
              </li>
            </>
          )}

          <li>
            <Link href="/pricingpage" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition">
              <DollarSign size={20} />
              <span>Pricing</span>
            </Link>
          </li>

          {user && (
            <button
              onClick={() => signOut()}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition"
            >
              <LogOutIcon size={20} />
              <span>Sign Out</span>
            </button>
          )}
        </ul>
      </div>

      {/* Profile Modal */}
      {showProfile && user && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <Profile
            teacher={{
              name: user.fullName || "John Doe",
              subject: "Mathematics",
              experience: 5,
              location: "New York",
              avatar: user.imageUrl,
              email:
                user.primaryEmailAddress?.emailAddress ||
                "john@example.com",
              googleAccount:
                user.externalAccounts?.[0]?.emailAddress ||
                "john.doe@gmail.com",
            }}
            onClose={() => setShowProfile(false)}
          />
        </div>
      )}
    </>
  );
}

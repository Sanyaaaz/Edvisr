"use client";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Dashboard() {
  const router = useRouter();
  const [pitches] = useState([
    {
      title: "Goals for Next Class",
      description: "Sint occaecat cupidatat non proident.",
      slides: 10,
      public: true,
    },
    {
      title: "Digital Marketing Today",
      description: "Sint occaecat cupidatat non proident.",
      slides: 10,
      public: false,
    },
  ]);

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 bg-purple-100 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-primary">Edvisr</h2>
        <button className="w-full bg-accent text-white p-3 mt-6 rounded-lg shadow">
          + Create New Class
        </button>

        <ul className="mt-8 space-y-4">
          <li className="text-primary font-semibold cursor-pointer">Dashboard</li>
          <li className="text-gray-600  cursor-pointer hover:text-purple-400 transition">
  <Link href="/quiz">Quiz</Link>
</li>

          <li className="text-gray-600 cursor-pointer hover:text-purple-400 transition"><Link href="/insights">Insights</Link></li>
          <li className="text-gray-600 cursor-pointer hover:text-primary">Suggestions</li>
          <li className="text-gray-600 cursor-pointer hover:text-primary">Preview</li>
        </ul>

        <div className="fixed bottom-4 left-0 w-[250px] p-4 bg-gray-200 rounded-lg text-center shadow-lg">
  <p className="text-gray-700 text-sm">Upgrade to PRO for more features.</p>
  <a href="/pricingpage" className="bg-accent text-white px-4 py-2 mt-2 rounded-lg inline-block">
  Upgrade
</a>
</div>


      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-white text-xl cursor-pointer" />
            <AiOutlineBell className="text-white text-xl cursor-pointer" />
            <div className="bg-purple-50 text-black p-3 rounded-full">RR</div>
            <span className="font-semibold text-white">Rekha Rawat</span>
            <FiLogOut
              className="text-white text-xl cursor-pointer"
              onClick={() => router.push("/auth")}
            />
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="mt-6 p-6 bg-purple-200 rounded-lg flex items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary">Hi, Rekha</h2>
            <p className="text-gray-700">Ready to start your day with some ideas?</p>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-6 flex space-x-4">
          <div className="bg-blue-50 text-black p-4 rounded-lg flex-1 text-center">
            <h3 className="text-2xl font-bold">83%</h3>
            <p>Open Rate</p>
          </div>
          <div className="bg-cyan-50 text-black p-4 rounded-lg flex-1 text-center">
            <h3 className="text-2xl font-bold">77%</h3>
            <p>Complete</p>
          </div>
          <div className="bg-indigo-50 text-black p-4 rounded-lg flex-1 text-center">
            <h3 className="text-2xl font-bold">91</h3>
            <p>Unique Views</p>
          </div>
        </div>

        {/* Pitch List */}
        <div className="mt-6 space-y-4">
          {pitches.map((pitch, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary">{pitch.title}</h3>
                <p className="text-gray-600">{pitch.description}</p>
                <p className="text-sm text-gray-500">{pitch.slides} Slides</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{pitch.public ? "Public" : "Private"}</span>
                <input type="checkbox" checked={pitch.public} className="toggle-checkbox" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

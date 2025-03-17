"use client";
import { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineBell, AiOutlineFile, AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUpload } from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();
  const students = [
    "Aman", "Riya", "Kabir", "Neha", "Ananya", 
    "Vikram", "Sneha", "Ishaan", "Pooja", "Rohit"
  ];

  // Dummy CSV Upload Handler
  const handleDummyUpload = () => {
    alert("AI-Driven CSV Upload Feature Coming Soon!");
  };

  // Greeting Logic
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning");
    } else if (hours < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const teacher = {
    name: "Rekha",
    subject: "Mathematics",
    class: "Grade 10 - Section A",
  };

  const [pitches] = useState([
    {
      title: "Goals for Next Class",
      description: "Complete Chapter 6",
      slides: 10,
      public: true,
    },
    {
      title: "Next presentation",
      description: "Trigonometry",
      slides: 10,
      public: false,
    },
  ]);

  return (
    <div className="flex min-h-screen bg-black overflow-auto">
      {/* Sidebar */}
      <div className="w-64 bg-purple-100 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-primary">Edvisr</h2>
        <button className="w-full bg-accent text-white p-3 mt-6 rounded-lg shadow">
          + Create New Class
        </button>

        <ul className="mt-8 space-y-4">
          <li className="text-primary font-semibold cursor-pointer">Dashboard</li>
          <li className="text-gray-600 cursor-pointer hover:text-purple-400 transition">
            <Link href="/quiz">Quiz</Link>
          </li>
          <li className="text-gray-600 cursor-pointer hover:text-purple-400 transition">
            <Link href="/insights">Insights</Link>
          </li>
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
      <div className="flex-1 p-8 overflow-auto">
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

        {/* Upload Section */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-primary mb-4">Upload Student Data</h2>
          <button
            className="bg-accent text-white px-6 py-3 rounded-lg shadow flex items-center space-x-2 hover:bg-purple-700"
            onClick={handleDummyUpload}
          >
            <FaUpload />
            <span>Upload CSV</span>
          </button>
          <p className="text-gray-500 mt-2">Upload a CSV file with student details for AI insights.</p>
        </div>

       {/* Welcome Banner */}
<div className="mt-6 p-6 bg-purple-200 rounded-lg flex items-center">
  <div>
    <h2 className="text-2xl font-bold text-primary">Hi, {teacher.name}</h2>
    <p className="text-gray-700">{greeting}, ready to start your day?</p>
  </div>
</div>

{/* Student List Box */}
<div className="mt-6 max-h-60 overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-inner">
  <div className="grid grid-cols-2 gap-6"> {/* Increased gap between boxes */}
    {students.map((student, index) => (
      <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-md shadow-lg">
        <AiOutlineFile className="text-blue-500 text-2xl" />
        <span className="text-gray-800 font-semibold">{student}</span>
      </div>
    ))}
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
                <input type="checkbox" checked={pitch.public} className="toggle-checkbox" readOnly />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

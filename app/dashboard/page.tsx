"use client";
import { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaChalkboardTeacher, FaBookOpen, FaUserGraduate, FaCalendarAlt } from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession(); // ✅ Get user session data

  // Redirect if user is not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth"); // Redirect to login if not authenticated
    }
  }, [status, router]);

  const userName = session?.user?.name || "Teacher"; // ✅ Use authenticated name

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
    subject: "Mathematics",
    class: "Grade 10 - Section A",
  };

  // Students List
  const students = [
    "Aman", "Riya", "Kabir", "Neha", "Ananya", 
    "Vikram", "Sneha", "Ishaan", "Pooja", "Rohit"
  ];

  // Syllabus Completion
  const syllabusProgress = 75; // In percentage

  // Upcoming Lectures
  const upcomingLectures = [
    { topic: "Trigonometry", date: "March 18, 2025", time: "10:00 AM" },
    { topic: "Probability", date: "March 20, 2025", time: "12:00 PM" },
    { topic: "Algebra", date: "March 22, 2025", time: "11:30 AM" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
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
      <div className="flex-1 p-8 ml-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <h1 className="text-3xl font-semibold text-primary">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-primary text-xl cursor-pointer" />
            <AiOutlineBell className="text-primary text-xl cursor-pointer" />
            <div className="bg-gray-200 text-black p-3 rounded-full">
              {session?.user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <span className="font-semibold text-primary">{userName}</span>
            <FiLogOut className="text-primary text-xl cursor-pointer" onClick={() => signOut()} />
          </div>
        </div>

        {/* Greeting Section */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-primary">{greeting}, {userName}!</h2>
          <p className="text-gray-600">Here’s your overview for today.</p>
        </div>

        {/* Teacher Info */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow flex items-center">
          <FaChalkboardTeacher className="text-primary text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold text-primary">Subject: {teacher.subject}</h2>
            <p className="text-gray-600">Class: {teacher.class}</p>
          </div>
        </div>

        {/* Students List */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-primary mb-4">Students</h2>
          <ul className="grid grid-cols-2 gap-2">
            {students.map((student, index) => (
              <li key={index} className="text-gray-600 p-2 bg-gray-100 rounded-md">
                <FaUserGraduate className="inline text-primary mr-2" /> {student}
              </li>
            ))}
          </ul>
        </div>

        {/* Syllabus Completion */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-primary mb-4">Syllabus Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-accent h-6 rounded-full text-white text-center font-bold"
              style={{ width: `${syllabusProgress}%` }}
            >
              {syllabusProgress}%
            </div>
          </div>
        </div>

        {/* Upcoming Lectures */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-primary mb-4">Upcoming Lectures</h2>
          <ul>
            {upcomingLectures.map((lecture, index) => (
              <li key={index} className="text-gray-600 p-3 bg-gray-100 rounded-md flex items-center">
                <FaCalendarAlt className="text-primary mr-3" />
                <div>
                  <p className="font-bold">{lecture.topic}</p>
                  <p className="text-sm">{lecture.date} | {lecture.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

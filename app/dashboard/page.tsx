"use client";
import { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { FaUserGraduate, FaCalendarAlt, FaUpload } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redirect if user is not logged in
  useEffect(() => {
    // if (status === "loading"){
    //   return <p>Loading...</p>;
    // }
      
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  const userName = session?.user?.name || "Teacher";

  // Greeting Logic
  const [greeting, setGreeting] = useState("");

  interface ClassData {
    name: string;
    id?: string; // Adjust fields as per API response
  }
  
  const [classes, setClasses] = useState<ClassData[]>([]);
  

  useEffect(() => {
    fetch("/api/classroom", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setClasses(data.courses || [])) // Adjusted for API response format
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  const handleCreateClass = async () => {
    const className = prompt("Enter class name:");
    if (!className) return;

    const response = await fetch("/api/classroom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: className })
    });

    if (response.ok) {
      const newClass = await response.json();
      setClasses([...classes, newClass]);
    }
  };

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

  // Dummy CSV Upload Handler
  const handleDummyUpload = () => {
    alert("AI-Driven CSV Upload Feature Coming Soon!");
  };

  // Students List
  const students = ["Aman", "Riya", "Kabir", "Neha", "Ananya", "Vikram", "Sneha", "Ishaan", "Pooja", "Rohit"];

  // Syllabus Completion
  const syllabusProgress = 75;

  // Upcoming Lectures
  const upcomingLectures = [
    { topic: "Trigonometry", date: "March 18, 2025", time: "10:00 AM" },
    { topic: "Probability", date: "March 20, 2025", time: "12:00 PM" },
    { topic: "Algebra", date: "March 22, 2025", time: "11:30 AM" },
  ];

  // Pitches
  const [pitches] = useState([
    { title: "Goals for Next Class", description: "Complete Chapter 6", slides: 10, public: true },
    { title: "Next Presentation", description: "Trigonometry", slides: 10, public: false },
  ]);

  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 bg-purple-100 p-6 shadow-lg min-h-screen">
        <h2 className="text-4xl font-bold text-primary">Edvisr</h2>
        <button
          className="w-full bg-accent text-white p-3 mt-6 rounded-lg shadow"
          onClick={handleCreateClass}
        >
          + Create New Class
        </button>

        <ul className="mt-8 space-y-4">
          <li className="text-gray-600 cursor-pointer hover:text-purple-400 transition">
          <Link href="/dashboard">Dashboard</Link>
            </li>
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

      {/* Main Content (Scrollable) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header (Fixed) */}
        <div className="flex justify-between items-center bg-white p-4  shadow sticky top-0 w-full z-10">
          <h1 className="text-3xl font-semibold text-primary">Dashboard</h1>
          <div className="flex items-center space-x-7">
            <AiOutlineMail className="text-primary text-x2 cursor-pointer" />
            <AiOutlineBell className="text-primary text-x2 cursor-pointer" />
            <div className="bg-gray-200 text-black p-3 rounded-full">{userName.charAt(0).toUpperCase()}</div>
            <span className="font-semibold text-primary">{userName}</span>
            <FiLogOut className="text-primary text-xl cursor-pointer" onClick={() => signOut()} />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8">
          {/* Centered Greeting */}
          <div className="flex justify-center items-center mb-8">
            <h2 className="text-2xl font-bold text-primary">{greeting}, {userName}! Ready to start your day?</h2>
          </div>

          {/* Upload Section */}
          <div className="p-6 bg-white rounded-lg shadow mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Upload Student Data</h2>
            <button className="bg-accent text-white px-6 py-3 rounded-lg shadow flex items-center space-x-2 hover:bg-purple-700" onClick={handleDummyUpload}>
              <FaUpload />
              <span>Upload CSV</span>
            </button>
            <p className="text-gray-500 mt-2">Upload a CSV file with student details for AI insights.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Your Classes</h2>
            {classes.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {classes.map((cls, index) => (
                  <ClassCard key={index} name={cls.name} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No classes available. Create a new one!</p>
            )}
          </div>
          {/* Students List */}
          <div className="p-6 bg-white rounded-lg shadow mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Student List</h2>
            <ul className="grid grid-cols-2 gap-4">
              {students.map((student, index) => (
                <li key={index} className="p-3 bg-gray-100 rounded-md text-gray-700">
                  <FaUserGraduate className="inline-block text-primary mr-2" />
                  {student}
                </li>
              ))}
            </ul>
          </div>

          {/* Syllabus Completion */}
          <div className="p-6 bg-white rounded-lg shadow mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Syllabus Progress</h2>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className="bg-accent h-6 rounded-full text-white text-center font-bold" style={{ width: `${syllabusProgress}%` }}>
                {syllabusProgress}%
              </div>
            </div>
          </div>

          {/* Upcoming Lectures */}
          <div className="p-6 bg-white rounded-lg shadow mb-6">
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
          {/* Pitch List */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-primary mb-4">Your Pitches</h2>
            {pitches && pitches.length > 0 ? (
              pitches.map((pitch, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
                  <h3 className="text-xl font-bold text-primary">{pitch.title}</h3>
                  <p className="text-gray-600">{pitch.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No pitches available.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
function ClassCard({ name }: { name: string }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-primary">{name}</h3>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";


const QuizPage = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  

  const handleGenerateQuiz = () => {
    console.log("Class:", selectedClass, "Topic:", topic, "Difficulty:", difficulty);
  };


 

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-purple-100 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-primary">Edvisr</h2>
        <button className="w-full bg-accent text-white p-3 mt-6 rounded-lg shadow">
          + Create New Class
        </button>

        <ul className="mt-8 space-y-4">
          <li className="text-gray-600 cursor-pointer hover:text-primary">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="text-primary font-semibold cursor-pointer">Quiz</li>
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
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Card Section */}
        <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-6">Quiz Generator</h1>

          {/* Class Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Select Class</label>
            <select
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">Choose class</option>
              {[...Array(8)].map((_, index) => (
                <option key={index} value={index + 5}>
                  Class {index + 5}
                </option>
              ))}
            </select>
          </div>

          {/* Topic Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Enter Topic/Keywords</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              placeholder="Enter topic or keywords..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          {/* Difficulty Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Select Difficulty (Optional)</label>
            <select
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">Choose difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          

          {/* Generate Button */}
          <div className="text-center">
            <button
              className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg w-full"
              onClick={handleGenerateQuiz}
            >
              Generate Quiz
            </button>
            
          </div>
          <div className="text-center py-6">
            <button
              className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg w-full"
              onClick={handleGenerateQuiz}
            >
              Generate What If Questions
            </button>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuizPage;

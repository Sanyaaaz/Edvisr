"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateWhatIfResponse } from "Edvisr\pages\api\gemini.js";

const QuizPage = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [whatIfQuestion, setWhatIfQuestion] = useState("");
  const [whatIfAnswer, setWhatIfAnswer] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleGenerateQuiz = () => {
    console.log("Class:", selectedClass, "Topic:", topic, "Difficulty:", difficulty);
  };

  const handleWhatIfClick = () => {
    setShowInput(true);
  };

  const handleGenerateWhatIf = async () => {
    if (!whatIfQuestion) return;
  
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: whatIfQuestion, grade: selectedClass || "General" }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setWhatIfAnswer(data.question);
      } else {
        setWhatIfAnswer("Failed to generate an answer.");
      }
    } catch (error) {
      console.error("Error fetching What If question:", error);
      setWhatIfAnswer("Failed to generate an answer.");
    }
  };
  
  

  return (
    <div className="flex min-h-screen bg-black text-white overflow-auto">
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
      <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-auto">
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

          {/* What If Section */}
          <div className="text-center py-6">
            <button
              className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg w-full"
              onClick={handleWhatIfClick}
            >
              Generate a What If Question
            </button>
          </div>

          {showInput && (
            <div className="mt-4">
              <input
                type="text"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                placeholder="Enter a keyword/topic..."
                value={whatIfQuestion}
                onChange={(e) => setWhatIfQuestion(e.target.value)}
              />
              <button
                className="mt-2 bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg w-full"
                onClick={handleGenerateWhatIf}
              >
                Get Question
              </button>
              {whatIfAnswer && (
                <p className="mt-4 p-3 bg-gray-700 text-white rounded-lg">{whatIfAnswer}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

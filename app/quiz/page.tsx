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
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [showWhatIfForm, setShowWhatIfForm] = useState(false);

  const handleGenerateQuiz = () => {
    console.log("Class:", selectedClass, "Topic:", topic, "Difficulty:", difficulty);
  };

  const handleGenerateWhatIf = async () => {
    if (!whatIfQuestion) return;
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: whatIfQuestion, grade: selectedClass || "General" }),
      });
      const data = await response.json();
      setWhatIfAnswer(response.ok ? data.question : "Failed to generate an answer.");
    } catch (error) {
      console.error("Error fetching What If question:", error);
      setWhatIfAnswer("Failed to generate an answer.");
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white overflow-auto">
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
        </ul>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-auto">
        <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-6">Quiz Generator</h1>

          <button className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg w-full" onClick={() => setShowQuizForm(!showQuizForm)}>
            {showQuizForm ? "Close Quiz Form" : "Generate Quiz"}
          </button>
          {showQuizForm && (
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Select Class</label>
              <select className="w-full p-3 bg-gray-800 text-white rounded-lg" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                <option value="">Choose class</option>
                {[...Array(8)].map((_, index) => (
                  <option key={index} value={index + 5}>Class {index + 5}</option>
                ))}
              </select>
              <label className="block text-sm font-medium mt-4 mb-2">Enter Topic/Keywords</label>
              <input type="text" className="w-full p-3 bg-gray-800 text-white rounded-lg" placeholder="Enter topic..." value={topic} onChange={(e) => setTopic(e.target.value)} />
              <label className="block text-sm font-medium mt-4 mb-2">Select Difficulty</label>
              <select className="w-full p-3 bg-gray-800 text-white rounded-lg" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="">Choose difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <button className="mt-4 bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg w-full" onClick={handleGenerateQuiz}>
                Generate Quiz
              </button>
            </div>
          )}

          <button className="mt-6 bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg w-full" onClick={() => setShowWhatIfForm(!showWhatIfForm)}>
            {showWhatIfForm ? "Close What If Form" : "Generate a What If Question"}
          </button>
          {showWhatIfForm && (
            <div className="mt-4">
              <input type="text" className="w-full p-3 bg-gray-800 text-white rounded-lg" placeholder="Enter a keyword/topic..." value={whatIfQuestion} onChange={(e) => setWhatIfQuestion(e.target.value)} />
              <button className="mt-2 bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg w-full" onClick={handleGenerateWhatIf}>
                Get Question
              </button>
              {whatIfAnswer && <p className="mt-4 p-3 bg-gray-700 text-white rounded-lg">{whatIfAnswer}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

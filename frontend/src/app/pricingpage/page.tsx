"use client";

import React from "react";

import Navbar from "../components/Navbar";

const PricingPage = () => {

  return (
    <div className="bg-black text-white min-h-screen">
     
      <Navbar/>

   
      <div className="flex justify-center items-center pt-32 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-gray-400 mt-2">Choose the plan that fits you best.</p>

          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            {/* Basic Plan */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-72 text-white border border-gray-700">
              <h2 className="text-2xl font-bold">Basic</h2>
              <p className="text-3xl font-semibold mt-2">₹0/month (Free Forever!)</p>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm text-left">
                <li>✔ Access to basic features</li>
                <li>✔ AI-generated basic theory quiz</li>
                <li>✔ Student weakness analysis with topic-based reports</li>
              </ul>
              <button className="bg-purple-500 text-white px-6 py-2 mt-4 rounded-lg w-full">
                Choose
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-purple-700 p-6 rounded-lg shadow-lg w-72 border-2 border-purple-500">
              <h2 className="text-2xl font-bold">Pro</h2>
              <p className="text-3xl font-semibold mt-2">₹499/month</p>
              <ul className="mt-4 space-y-2 text-white text-sm text-left">
                <li>✔ Everything in Basic</li>
                <li>✔ AI-powered quizzes and MCQs</li>
                <li>✔ Personalized insights</li>
                <li>✔ AI-powered Meme Notes</li>
              </ul>
              <button className="bg-white text-purple-700 px-6 py-2 mt-4 rounded-lg w-full">
                Choose
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-72 text-white border border-gray-700">
              <h2 className="text-2xl font-bold">Enterprise</h2>
              <p className="text-3xl font-semibold mt-2">
                ₹999/month (For Institutions & Advanced Users)
              </p>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm text-left">
                <li>✔ Everything in Pro</li>
                <li>✔ Smart Rage Detector</li>
                <li>✔ Dedicated support</li>
                <li>✔ Community Support</li>
              </ul>
              <button className="bg-purple-500 text-white px-6 py-2 mt-4 rounded-lg w-full">
                Choose
              </button>
            </div>
          </div>

          {/* <button
            className="mt-6 text-purple-400 underline"
            onClick={() => router.push("/dashboard")}
          >
            Back to Dashboard
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

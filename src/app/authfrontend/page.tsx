"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Bot } from "lucide-react";
import Head from "next/head";

const SparklesCore = dynamic(
  () => import("../components/Sparkles").then((mod) => mod.SparklesCore),
  { ssr: false }
);

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem("auth_token", token);
      router.push("/dashboard");
    }
  }, [searchParams, router]);

  const handleGoogleSignIn = () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";
    window.location.href = `${backendUrl}/auth/google`;
  };

  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const endpoint = isSignUp ? "/auth/register" : "/auth/login";
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Authentication failed");
      localStorage.setItem("auth_token", data.token);
      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  if (!isHydrated) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <style>{`
          html, body {
            background-color: #000;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-black antialiased relative overflow-hidden flex flex-col items-center p-4">
        <div className="h-full w-full absolute inset-0 z-0">
          <SparklesCore
            id="particles-auth" 
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="relative z-10 w-full max-w-md mt-32 flex flex-col items-center">
          <div className="mb-8 flex justify-center">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="w-10 h-10 text-purple-500" />
              <span className="text-white font-medium text-2xl">Edvisr</span>
            </Link>
          </div> 

          <div className="w-full bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">
              {isSignUp ? "Create an Account" : "Sign In"}
            </h2>

            {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

            <form className="space-y-4" onSubmit={handleEmailSignIn}>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                autoComplete={isSignUp ? "new-password" : "current-password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-purple-500 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-600 transition"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>

            <div className="my-4 flex items-center">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <button
              className="w-full flex items-center justify-center bg-white text-gray-900 py-3 rounded-lg shadow hover:bg-gray-200 transition"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="text-2xl mr-2" />
              {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
            </button>

            <p className="text-center mt-4 text-gray-400">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-purple-500 hover:underline"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
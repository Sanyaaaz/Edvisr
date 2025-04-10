"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Bot } from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useSignIn, useSignUp, useClerk } from "@clerk/nextjs";

const SparklesCore = dynamic(
  () => import("../components/Sparkles").then((mod) => mod.SparklesCore),
  { ssr: false }
);

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useSignIn();
  const { signUp } = useSignUp();
  const { redirectToSignIn } = useClerk();

  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      if (!signIn) throw new Error("Sign in not ready yet.");

      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
        redirectUrlComplete: "/",
      });
    } catch (err: any) {
      setError(err.errors?.[0]?.message || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!email || !password) {
        throw new Error("Please fill in all fields");
      }

      if (!signUp || !signIn) {
        throw new Error("Auth is not initialized yet.");
      }

      if (isSignUp) {
        const result = await signUp.create({
          emailAddress: email,
          password: password,
        });

        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
        await signUp.attemptEmailAddressVerification({ code: "000000" }); // use real code flow later

        router.push("/dashboard");
      } else {
        const result = await signIn.create({
          identifier: email,
          password: password,
        });

        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{isSignUp ? "Sign Up" : "Sign In"} | Edvisr</title>
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

          <div className="w-full bg-black backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-3xl font-semibold text-center mb-6 text-white">
              {isSignUp ? "Create an Account" : "Sign In"}
            </h2>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {error}
              </p>
            )}

            <form className="space-y-4" onSubmit={handleEmailSignIn}>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-600 transition disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="inline-flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isSignUp ? "Creating Account..." : "Signing In..."}
                  </span>
                ) : (
                  isSignUp ? "Sign Up" : "Sign In"
                )}
              </button>
            </form>

            <div className="my-4 flex items-center">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <button
              className="w-full flex items-center justify-center bg-white text-gray-900 py-3 rounded-lg shadow hover:bg-gray-200 transition disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <FcGoogle className="text-2xl mr-2" />
              {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
            </button>

            <p className="text-center mt-4 text-gray-400">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-purple-500 hover:underline focus:outline-none"
                disabled={isLoading}
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
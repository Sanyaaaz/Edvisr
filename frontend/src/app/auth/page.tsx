"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const { data: session } = useSession(); // Get authentication status

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard"); // Redirect to dashboard after sign-in
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-white">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">
          {session ? "Welcome Back" : isSignUp ? "Create an Account" : "Sign In"}
        </h2>

        {session ? (
          <div className="text-center">
            <p>Signed in as {session.user?.email}</p>
            <button
              className="w-full bg-red-600 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-700 transition"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleAuth}>
            {isSignUp && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />

            <button
              type="submit"
              className="w-full bg-accent py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-600 transition"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
        )}

        {!session && (
          <button
            className="w-full mt-4 flex items-center justify-center bg-white text-gray-900 py-3 rounded-lg shadow hover:bg-gray-200 transition"
            onClick={() => signIn("google")}
          >
            <FcGoogle className="text-2xl mr-2" />
            {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
          </button>
        )}

        {!session && (
          <p className="text-center mt-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-accent cursor-pointer hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

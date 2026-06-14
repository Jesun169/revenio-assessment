"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

export default function LoginPage() {
  const { login, googleLogin } = useAuth();
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await login(email, password);

      toast.success(
        "Login Successful 🎉"
      );

      router.push("/");
    } catch (error) {
      let message =
        "Login Failed";

      switch (error.code) {
        case "auth/invalid-credential":
          message =
            "Invalid email or password";
          break;

        case "auth/invalid-email":
          message =
            "Please enter a valid email";
          break;

        case "auth/too-many-requests":
          message =
            "Too many failed attempts. Try again later.";
          break;

        default:
          message =
            error.message;
      }

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin =
    async () => {
      try {
        await googleLogin();

        toast.success(
          "Google Login Successful 🎉"
        );

        router.push("/");
      } catch (error) {
        toast.error(
          "Google Login Failed"
        );
      }
    };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">

      {/* Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-black">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-3">
              Login to access your account
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >

            <div>

              <label className="block mb-2 font-medium text-black">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium text-black">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-[1.02] transition disabled:opacity-50"
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>

          </form>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t"></div>

            <span className="px-4 text-gray-500">
              OR
            </span>

            <div className="flex-1 border-t"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 rounded-xl border font-medium hover:bg-gray-50 transition text-gray-700"
          >
            Continue with Google
          </button>

          <p className="text-center text-gray-600 mt-6">

            Don't have an account?

            <Link
              href="/register"
              className="text-blue-600 font-semibold ml-2"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}
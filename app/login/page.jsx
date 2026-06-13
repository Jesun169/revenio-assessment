"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { login, googleLogin } = useAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);

      toast.success(
        "Login successful 🎉"
      );

      router.push("/");
    } catch (error) {
      toast.error(
        error.message ||
          "Login failed"
      );
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
          error.message ||
            "Google Login Failed"
        );
      }
    };

  return (
    <div className="max-w-md mx-auto py-20">

      <h1 className="text-4xl font-bold mb-8">
        Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="w-full bg-red-500 text-white p-3 rounded mt-4"
      >
        Google Login
      </button>

    </div>
  );
}
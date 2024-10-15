"use client";
import { useForgottenPasswordMutation } from "@/redux/api/authApi";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [forgotPassFn, { isLoading }] = useForgottenPasswordMutation();

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your reset link logic here
    // const forgotPassFn({ email });
    try {
      const res = await forgotPassFn({ email });
      console.log(res);
      if (res.data && res.data.success) {
        toast.success("Reset link sent successfully. Please check your email.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Forgot Password?</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email address and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleReset}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link href="/sign-in" className="text-orange-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

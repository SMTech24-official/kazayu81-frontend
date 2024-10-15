/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [resetPasswordFn] = useResetPasswordMutation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUSerId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setUSerId(query.get("userId"));
    setToken(query.get("token"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the password reset logic
    console.log("Password reset submitted");

    // check for password equality
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    //   {
    //     "id": 4,
    //     "password": "1234"
    // }

    try {
      if (userId && token) {
        localStorage.setItem("accessToken", token || "");
        const res = await resetPasswordFn({ id: Number(userId), password: newPassword }).unwrap();
        console.log(res);
        if (res.success) {
          toast.success("Password reset successfully");
          router.push("/sign-in");
          localStorage.removeItem("accessToken");
        }
      } else {
        console.error("User ID is null");
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full my-auto max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
          <CardDescription className="text-center">
            Enter your new password and confirm it to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="new-password" className="text-sm font-medium">
                New Password
              </label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Update Password
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Remember your password?{" "}
            <Link href="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

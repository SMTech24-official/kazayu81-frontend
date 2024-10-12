"use client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useState } from "react";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");

  const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your OTP verification logic here
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Enter OTP</h2>
        <form onSubmit={handleVerify}>
          <div className="mb-4">
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Verify OTP
          </button>
        </form>
        {/* <p className="mt-4 text-center text-sm text-gray-600">
          Didn&apos;t receive the OTP? <button className="text-blue-500 hover:underline">Resend OTP</button>
        </p> */}
      </div>
    </div>
  );
}

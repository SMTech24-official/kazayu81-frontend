"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useVerifyOtpMutation } from "@/redux/api/authApi";
import { useState } from "react";
import { toast } from "react-toastify";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [varifyOtpFn, { isLoading }] = useVerifyOtpMutation();
  //  get "identifier" from the query params
  const params = new URLSearchParams(window.location.search);
  const identifier = params.get("identifier");

  //   {
  //     "success": true,
  //     "message": "User logged in successfully",
  //     "data": {
  //         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoibmFoaWRtYWhtdWRuMkBnbWFpbC5jb20iLCJyb2xlIjoiQ1VTVE9NRVIiLCJpYXQiOjE3Mjg3MjUyODcsImV4cCI6MTcyODgxMTY4N30.Xr1RhsCaAOalR1COoC2AyUdvrrQip4IM2EKteJBjKgA"
  //     }
  // }

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);

    try {
      const response = await varifyOtpFn({ otp, identifier }).unwrap();
      // console.log(response.data.accessToken);
      const accessToken = response.data.accessToken;
      console.log(response);
      if (response.success && accessToken) {
        console.log("OTP verified successfully");
        toast.success(response.message);

        // save token in local storage
        localStorage.setItem("accessToken", accessToken);

        // use get-me route to get user data
      }
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Enter OTP</h2>
        <form onSubmit={handleVerify}>
          <div className="mb-4 flex flex-col items-center justify-center">
            <InputOTP maxLength={4} value={otp} onChange={handleOtpChange}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

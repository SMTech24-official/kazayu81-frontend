"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useVerifyOtpMutation } from "@/redux/api/authApi";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [varifyOtpFn, { isLoading }] = useVerifyOtpMutation();
  const [identifier, setIdentifier] = useState<string | null>(null);
  const router = useRouter();
  //  get "identifier" from the query params
  useEffect(() => {
    // This ensures that `window` is only accessed when rendering on the client side.
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setIdentifier(params.get("identifier"));
    }
  }, []);

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);

    try {
      const response = await varifyOtpFn({ otp, identifier }).unwrap();
      // console.log(response.data.accessToken);
      const accessToken = response.data.accessToken;
      console.log("Otp response", response);
      if (response.success && accessToken) {
        console.log("OTP verified successfully");
        toast.success(response.message);
        interface ExtendedJwtPayload extends JwtPayload {
          role?: string;
        }

        const userInfo = jwtDecode<ExtendedJwtPayload>(accessToken);

        console.log("userInfo", userInfo);
        // save token in local storage
        localStorage.setItem("accessToken", accessToken);

        if (userInfo?.role === "HELPER") {
          router.push("/help-search");
        } else if (userInfo?.role === "CUSTOMER") router.push("/open");

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

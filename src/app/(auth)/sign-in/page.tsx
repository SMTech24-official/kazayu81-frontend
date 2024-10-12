"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";
import ContinueWithGoogoe from "@/components/button/ContinueWithGoogoe";
import CallToAction from "@/components/home/CallToAction";
import { useLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UserSignIn = () => {
  const [loginFn, { isLoading }] = useLoginMutation();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const hanldeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputData);
    try {
      const response = await loginFn(inputData).unwrap();
      console.log(response);
      toast.success("Check your email for OTP");

      if (response.success) {
        router.push(`/otp?identifier=${response?.data}`);
      }
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      {/* User Signup Section */}
      <section className="bg-orange-500 py-16 border-t border-gray-300">
        <div className="container mx-auto flex justify-center px-5">
          <div className="max-w-xl w-full -mb-40">
            <div className="text-center">
              <div className="mb-4 bg-white inline-block p-2 rounded-full">
                <Image src={mainIcon} alt="none" width={40} height={40} className="mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl xl:text-6xl text-white font-bold mb-3">Welcome back !</h2>
              <p className="mb-4 font-bold text-white ">
                Or continue with email !
                <Link href="/helper-sign-up">
                  <span className="text-black hover:underline ml-1">Become helper</span>
                </Link>{" "}
                or{" "}
                <Link href="/user-sign-up">
                  <span className="text-black hover:underline ml-1">Find Helper</span>
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 py-12 sm:p-12 md:p-16 xl:p-20 mt-8 shadow-xl">
              <ContinueWithGoogoe />
              <p className="text-center mb-4 text-blue-500 text-sm">Or create your own account here!</p>
              <form onSubmit={hanldeSubmit} className="space-y-4">
                <div className="w-full">
                  <label className="block text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    className="mt-1 block w-full p-2 border rounded"
                    placeholder="example@gmail.com"
                    required={true}
                    name="email"
                    id="email"
                    onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full p-2 border rounded"
                    placeholder="Enter your password"
                    required={true}
                    name="password"
                    id="password"
                    onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
                  />
                </div>
                <div>
                  <Link href={"/forgot-password"} className="text-blue-500 hover:underline">
                    Forget Password ?
                  </Link>
                </div>
                <div className="text-center">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="bg-orange-500 disabled:bg-orange-400 text-white py-2 px-4 rounded shadow w-full"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mt-32">
        <CallToAction />
      </div>
    </div>
  );
};

export default UserSignIn;

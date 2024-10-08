import React from "react";
import Link from "next/link";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";
import ContinueWithGoogoe from "@/components/button/ContinueWithGoogoe";
import CallToAction from "@/components/home/CallToAction";

const UserSignIn = () => {
  return (
    <div>
      {/* User Signup Section */}
      <section className="bg-orange-500 py-16 border-t border-gray-300">
        <div className="container mx-auto flex justify-center px-5">
          <div className="max-w-xl w-full -mb-40">
            <div className="text-center">
              <div className="mb-4 bg-white inline-block p-2 rounded-full">
                <Image
                  src={mainIcon}
                  alt="none"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
              </div>
              <h2 className="text-4xl md:text-5xl xl:text-6xl text-white font-bold mb-3">
                Welcome back !
              </h2>
              <p className="mb-4 font-bold text-white ">
                Or continue with email !
                <Link href="/helper-sign-up">
                  <span className="text-black hover:underline ml-1">
                    Become helper
                  </span>
                </Link>{" "}
                or{" "}
                <Link href="/user-sign-up">
                  <span className="text-black hover:underline ml-1">
                    Find Helper
                  </span>
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 py-12 sm:p-12 md:p-16 xl:p-20 mt-8 shadow-xl">
              <ContinueWithGoogoe />
              <p className="text-center mb-4 text-blue-500 text-sm">
                Or create your own account here!
              </p>
              <form className="space-y-4">
                <div className="w-full">
                  <label className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full p-2 border rounded"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full p-2 border rounded"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div>
                  <Link
                    href={"/forgot-password"}
                    className="text-blue-500 hover:underline"
                  >
                    Forget Password ?
                  </Link>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-4 rounded shadow w-full"
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

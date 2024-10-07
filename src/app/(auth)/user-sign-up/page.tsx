import React from "react";
import Link from "next/link";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";
import ContinueWithGoogoe from "@/components/button/ContinueWithGoogoe";
import CallToAction from "@/components/home/CallToAction";

const UserSignup = () => {
  return (
    <div>
      {/* User Signup Section */}
      <section className="bg-orange-500 py-16 border-t border-gray-300">
        <div className="container mx-auto flex justify-center px-5">
          <div className="max-w-3xl w-full -mb-40">
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
                Find helper !
              </h2>
              <p className="mb-4 font-bold text-white">
                I already have an account?
                <Link href="/User/User-login">
                  <span className="text-black hover:underline ml-1">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 py-8 sm:p-12 md:p-16 xl:p-20 mt-8 shadow-xl">
              <ContinueWithGoogoe />
              <p className="text-center mb-4 text-blue-500 text-sm">
                Or create your own account here!
              </p>
              <form className="space-y-4">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
                    <label className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border rounded"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label className="block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border rounded"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
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
                  <div className="w-full md:w-1/2 px-2">
                    <label className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border rounded"
                      placeholder="(123) 456 - 7890"
                      required
                    />
                  </div>
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
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="termsUser"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="termsUser" className="text-sm">
                      I accept the
                      <Link href="#">
                        <span className="text-blue-500 underline">
                          Terms and Conditions
                        </span>
                      </Link>
                      .
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="policyUser"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="policyUser" className="text-sm">
                      I have reviewed and agree to How&apos;s
                      <Link href="#">
                        <span className="text-blue-500 underline">
                          Privacy policy
                        </span>
                      </Link>
                      .
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-4 rounded shadow w-full"
                  >
                    Sign Up
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

export default UserSignup;

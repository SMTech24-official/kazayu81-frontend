"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";
import ContinueWithGoogoe from "@/components/button/ContinueWithGoogoe";
import CallToAction from "@/components/home/CallToAction";
import { useCreateCustomerMutation } from "@/redux/api/authApi";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UserSignup = () => {
  const [createCustomerFn, { isLoading: customerDataPostLoading }] = useCreateCustomerMutation();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    termsAccepted: false,
    policyAccepted: false,
  });

  // { "email": "hs@gmail.com", "password": "123456", "firstName": "Khalid", "lastName": "Hasan", "phoneNumber": "+1234567890" }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);
    // Handle form submission logic here

    const data = new FormData();

    const bodyData = {
      email: formData?.email,
      password: formData?.password,
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      phoneNumber: formData?.phoneNumber,
    };

    try {
      data.append("data", JSON.stringify(bodyData));
      const response = await createCustomerFn(data).unwrap();

      if (response.success) {
        toast.success("User created successfully");
        router.push("/sign-in");
      }
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "An error occurred";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      {/* User Signup Section */}
      <section className="bg-orange-500 py-16 border-t border-gray-300">
        <div className="container mx-auto flex justify-center px-5">
          <div className="max-w-3xl w-full -mb-40">
            <div className="text-center">
              <div className="mb-4 bg-white inline-block p-2 rounded-full">
                <Image src={mainIcon} alt="none" width={40} height={40} className="mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl xl:text-6xl text-white font-bold mb-3">Find helper !</h2>
              <p className="mb-4 font-bold text-white">
                I already have an account?
                <Link href="/sign-in">
                  <span className="text-black hover:underline ml-1">Sign In</span>
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 py-8 sm:p-12 md:p-16 xl:p-20 mt-8 shadow-xl">
              <ContinueWithGoogoe />
              <p className="text-center mb-4 text-blue-500 text-sm">Or create your own account here!</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
                    <label className="block text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border rounded"
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label className="block text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border rounded"
                      placeholder="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
                    <label className="block text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      className="mt-1 block w-full p-2 border rounded"
                      placeholder="example@gmail.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label className="block text-sm font-medium">Phone Number</label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border rounded"
                      placeholder="(123) 456 - 7890"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full p-2 border rounded"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="termsUser"
                      name="termsAccepted"
                      className="mr-2"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      required={true}
                    />
                    <label htmlFor="termsUser" className="text-sm">
                      I accept the
                      <Link href="#">
                        <span className="text-blue-500 underline">Terms and Conditions</span>
                      </Link>
                      .
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="policyUser"
                      name="policyAccepted"
                      className="mr-2"
                      checked={formData.policyAccepted}
                      onChange={handleChange}
                      required={true}
                    />
                    <label htmlFor="policyUser" className="text-sm">
                      I have reviewed and agree to How&apos;s
                      <Link href="#">
                        <span className="text-blue-500 underline">Privacy policy</span>
                      </Link>
                      .
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    disabled={
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.email ||
                      !formData.phoneNumber ||
                      !formData.password ||
                      !formData.termsAccepted ||
                      !formData.policyAccepted ||
                      customerDataPostLoading
                    }
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

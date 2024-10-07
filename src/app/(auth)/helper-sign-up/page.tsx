"use client";
import { useState } from "react";
import Image from "next/image";
import MainIcon from "@/assets/images/main-ico.png";
import GoogleIcon from "@/assets/images/google.webp";

export default function HelperSignupForm() {
  const [showBusinessFields, setShowBusinessFields] = useState(false);
  const [isLicensed, setIsLicensed] = useState(false);
  const [isInsured, setIsInsured] = useState(false);

  return (
    <section className="bg-orange-500 py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="text-center">
            <Image src={MainIcon} alt="Main Icon" className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Become helper!</h2>
            <p className="mt-2">
              I already have an account?{" "}
              <a href="/shared/login" className="text-orange-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>

          {/* Google Signup */}
          <div className="mt-6 text-center">
            <button className="flex items-center justify-center w-full bg-white text-gray-700 border rounded-md shadow-sm py-2">
              <Image src={GoogleIcon} alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
            <p className="text-gray-500 mt-2">Or create your own account here!</p>
          </div>

          {/* Signup Form */}
          <form className="mt-6 space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="individualRadio"
                  name="accountType"
                  value="individual"
                  onChange={() => setShowBusinessFields(false)}
                  className="form-radio"
                  required
                />
                <label htmlFor="individualRadio" className="ml-2">
                  Individual
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="businessRadio"
                  name="accountType"
                  value="business"
                  onChange={() => setShowBusinessFields(true)}
                  className="form-radio"
                  required
                />
                <label htmlFor="businessRadio" className="ml-2">
                  Business
                </label>
              </div>
            </div>

            {showBusinessFields && (
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="form-label">Business Legal Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                    placeholder="Business Legal Name"
                  />
                </div>
                <div className="flex-1">
                  <label className="form-label">Business EIN/Tax ID Number</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                    placeholder="Business EIN/Tax ID Number"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="(123) 456 - 7890"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="Street"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="form-label">Apartment</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="Apt"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="City"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="form-label">State</label>
                <select
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                >
                  <option value="">Select State</option>
                  <option value="Miami">State 1</option>
                  <option value="Florida">State 2</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="form-label">Zip Code</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="form-label">Service Location</label>
                <select
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Miami">Miami</option>
                  <option value="Florida">Florida</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  id="licensedCheck"
                  onChange={(e) => setIsLicensed(e.target.checked)}
                />
                <label htmlFor="licensedCheck" className="ml-2">
                  Licensed or not?
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  id="insuredCheck"
                  onChange={(e) => setIsInsured(e.target.checked)}
                />
                <label htmlFor="insuredCheck" className="ml-2">
                  Insured or not?
                </label>
              </div>
            </div>

            {isLicensed && (
              <div className="mt-4">
                <label className="form-label">Upload License</label>
                <input
                  type="file"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                />
              </div>
            )}

            {isInsured && (
              <div className="mt-4">
                <label className="form-label">Upload Insurance</label>
                <input
                  type="file"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                />
              </div>
            )}

            <div className="mt-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-start mt-4 gap-2">
              <input type="checkbox" id="termsUser" className="form-checkbox" required />
              <label htmlFor="termsUser">
                I accept the{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Terms and Conditions.
                </a>
              </label>
            </div>

            <div className="flex items-center justify-start mt-2 gap-2">
              <input type="checkbox" id="policyUser" className="form-checkbox" required />
              <label htmlFor="policyUser">
                I have reviewed and agree to Hows{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Privacy Policy.
                </a>
              </label>
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import MainIcon from "@/assets/images/main-ico.png";
import CallToAction from "@/components/home/CallToAction";
// import ContinueWithGoogoe from "@/components/button/ContinueWithGoogoe";
import Link from "next/link";
import { useCreateHelperMutation } from "@/redux/api/authApi";
import { toast, Bounce } from "react-toastify";

export default function HelperSignupForm() {
  const [createHelperFn, { isLoading }] = useCreateHelperMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    accountType: "individual",
    businessLegalName: "",
    businessEIN: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    serviceLocation: "",
    isLicensed: false,
    isInsured: false,
    password: "",
    termsAccepted: false,
    policyAccepted: false,
    licenseFile: null,
    insuranceFile: null,
    IndivusualSsnORtaxId: "",
    serviceType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" && files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if license file is required and not provided
    if (formData.isLicensed && !formData.licenseFile) {
      toast.warn("Please select your license file.", {
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
      return;
    }

    // Check if insurance file is required and not provided
    if (formData.isInsured && !formData.insuranceFile) {
      toast.warn("Please select your insurance file.", {
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
      return;
    }

    const data = new FormData();

    const bodyData = {
      email: formData?.email,
      password: formData?.password,
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      checkType: formData?.accountType,
      ssnId: formData?.IndivusualSsnORtaxId,
      phoneNumber: formData?.phone,
      address: formData?.address,
      apartment: formData?.apartment,
      city: formData?.city,
      state: formData?.state,
      zipCode: formData?.zipCode,
      serviceLocation: formData?.serviceLocation,
      serviceType: formData?.serviceType,
    };
    data.append("data", JSON.stringify(bodyData));

    if (formData.licenseFile) {
      data.append("licenseImage", formData?.licenseFile);
    }
    if (formData.insuranceFile) {
      data.append("insurenceImage", formData?.insuranceFile);
    }

    try {
      const response = await createHelperFn(data).unwrap();
      console.log(response);
      if (response.success) {
        toast.success("Account created successfully!", {
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
      // else if (response.error) {
      //   toast.error(response.error, {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //     transition: Bounce,
      //   });
      // } else {
      //   toast.error("Something Went wrong", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //     transition: Bounce,
      //   });
      // }
    } catch (error) {
      // console.log(error?.data?.message);
      // console.log(error);
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
    <>
      <section className="bg-orange-500 py-16 border-t border-gray-300 mb-40">
        <div className="container mx-auto px-6 -mb-40">
          <div className="text-center mb-5">
            <Image
              src={MainIcon}
              alt="Main Icon"
              className="w-12 h-12 mx-auto mb-4 z-10 bg-white p-2 rounded-full overflow-visible"
            />
            <h2 className="text-7xl font-bold text-white ">Become helper!</h2>
            <p className="mt-2 text-white font-semibold text-xl">
              I already have an account?{" "}
              <Link href="/sign-in" className="text-black hover:underline">
                Sign In
              </Link>
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="max-w-xl mx-auto">
              {/* Google Signup */}
              {/* <div className="mt-6 text-center">
                <ContinueWithGoogoe />
                <p className="text-gray-500 mt-2">Or create your own account here!</p>
              </div> */}

              {/* Signup Form */}
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
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
                      checked={formData.accountType === "individual"}
                      onChange={handleChange}
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
                      checked={formData.accountType === "business"}
                      onChange={handleChange}
                      className="form-radio"
                      required
                    />
                    <label htmlFor="businessRadio" className="ml-2">
                      Business
                    </label>
                  </div>
                </div>

                {formData.accountType === "individual" && (
                  <div>
                    <label className="form-label"> SSN/Tax ID Number</label>
                    <input
                      type="text"
                      name="IndivusualSsnORtaxId"
                      onChange={handleChange}
                      required={formData.accountType === "individual"}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                    />
                  </div>
                )}

                {formData.accountType === "business" && (
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                      <label className="form-label">Business Legal Name</label>
                      <input
                        type="text"
                        name="businessLegalName"
                        value={formData.businessLegalName}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                        placeholder="Business Legal Name"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="form-label">Business EIN/Tax ID Number</label>
                      <input
                        type="text"
                        name="businessEIN"
                        value={formData.businessEIN}
                        onChange={handleChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                      placeholder="Street"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="form-label">Apartment</label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
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
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="form-label">State</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
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
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="form-label">Service Location</label>
                    <select
                      name="serviceLocation"
                      value={formData.serviceLocation}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                      required
                    >
                      <option value="">Select Location</option>
                      <option value="Miami">Miami</option>
                      <option value="Florida">Florida</option>
                    </select>
                  </div>
                </div>

                <div className="contact-col contact-col-4">
                  <div className="form-box">
                    <label className="form-label text-gray-700 font-medium mb-2 block">Professional Service Type</label>
                    <select
                      className="form-select w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange} // Make sure this is present
                      required={true}
                    >
                      <option value="" selected disabled>
                        Select Service Type
                      </option>
                      <option value="Electrical">Electrical</option>
                      <option value="AC_HVAC">A/C HVAC</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Roofing">Roofing</option>
                      <option value="Construction">Construction</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isLicensed"
                      checked={formData.isLicensed}
                      onChange={handleChange}
                      className="form-checkbox"
                      id="licensedCheck"
                    />
                    <label htmlFor="licensedCheck" className="ml-2">
                      Licensed or not?
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isInsured"
                      checked={formData.isInsured}
                      onChange={handleChange}
                      className="form-checkbox"
                      id="insuredCheck"
                    />
                    <label htmlFor="insuredCheck" className="ml-2">
                      Insured or not?
                    </label>
                  </div>
                </div>

                {formData.isLicensed && (
                  <div className="mt-4">
                    <label className="form-label">Upload License</label>
                    <input
                      type="file"
                      name="licenseFile"
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                    />
                  </div>
                )}

                {formData.isInsured && (
                  <div className="mt-4">
                    <label className="form-label">Upload Insurance</label>
                    <input
                      type="file"
                      name="insuranceFile"
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                    />
                  </div>
                )}

                <div className="mt-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-start mt-4 gap-2">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    id="termsUser"
                    className="form-checkbox"
                    required
                  />
                  <label htmlFor="termsUser">
                    I accept the{" "}
                    <a href="#" className="text-orange-500 hover:underline">
                      Terms and Conditions.
                    </a>
                  </label>
                </div>

                <div className="flex items-center justify-start mt-2 gap-2">
                  <input
                    type="checkbox"
                    name="policyAccepted"
                    checked={formData.policyAccepted}
                    onChange={handleChange}
                    id="policyUser"
                    className="form-checkbox"
                    required
                  />
                  <label htmlFor="policyUser">
                    I have reviewed and agree to Hows{" "}
                    <a href="#" className="text-orange-500 hover:underline">
                      Privacy Policy.
                    </a>
                  </label>
                </div>

                <div className="mt-6">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-orange-500 disabled:bg-orange-400 text-white py-3 rounded-md hover:bg-orange-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}

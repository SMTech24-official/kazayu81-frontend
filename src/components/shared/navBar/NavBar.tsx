"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import logo
import logo from "@/assets/images/whitelogo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentRoute = usePathname();
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <nav className="bg-orange-500 p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}

        <Image src={logo} alt="logo" className="h-12 w-24" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center justify-center">
          <div className="flex gap-8">
            <Link href="/">
              <span className={`text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>Home</span>
            </Link>
            <Link href="/help-services">
              <span className={`text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
                Help Services
              </span>
            </Link>
            <Link href="#">
              <span className={`text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
                About Us
              </span>
            </Link>
            <Link href="#">
              <span className={`text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
                Contact Us
              </span>
            </Link>
          </div>
          <div className="flex gap-4 font-bold">
            <Link href={"/helper-sign-up"}>
              <button className="bg-white text-black px-4 py-3 rounded-md shadow">Become helper &rarr;</button>
            </Link>
            <Link href={"/user-sign-up"}>
              <button className="border-2 border-white text-white px-4 py-[9px] rounded-md">Find helper</button>{" "}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`lg:hidden mt-4 flex flex-col gap-5 transition-all duration-500 ease-in ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link href="/">
          <span className={`block text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
            Home
          </span>
        </Link>
        <Link href="/help-services">
          <span className={`block text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
            Help Services
          </span>
        </Link>
        <Link href="#">
          <span className={`block text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
            About Us
          </span>
        </Link>
        <Link href="#">
          <span className={`block text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
            Contact Us
          </span>
        </Link>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <Link href="/helper-sign-up">
            <button className="bg-white text-black px-4 py-2 rounded-md shadow w-fit">Become helper &rarr;</button>
          </Link>
          <Link href={"/user-sign-up"}>
            {" "}
            <button className="border-2 border-white text-white px-4 py-2 rounded-md w-fit">Find helper</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

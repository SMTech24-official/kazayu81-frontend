import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/Transparentbg.png";
import { SiMinutemailer } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="bg-[#eef6f9] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-5 space-y-8 md:space-y-0">
          {/* Footer Logo & Description */}
          <div className="md:w-1/3">
            <Link href="/" className="block">
              <Image src={Logo} alt="Logo" className="w-24 h-auto" />
            </Link>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inspiring and elevating your creativity.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3 md:border-l md:pl-5">
            <h5 className="text-lg font-bold text-gray-900">Quick Links</h5>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:w-1/3 md:border-l md:pl-5">
            <h5 className="text-lg font-bold text-gray-900">Newsletter</h5>
            <p className="text-gray-600 mt-4">
              Subscribe to our newsletter to stay updated with our latest products and offers.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 border border-orange-500 rounded-l-md focus:outline-none"
                />
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
                  <SiMinutemailer />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-600 text-sm">Copyright © 2024 Hows – All Rights Reserved.</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

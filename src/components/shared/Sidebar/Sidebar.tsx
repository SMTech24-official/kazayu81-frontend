"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { X, Package, Gift, Clock, CheckCircle, User, DollarSign, Settings, BookAIcon } from "lucide-react";
import profileImage from "@/assets/images/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  const user = useSelector((state: RootState) => state.user.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentRoute = usePathname();

  const settingsLink = user?.role === "CUSTOMER" ? "/update-user-profile" : "/update-helper-profile";
  const openPage = user?.role === "CUSTOMER" ? "/open" : "/help-search";

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div
        className={`fixed inset-y-0 left-0 w-72 top-[90px] lg:top-[74px]  bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="bg-orange-500 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={profileImage} className="rounded-full" width={40} height={40} alt="profile image" />
            <div>
              <h2 className="text-white font-semibold">Zulgarnain</h2>
              <p className="text-white text-xs">zulgarnaintech@gmail.com</p>
              <div className="flex items-center">
                <span className="text-yellow-300">★</span>
                <span className="text-white text-xs ml-1">4.4</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-white hover:text-orange-500">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { icon: <Package className="mr-2 h-4 w-4" />, label: "Open", link: openPage },
              {
                icon: <Gift className="mr-2 h-4 w-4" />,
                label: "Free Visit Requests!",
                link: "/free-visit-requests",
              },
              {
                icon: <Clock className="mr-2 h-4 w-4" />,
                label: "In-progress",
                link: "/in-progress",
              },
              {
                icon: <BookAIcon className="mr-2 h-4 w-4" />,
                label: "Saved",
                link: "/saved",
              },
              {
                icon: <CheckCircle className="mr-2 h-4 w-4" />,
                label: "Completed",
                link: "/completed",
              },
              { icon: <User className="mr-2 h-4 w-4" />, label: "Account", link: "#" },
              {
                icon: <DollarSign className="mr-2 h-4 w-4" />,
                label: "Earnings",
              },
              {
                icon: <Settings className="mr-2 h-4 w-4" />,
                label: "Settings",
                link: "#",
                options: [
                  {
                    icon: <FaUser className="mr-2 h-4 w-4" />,
                    label: "Profile",
                    link: settingsLink,
                  },
                  {
                    icon: <RiLockPasswordFill className="mr-2 h-4 w-4" />,
                    label: "Password",
                    link: "/change-password",
                  },
                ],
              },
            ].map((item, index) => (
              <li key={index}>
                <div>
                  <Link className="flex items-center justify-between" href={item.link || "#"}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-between text-lg ${currentRoute === item.link ? "bg-gray-200" : ""}`}
                      onClick={item.options ? toggleDropdown : undefined}
                    >
                      <span className="flex items-center">
                        {item.icon}
                        {item.label}
                      </span>
                      {item.options && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Button>
                    {/* show an dropdown icon if options is availabe */}
                  </Link>
                  {item?.options && dropdownOpen && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item?.options?.map((option, idx) => (
                        <li key={idx}>
                          <Link href={option.link}>
                            <Button
                              variant="ghost"
                              className={`w-full justify-start text-lg ${
                                currentRoute === option.link ? "bg-gray-200" : ""
                              }`}
                            >
                              {option.icon}
                              {option.label}
                            </Button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

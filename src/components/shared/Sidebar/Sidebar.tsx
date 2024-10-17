"use client";
import { Button } from "@/components/ui/button";
import { X, Package, Gift, Clock, CheckCircle, User, DollarSign, Settings } from "lucide-react";
import profileImage from "@/assets/images/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  const user = useSelector((state: RootState) => state.user.user);

  const settingsLink = user?.role === "CUSTOMER" ? "/update-user-profile" : "/update-helper-profile";

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
              { icon: <Package className="mr-2 h-4 w-4" />, label: "Open", link: "/open" },
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
                link: settingsLink,
              },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.link || "#"}>
                  <Button variant="ghost" className="w-full justify-start text-lg">
                    {item.icon}
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

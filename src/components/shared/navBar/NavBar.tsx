"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import logo
import logo from "@/assets/images/whitelogo.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { removeUser } from "@/redux/slice/usersSlice";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user.user);
  // console.log(user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const currentRoute = usePathname();
  const handleLogOut = async () => {
    // e.preventDefault();
    await signOut({ redirect: false });
    localStorage.removeItem("accessToken");
    dispatch(removeUser());
    console.log("logout");
    toast.success("Logged out successfully", {
      position: "bottom-right",
    });
    router.push("/");
  };

  const DashboardLink = user?.role === "HELPER" ? "/open" : "/dashboard";

  return (
    <nav className="bg-orange-500 p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}

        <Image onClick={() => router.push("/")} src={logo} alt="logo" className="h-12 w-24 cursor-pointer" />

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
            <Link href="/about-us">
              <span className={`text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
                Contact Us
              </span>
            </Link>
          </div>
          {/* if user is avilabe show dropdoen */}

          {user && (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    {/* <AvatarImage src={user?.profileImage} alt="@shadcn" /> */}
                    {
                      // if user has profile image show it
                      // else show first letter of first name and last name
                      user?.profileImage ? (
                        <Image src={user?.profileImage} alt="profile" height={50} width={50} />
                      ) : (
                        <AvatarFallback>
                          {
                            // firstName
                            // lastName
                            // get first letter of first name and last name
                            user?.firstName.charAt(0) + user?.lastName.charAt(0)
                          }
                          {/* CN */}
                        </AvatarFallback>
                      )
                    }
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>
                    {user?.firstName} {` `} {user?.lastName}
                  </DropdownMenuLabel>
                  <DropdownMenuLabel>{user?.customerId} </DropdownMenuLabel>
                  <DropdownMenuLabel>{user?.role} </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="cursor-pointer" onClick={() => router.push(DashboardLink)}>
                    Dashboard
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onClick={handleLogOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {!user && (
            <div className="flex gap-4 font-bold">
              <Link href={"/helper-sign-up"}>
                <button className="bg-white text-black px-4 py-3 rounded-md shadow">Become helper &rarr;</button>
              </Link>
              <Link href={"/user-sign-up"}>
                <button className="border-2 border-white text-white px-4 py-[9px] rounded-md">Find helper</button>{" "}
              </Link>
            </div>
          )}
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
        <Link href="/about-us">
          <span className={`block text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
            About Us
          </span>
        </Link>
        <Link href="/contact">
          <span className={`block text-white hover:text-gray-200 ${currentRoute === "#" ? "font-bold" : ""}`}>
            Contact Us
          </span>
        </Link>

        {!user && (
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Link href="/helper-sign-up">
              <button className="bg-white text-black px-4 py-2 rounded-md shadow w-fit">Become helper &rarr;</button>
            </Link>
            <Link href={"/user-sign-up"}>
              {" "}
              <button className="border-2 border-white text-white px-4 py-2 rounded-md w-fit">Find helper</button>
            </Link>
          </div>
        )}

        {user && (
          <>
            <p className="text-white">
              {user?.firstName} {` `} {user?.lastName}{" "}
            </p>
            {/* <p className="text-white">{user?.id} #kfrkcfodf2589@ </p> */}

            <p className="text-white">{user?.email}</p>

            <Link className="bg-white text-black px-4 py-2 rounded-md shadow w-fit" href="/open">
              {" "}
              Dashboard{" "}
            </Link>

            <Button className="w-fit bg-white text-orange-500" onClick={handleLogOut}>
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}

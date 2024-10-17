"use client";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useSocialLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ContinueWithGoogoe = () => {
  const [socialLoginFn, { data: userData }] = useSocialLoginMutation();
  const { data: session, status } = useSession();
  console.log("Status", session?.user, status);
  const router = useRouter();

  const name = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;

  // session
  //   {
  //     "name": "Nahid Mahmud",
  //     "email": "nahidmahmudn2@gmail.com",
  //     "image": "https://lh3.googleusercontent.com/a/ACg8ocIslpZQdPHwGYn3UkMnVlnHTfuub6Lrb7tKZH_4bEeO7H2mlbA=s96-c"
  // }

  // db
  //   {
  //     "email": "string2@gmail.com",
  //     "firstName": "string",
  //     "lastName": "string",
  //     "profileImage": "string"
  // }

  const handleLogin = async () => {
    await signIn("google");
    // console.log("res form handleSocial login", res);
  };

  // check user in session and  set the post data to db
  // get response and set token in local storage
  useEffect(() => {
    if (session?.user) {
      // split the name with space into first name and last name
      const [firstName, lastName] = name ? name.split(" ") : ["", ""];

      socialLoginFn({
        email: email,
        firstName: firstName,
        lastName: lastName,
        profileImage: image,
      });
    }
  }, [session?.user, socialLoginFn, email, name, image]);

  // set userData to local storage

  useEffect(() => {
    if (userData) {
      console.log("User form post to db", userData?.data);
      localStorage.setItem("accessToken", userData?.data?.accessToken);
      const loadingFn = async () => {
        try {
          await toast.success("Login success");
        } catch (e) {
          console.log(e);
        } finally {
          router.push("/open");
        }
      };
      loadingFn();
    }
  }, [userData, router]);

  return (
    <>
      <button
        onClick={handleLogin}
        className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 py-2 bg-white border border-gray-500 rounded shadow mb-4 group hover:shadow-lg duration-300"
      >
        <FcGoogle size={25} />
        <span className="group-hover:opacity-50 duration-300 ">Continue with Google</span>
      </button>
    </>
  );
};

export default ContinueWithGoogoe;

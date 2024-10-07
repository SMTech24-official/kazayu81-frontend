import React from "react";
import { FcGoogle } from "react-icons/fc";

const ContinueWithGoogoe = () => {
  return (
    <>
      <button className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 py-2 bg-white border border-gray-500 rounded shadow mb-4 group hover:shadow-lg duration-300">
        <FcGoogle size={25} />
        <span className="group-hover:opacity-50 duration-300 ">
          Continue with Google
        </span>
      </button>
    </>
  );
};

export default ContinueWithGoogoe;

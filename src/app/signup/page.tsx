import TextInput from "@/components/TextInput";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="mx-auto mt-20 ">
      <div className="w-80 flex justify-center items-center flex-col gap-1 ">
        <h1 className="font-bold font-sans text-lg">Sign up</h1>
        <Link
          href={`#`}
          className=" font-sans active:border-none h-12 w-[100%] flex justify-center rounded-full border  hover:border-blue-600 shadow-sm font-abel text-black  py-3 px-6 mt-4 "
        >
          Sign up with Google
        </Link>
        <div className="flex items-center gap-4 mx-4 mt-3">
          <div className="h-[0.5px] bg-black w-32" />
          <p className="font-sans text-gray-500">OR</p>
          <div className="h-[0.5px] bg-black w-32" />
        </div>
        <TextInput placeholder="Full Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <div className="flex justify-between items-start mt-4">
          <input type="checkbox" className="w-10 h-4 " />
          <p className="text-gray-500 font-sans text-sm">
            I agree with the processing of personal data
            <span className="text-pink-500"> Privacy Policy</span>
          </p>
        </div>
        <Link
          href={`#`}
          className=" font-sans bg-pink-500 active:border-none h-12 w-[100%] flex justify-center rounded-full border  hover:border-blue-600 shadow-sm font-abel text-white  py-3 px-6 mt-4 "
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Signup;

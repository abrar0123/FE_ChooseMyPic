"use client";
import TextInput from "@/components/TextInput";
import { useAuthLoginMutation, useTestDataQuery } from "@/store/authApi";
import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

// enum accountType {
//   user = "User",
//   creater = "Creater",
// }
// interface accountI {
//   account: accountType;
// }

const accounts = [
  { id: 0, title: "User" },
  { id: 1, title: "Creater" },
];

const Signup = () => {
  const [authLogin, { data, isLoading }] = useAuthLoginMutation();
  const [secondPage, setsecondPage] = useState(false);
  const [index, setindex] = useState(-1);

  const userSignupHandler = async () => {
    const details = {
      fullName: "John Doe",
      email: "john3@example.com",
      password: "password123",
      userType: "user",
    };
    // const signup = await authLogin(details);
    setsecondPage(true);
    console.log("userSignupHandler : signup ");
  };

  return (
    <div className="mx-auto mt-20 ">
      <div className="w-80 flex justify-center items-center flex-col gap-1 ">
        {secondPage ? (
          <>
            <h1 className="font-bold font-sans text-lg">Second Page</h1>
          </>
        ) : (
          <React.Fragment>
            <h1 className="font-bold font-sans text-lg">Sign up</h1>

            <h1 className="font-bold text-xl font-sans mb-2 text-blue-500">
              Choose an Account
            </h1>
            <div className="flex items-center gap-3">
              {accounts.map((item, i) => {
                return (
                  <div
                    className="rounded-full border-2 border-blue-600 px-20 py-2 cursor-pointer"
                    style={{
                      background: index === item.id ? "#ef5656" : "white",
                    }}
                    onClick={() => setindex(item.id)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <Link
              href={`#`}
              className=" font-sans active:border-none h-12 w-[100%] flex justify-center rounded-full border  hover:border-blue-600 shadow-sm font-abel text-black  py-3 px-6 mt-4 "
            >
              <FaGoogle
                className="flex items-center justify-center m-1 relative right-10"
                style={{ color: "red" }}
              />
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
              onClick={userSignupHandler}
              className=" font-sans bg-pink-500 active:border-none h-12 w-[100%] flex justify-center rounded-full border  hover:border-blue-600 shadow-sm font-abel text-white  py-3 px-6 mt-4 "
            >
              Sign up
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Signup;

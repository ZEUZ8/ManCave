//signup
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

const Register = ({ setRegister, setLogin }) => {
  const handle = () => {
    setRegister(false);
    setLogin(true);
  };
  return (
    <div className="bg-white rounded-md py-5 px-4 w-full mx-[3rem] relative">
      <div className="absolute inset-0 grid h-fit justify-end items-start m-5 my-6">
        <p onClick={() => setRegister(false)}>
          <MdOutlineClose />
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-lg font-bold">Sign Up</p>
      </div>
      <div className="rounded-xl bg-white flex flex-col py-5 gap-3 ">
        <input
          type="text"
          placeholder="Name"
          className="rounded-md border px-3 p-1"
        />
        <input
          type="text"
          placeholder="Phone"
          className="rounded-md border px-3 p-1"
        />
        <input
          type="text"
          placeholder="Email"
          className="rounded-md border px-3 p-1"
        />
        <input
          type="text"
          placeholder="Password"
          className="rounded-md border px-3 p-1"
        />
      </div>
      <div className="p-2 bg-blue-200 rounded-md">continue with google</div>
      <div className="p-2 py-4 flex justify-center items-center">
        <button
          className="rounded-md px-5 p-1 bg-blue-500 
      "
        >
          <p className="text-white font-bold">Sign Up</p>
        </button>
      </div>
      <div
        className="flex justify-center items-center cursor-pointer "
        onClick={handle}
      >
        <p className="font-light text-xs text-blue-500 underline underline-offset-2 ">
          Login?
        </p>
      </div>
    </div>
  );
};

export default Register;
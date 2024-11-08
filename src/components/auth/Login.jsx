//login
import Link from "next/link";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Login = ({ setLogin, setRegister }) => {
  const handle = () => {
    setLogin(false);
    setRegister(true);
  };
  return (
    <div className="bg-white rounded-md py-5 px-4 w-full mx-[3rem] relative">
      <div className="absolute inset-0 grid h-fit justify-end items-start m-5 my-6 ">
        <p className="font-bold" onClick={() => setLogin(false)}>
          <MdOutlineClose />
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-lg font-bold">Login</p>
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
          <p className="text-white font-bold">Login</p>
        </button>
      </div>
      <div className="flex justify-center items-center cursor-pointer " onClick={handle}>
        <p  className="font-light text-xs text-blue-500 underline underline-offset-2 ">
          SignUp?
        </p>
      </div>
    </div>
  );
};

export default Login;
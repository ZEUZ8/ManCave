"use client";
import { RegisterValidation } from "@/app/validations/registerValidation";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdEmail, MdOutlineClose } from "react-icons/md";

const Login = ({ setLogin, setRegister }) => {
  const handle = () => {
    setLogin(false);
    setRegister(true);
  };

  const onSubmit = async () => {
    console.log('inside the onsubmit')
    try {
      const response = await axios.post("/api/auth/login",values);
      console.log(response,' the response','sinan000999000990099');
    } catch (err) {
      console.log("errro in frontend Lgin", err);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleReset,handleSubmit} =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: RegisterValidation.pick(['email','password']),
      onSubmit,
    });

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
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Email"
          className="rounded-md border px-3 p-1"
        />
        {touched.email && errors.email && (
          <p className="text-xs font-light text-red-500">{errors.email}</p>
        )}

        <input
          name="password"
          value={values.password}
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Password"
          className="rounded-md border px-3 p-1"
        />
        {touched.password && errors.password && (
          <p className="text-xs font-light text-red-500">{errors.password}</p>
        )}
      </div>

      <div className="p-2 bg-blue-200 rounded-md">continue with google</div>
      <div className="p-2 py-4 flex justify-center items-center">
        <button
        type="button"
          className="rounded-md px-5 p-1 bg-blue-500 
        "
        >
          <p className="text-white font-bold" onClick={handleSubmit}>Login</p>
        </button>
      </div>
      <div
        className="flex justify-center items-center cursor-pointer "
        onClick={handle}
      >
        <p className="font-light text-xs text-blue-500 underline underline-offset-2 ">
          SignUp?
        </p>
      </div>
    </div>
  );
};

export default Login;

"use client";
import React, { use } from "react";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { RegisterValidation } from "@/app/validations/registerValidation";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Register = ({ setRegister, setLogin }) => {
  const router = useRouter();
  // Handling the Register and login modal with states
  const handle = () => {
    setRegister(false);
    setLogin(true);
  };

  //functionality for the submit button for the register form
  const onSubmit = async (values) => {
    try {
      const response = await axios.post("/api/auth/register", values, {
        validateStatus: (status) => status >= 200 && status <= 500,
      });
      console.log(response, " consoling the response");
      console.log("consoling chumma for testing ");
      if (response && response?.data?.msg == "register successful") {
        toast.success(response.data.msg, {
          autoClose: 2000,
          onClose: () => router.push("/home"),
        });
      }
      {
        toast.error(response.data.msg);
      }
    } catch (err) {
      console.log("testing somehting for validation");
      console.error("Error in frontend Registration", err);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        email: "",
        password: "",
      },
      validationSchema: RegisterValidation,
      onSubmit,
    });

  return (
    <div className="bg-white rounded-md py-5 px-4 w-full mx-[3rem] relative">
      <ToastContainer />
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
          name="name"
          placeholder="Name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          className="rounded-md border px-3 p-1"
        />
        {touched.name && errors.name && (
          <p className="text-xs font-light text-red-500">{errors.name}</p>
        )}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={values.phone}
          onBlur={handleBlur}
          onChange={handleChange}
          className="rounded-md border px-3 p-1"
        />
        {touched.phone && errors.phone && (
          <p className="text-xs font-light text-red-500">{errors.phone}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          className="rounded-md border px-3 p-1"
        />
        {touched.email && errors.email && (
          <p className="text-xs font-light text-red-500">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          className="rounded-md border px-3 p-1"
        />
        {touched.password && errors.password && (
          <p className="text-xs font-light text-red-500">{errors.password}</p>
        )}
      </div>
      <div className="p-2 bg-blue-200 rounded-md">continue with google</div>
      <div className="p-2 py-4 flex justify-center items-center">
        <button
          className="rounded-md px-5 p-1 bg-blue-500"
          type="button"
          onClick={handleSubmit}
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

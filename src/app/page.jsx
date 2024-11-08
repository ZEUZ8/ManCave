"use client";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div className="h-[100vh] w-full relative">
      {login && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
          <div className=" flex justify-center w-full ">
            <Login setLogin={setLogin} setRegister={setRegister}/>
          </div>
        </div>
      )}
      {register && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black ">
          <div className="flex justify-center items-center w-full">
            <Register setLogin={setLogin} setRegister={setRegister} />
          </div>
        </div>
      )}

      <div>
        <div>
          <button onClick={() => setLogin(true)}> Login</button>
        </div>
        <div>
          <button onClick={() => setRegister(true)}>Register</button>
        </div>
      </div>
    </div>
  );
}
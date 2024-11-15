"use client";
import Button from "@/components/auth/Button";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div className="h-[100vh] w-full relative grid grid-rows-10 ">
      {login && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
          <div className=" flex justify-center w-full ">
            <Login setLogin={setLogin} setRegister={setRegister} />
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
      <div className="row-span-6 border-b border-black">
        <div className="flex justify-center items-center h-full">Logo</div>
      </div>
      <div className="row-span-4 flex flex-col justify-start items-center m-4 gap-3">
        <div>
          <div onClick={()=>setLogin(true)}>
            <Button button={"Login"} />
          </div>
        </div>
        <div>
          <div onClick={()=>setRegister(true)}>
            <Button button={"Register"} />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import axios from "axios";
import Image from "next/image";

import { IoIosTimer } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import Profile from "@/components/profile/Profile";

export default function Home() {
  const admin = {
    username: "unais",
    email: "basil@gmail.com",
    password: "Basil@123",
  };

  const handleClick = async () => {
    try {
      const response = await axios.post("/api/admin/login", admin);
      console.log(response, " the response coming forn the backend");
    } catch (err) {
      console.log(err, " errro in the frontEnd login section");
    }
  };

  return (
    <main className="relative">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#feda6a"
            d="M0,256L34.3,224C68.6,192,137,128,206,128C274.3,128,343,192,411,208C480,224,549,192,617,202.7C685.7,213,754,267,823,272C891.4,277,960,235,1029,197.3C1097.1,160,1166,128,1234,128C1302.9,128,1371,160,1406,176L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className=" h-[80svh] flex  justify-center items-center">
        <img src="barber.jpg" className="opacity-70" alt="" />
        {/* <p>adisfnasdf </p> */}
      </div>
      <div className="h-[80svh] p-[1rem]  absolute inset-0">
        <div className="flex justify-center text-4xl font-extrabold  text-white">
          Man Cave
        </div>
        <div className="flex flex-col gap-5 justify-center items-center h-full">
          
          <div className=" w-full">
            <Profile name={"Unais"} designation={"Hair Dresser"}/>
          </div>
          <div className="w-full">
            <Profile name={"Basil"} designation={"Hair Dresser"}/>
          </div>
          {/* <div className="bg-[#fea36a]  shadow-lg py-5 px-2 w-full h-[10rem] rounded-md grid ">
            <div className="grid grid-cols-6 ">
              <div className="col-span-2  flex justify-center items-center">
              <div className=" flex  w-[7rem] justify-center items-center overflow-hidden aspect-square rounded-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQF5gWz6wsBbvNl28YWltxQlBuAHnnblGgt0ajNME_Ds9roH7fCEOQAUquyRNmfaJZSI&usqp=CAU"
                  alt="profile"
                  className="  shadow-xl  "
                />
            
              </div>
              </div>
              <div className="col-span-4  px-3 flex flex-col items-center justify-between">
                <div>
                  <p className=" text-center font-bold text-lg ">Unais</p>
                  <div className="py-2 ">
                    <div className="grid grid-cols-2 ">
                      <p className="flex justify-start items-center gap-2 font-bold"><span>Contact</span><FaPhone/></p>
                      <p className="flex justify-start items-center gap-2"><span>:</span>8590183715</p>
                    </div>
                    <div className="grid grid-cols-2 ">
                      <p className="flex justify-start items-center gap-2 font-bold"><span>person</span><IoMdPerson/></p>
                      <p className="flex justify-start items-center gap-2"><span>:</span>5</p>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center w-full bg-white rounded-lg shadow-lg gap-1 active:scale-95  py-1">
                  <p className="font-bold text-lg">
                    <IoIosTimer />
                  </p>{" "}
                  <p className="font-bold">Book Now</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="w-full flex justify-center items-center">
          <div className="flex justify-center items-center px-5 py-3 border shadow-lg w-fit rounded-lg font-bold text-xl active:scale-95 ">
            <p>Book now</p>
          </div>
        </div> */}
      </div>
    </main>
  );
}

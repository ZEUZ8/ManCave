"use client";
import axios from "axios";
import Image from "next/image";

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
            fill-opacity="1"
            d="M0,256L34.3,224C68.6,192,137,128,206,128C274.3,128,343,192,411,208C480,224,549,192,617,202.7C685.7,213,754,267,823,272C891.4,277,960,235,1029,197.3C1097.1,160,1166,128,1234,128C1302.9,128,1371,160,1406,176L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className=" z-[-20] h-full justify-center items-center">
          <img src="barber.jpg" alt="" />
        </div>
      <div className="h-[100svh] p-[1.5rem]  absolute inset-0">
        <div className="flex justify-center text-2xl font-bold  text-white">
          Man Cave
        </div>
        <div className="flex flex-col gap-5 justify-center items-center h-full">
          <div className="bg-yellow-400  shadow-lg p-5 w-full h-[20%] rounded-md">
            <div>unaise</div>
          </div>
          <div className="bg-orange-400  shadow-lg p-5 w-full h-[20%] rounded-md">
            <div>baseil</div>
          </div>
        </div>
      </div>
    </main>
  );
}

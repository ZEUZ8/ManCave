"use client";
import React from "react";
import { useRouter } from "next/navigation";


const Footer = () => {
  const router = useRouter();
  return (
    <div className=" p-2 flex justify-end gap-3">
      <div>
        <button
          className="bg-blue-600 text-xs px-3 hover:bg-blue-500 active:scale-105 p-2 text-white rounded-xl "
          onClick={() => router.push("/bookings")}
        >
          Booking list
        </button>
      </div>
      <div>
        <button
          className="bg-blue-600 text-xs px-3 hover:bg-blue-500 active:scale-105 p-2 text-white rounded-xl "
          onClick={() => router.push("/mybooking")}
        >
          My Booking
        </button>
      </div>
    </div>
  );
};

export default Footer;

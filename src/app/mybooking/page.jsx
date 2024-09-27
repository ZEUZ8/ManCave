'use client'
import { GoArrowLeft } from "react-icons/go";
import React from "react";
import { useRouter } from "next/navigation";
import MyBookings from "@/components/bookings/MyBookings";

const Mybooking = () => {
  const data = {
    userName : "sinan",
    phone : 8590183715,
    bookingId : 23,
    bookingNo : 3,
    adult : 1,
    child : 0 ,
  }
  const router = useRouter();
  return (
      <div className="p-4 ">
        <div
          className="grid grid-cols-5 cursor-pointer mb-5 "
          onClick={() => router.push("/")}
        >
          <div className="col-span-1 flex justify-center items-center gap-1">
            <p className="text start-0 text-xl">
              <GoArrowLeft />
            </p>
            <p className="text start-0 text-sm">Home</p>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <p className="text-center font-bold text-xl">Your Booking</p>
          </div>
        </div>
        <MyBookings data={data}/>
      </div>
  );
};

export default Mybooking;

'use client'
import BookingList from "@/components/bookings/BookingList";
import { GoArrowLeft } from "react-icons/go";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Bookings = () => {
  const router = useRouter()
  const [bookingList,setBookingList] = useState([2,35,52,5,2,5,2,5,2,5,3,2,52,35,2,35,2,3])
  return (
    <div className="p-4 ">
      <div className="grid grid-cols-5 cursor-pointer mb-5 " onClick={()=>router.push('/')}>
        <div className="col-span-1 flex justify-center items-center gap-1">
          <p className="text start-0 text-xl"><GoArrowLeft/></p>
          <p className="text start-0 text-sm">Home</p>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <p className="text-center font-bold text-xl">Booking List</p>
        </div>
      </div>
      {bookingList.map((bookingList, i)=> <BookingList count={i+1} bookingList={bookingList} />)}
    </div>
  );
};

export default Bookings;

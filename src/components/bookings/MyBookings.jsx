import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

const MyBookings = ({ data }) => {
  return (
    <div className="bg-white shadow-xl border  p-4 px-5 rounded-lg mb-4 overflow-x-auto">
      <div className="w-full flex justify-between items-center border-b border-gray-800 pb-3 mb-3">
        <p className="text-sm"> Booking No : {data.bookingNo}</p>
        <div className="flex gap-2">
          <div className="flex justify-center items-center active:scale-105 rounded-lg  p-2 px-3 gap-1 shadow-lg  bg-gradient-to-r from-purple-200 to bg-red-200 ">
            <p>
              <MdOutlineDeleteOutline />
            </p>
          </div>
          <div className="flex justify-center items-center   active:scale-105 rounded-lg  p-2 px-3 gap-1 shadow-lg bg-gradient-to-r from-pink-200 to-blue-200">
            <p>
              <FiEdit2 />
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-2">
        <p>user Name</p>
        <p>: {data.userName}</p>
      </div>
      <div className="grid grid-cols-2 mb-2">
        <div>Phone</div>
        <div>: {data.phone} </div>
      </div>
      <div className="grid grid-cols-2 mb-2">
        <p>Adult </p>
        <p>: {data.adult}</p>
      </div>
      <div className="grid grid-cols-2 mb-2">
        <p>Child</p>
        <p>: {data.child}</p>
      </div>
    </div>
  );
};

export default MyBookings;

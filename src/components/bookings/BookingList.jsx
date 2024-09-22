import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

const BookingList = ({count, bookingList }) => {
  const owner = bookingList === 52
  const router = useRouter()
  const [editOption, setEditOption] = useState(false);
  useEffect(() => {
    console.log(editOption, " otpion riht for the user");
  }, [editOption]);
  return (
    <div
      className={`${
        owner
          ? "bg-gradient-to-r from-blue-100 to bg-pink-200"
          : "bg-white borde"
      } shadow-xl    p-4 px-5 rounded-lg mb-4 overflow-x-auto`}
      onClick={() =>
        setEditOption((prev) => {
          if (owner === true) {
            return !prev;
          }
        })
      }
    >
      <div className={`flex justify-between ${editOption && "hidden"}`}>
        <div>
          <p>{count}</p>
        </div>
        <div>
          <p>sinan</p>
        </div>
        <div className="flex gap-3">
          <div>Adult : 2</div>
          <div> Child : 1 </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className={`${
          !editOption && "hidden"
        } flex  justify-center items-center  `}
      >
        <div className="flex  items-center justify-center border bg-white bg-opacity-20 border-white backdrop-blur-3xl p-2 rounded-lg gap-2"
        onClick={()=>router.push("/users/mybooking")}
        >
          <p className="text-sm ">Edit</p>
          <p className=" text-md">
            <FiEdit />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingList;

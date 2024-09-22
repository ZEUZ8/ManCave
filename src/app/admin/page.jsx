"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    try {
      const response = await axios.get("/api/admin/booking/Getting");
      console.log(response.data.response);
      setBookings(response?.data?.response);
    } catch (err) {
      console.log(err, "error at getting uesrs in front end ");
    }
  };

  const handleFinish = (item)=>{
    console.log('the name')
    // console.log(' the name should be in the console', item)
    // if(item.adult > 1){
    //   console.log('adult count greater than 1')
    //   console.log(item.adult)
    // }else if(item.child > 1 ){
    //   console.log('child count greater than 1')
    //   console.log(item.child)
    // }else{
    //   console.log(' consling the chagnes int eh update ')
    //   try{
    //     // const response = await axios.delete("/api/admin/booking/Deleting")
    //     console.log('asdflajsdflk')
    //   }catch(err){
    //     console.log(err,' consoling the error in the terminal')
    //   }
    // }
    // }

  }

  return (
    <div className="">
      <div className="flex justify-center items-center p-2 py-5 underline underline-offset-4">
        <h1 className="text-gray-700 text-xl font-bold">Bookings for Unais </h1>
      </div>
      <div className=" h-[90dvh] overflow-auto scrollbar-hide">
      {bookings.length > 0 ? (
        bookings.map((item) => (
          <div
            key={item?.userName}
            className="mt-3 m-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
          >
            <div className="flex justify-between items-center pt-3 px-3">
              <h5 className=" text-md font-medium text-gray-900 dark:text-white  underline underline-offset-4">
                {item.userName.toUpperCase()}
              </h5>

              <div className="flex px-3 gap-2">
                <p className="flex justify-center items-center  text-white text-sm">
                  <FaPhoneAlt />
                </p>
                <a className="text-md font-medium text-white  " href={`tel:${item.mobile}`}>
                  {item.mobile}{" "}
                </a>
              </div>
            </div>
            <div className="py-2 px-3  text-white">
              <div className="grid grid-cols-2 py-1 ">
                <p>Number of Adult</p>
                <p> : {item?.adult}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Number of Child</p>
                <p>: {item?.child}</p>
              </div>
            </div>
            <div className="flex gap-2 p-2 justify-end pb-3">
              <a className="py-2 px-4  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Cancel
              </a>
              <p
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>handleFinish}
              >
                Finished
              </p>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="w-full h-[90svh] flex justify-center items-center">
            <img src="/empty.jpg" alt="empty Data" />
          </div>
        </>
      )}
      </div>
      
    </div>
  );
};

export default Admin;

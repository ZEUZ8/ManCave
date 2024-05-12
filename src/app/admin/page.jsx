"use client";
import axios from "axios";
import React, { useEffect,useState } from "react";

const page = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    try {
      const response = await axios.get("/api/admin/booking/Getting");
      console.log(response.data.response)
      setBookings(response?.data?.response)
    } catch (err) {
      console.log(err, "error at getting uesrs in front end ");
    }
  };

  return (
    <div classNameName="p-3">
      <div className="flex justify-center items-center p-2">
        <h1 className="text-gray-700 text-xl font-bold">Bookings for Unais </h1>
      </div>
      {bookings.length && bookings.map((item)=>(
        <div className="mt-3 m-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="flex justify-between items-center pt-3 px-3">
          {/* <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          /> */}
          <h5 className=" text-md font-medium text-gray-900 dark:text-white">
            {item.userName.toUpperCase()}
          </h5>
          {/* <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span> */}
          <div className="flex gap-2">
            <a className="py-2 px-4  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Cancel
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Finished
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
      </div>
      ))}
    </div>
  );
};

export default page;

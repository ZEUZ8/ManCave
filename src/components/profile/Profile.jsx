import React from "react";
import "./profile.css";

const Profile = ({ name, designation }) => {
  return (
    <div class="w-full max-w-sm bg-white  p-5 rounded-lg boxShadow">
      <div class="flex flex-col items-center ">
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col justify-center items-center">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQF5gWz6wsBbvNl28YWltxQlBuAHnnblGgt0ajNME_Ds9roH7fCEOQAUquyRNmfaJZSI&usqp=CAU"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 ">{name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {designation}
            </span>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold pb-3 pt-2">Bookings</h1>
            <div className="text-gray-500 py-2">
              <div className="grid grid-cols-2 gap-1">
                <p>Booking</p>
                <p>: 5</p>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <p>Hour</p>
                <p>: 2</p>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <p>Status</p>
                <p>: working</p>
              </div>
            </div>
            <div class="w-full">
              <div className="flex justify-center">
                <a className="w-full flex justify-center items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="mt-4 md:mt-6">
          <p className="text-xs font-extralight text-gray-500 py-1">
            Book a slot next in row
          </p>
          <div className="flex justify-center">
            <a className="w-full flex justify-center items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Book
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;

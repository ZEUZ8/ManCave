"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { bookingValidation } from "@/validation/bookingValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const BookingModal = ({ handleModal, barberName }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    handleModal();
  };
  const onSubmit = async () => {
    try {
      const response = await axios.post("/api/user/Bookings/bookingOnRow", values);
      console.log(response, " the resone");
      if (response?.data?.success) {
        resetForm();
        toast.success("Booked👍, will notify you", {
          autoClose: 2000,
          onClose: () => handleClick(),
        });
      } else {
        console.log(response.data);
        if (response?.data?.message === "Already booked") {
          // handleClick()
          setOpen(true);
        }
      }
    } catch (err) {
      console.log(err, " error in the booking");
      toast.error(`something went wrong 😕 try later`, {
        autoClose: 2000,
      });
    }
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: {
      userName: "",
      mobile: "",
      barberName: barberName ? barberName : "",
    },
    validationSchema: bookingValidation,
    onSubmit,
  });
  return (
    <div>
      <ToastContainer />

      <div
        id="authentication-modal"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full  flex justify-center items-center w-full md:inset-0  max-h-full"
      >
        {open && (
          <div
            id="popup-modal"
            tabindex="-1"
            class="h-full  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0  max-h-full"
          >
            <div class="relative p-4 w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-600">
                <button
                onClick={()=>setOpen(false)}
                  type="button"
                  class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                  <svg
                    class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Already booked a slot today with this number you sure?
                  </h3>
                  <button
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-700 focus:ring-3 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                  onClick={()=>setOpen(false)}
                    data-modal-hide="popup-modal"
                    type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {!open && (
          <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow ">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 class="text-xl font-semibold text-gray-900">
                  Book your slot next in row
                </h3>
                <button
                  type="button"
                  class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  onClick={handleClick}
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-4 md:p-5">
                <form class="space-y-4">
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 ">
                      Your Name
                    </label>
                    <input
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="userName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 w-full"
                      placeholder="Name"
                    />
                    {errors.userName && touched.userName && (
                      <h1 className="text-xs pt-2 text-rose-500 animate-bounce px-2">
                        {errors.userName}
                      </h1>
                    )}
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 ">
                      Mobile
                    </label>
                    <input
                      name="mobile"
                      placeholder="Mobile"
                      value={values.mobile}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg p-3 w-full "
                    />
                    {errors.mobile && touched.mobile && (
                      <h1 className="text-xs pt-2 text-rose-500 animate-bounce px-2">
                        {errors.mobile}
                      </h1>
                    )}
                  </div>

                  <h1 className="text-xs font-semibold text-gray-500">
                    want to book a slot on a{" "}
                    <span className="text-blue-600 active:scale-90">
                      spesific date?
                    </span>{" "}
                  </h1>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;

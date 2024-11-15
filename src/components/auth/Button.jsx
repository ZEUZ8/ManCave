import React from "react";

const Button = ({ button }) => {
  return (
    <div className="w-[7rem] border flex justify-center items-center rounded-full p-1 px-4 border-black cursor-pointer">
      <p className="font-medium">{button}</p>
    </div>
  );
};

export default Button;

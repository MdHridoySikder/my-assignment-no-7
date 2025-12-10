import React from "react";

const Resolved = ({ Order }) => {
  return (
    <div className="bg-[#E0E7FF] rounded-sm p-5 shadow ">
      <div className=" text-center font-bold  ">{Order.title}</div>

      <h1 className="  text-center">Completed!</h1>
    </div>
  );
};

export default Resolved;

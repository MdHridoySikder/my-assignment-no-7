import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ Order, handleTask }) => {
  return (
    <div>
      <div className="shadow p-5 rounded-sm">
        <h2 className="font-semibold text-xl  text-center ">{Order.title}</h2>
        <div className=" flex justify-center">
          <button
            onClick={() => handleTask(Order)}
            className="btn btn-block text-center mt-2 rounded-sm p-2 bg-[#02A53B]"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;

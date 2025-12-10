import { useState } from "react";

const Ordercard = ({ Order, handleOrder }) => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    handleOrder(Order);
    setVisible(false);
  };

  if (!visible) return;

  return (
    <div
      onClick={() => handleClick()}
      className="bg-white rounded-sm p-4 shadow-xl gap-4"
    >
      <div className="flex-1">
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-semibold text-sm text-[#001931] truncate whitespace-nowrap overflow-hidden w-[70%]">
            {Order.title}
          </h2>

          <button>
            <span className="flex items-center text-sm gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full shrink-0">
              <span className="w-1 h-1 bg-green-600 rounded-full"></span>
              {Order.status}
            </span>
          </button>
        </div>

        <p className="text-gray-600 text-xs mt-1">
          {Order.description.slice(0, 90)}...
        </p>

        <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <p className="mr-1">#{Order.id}</p>
            <p className="text-red-500 mr-1">{Order.priority1}</p>
            <p className="text-yellow-500 mr-1">{Order.priority2}</p>
            <p className="text-green-500 mr-1">{Order.priority3}</p>
          </div>

          <p>{Order.customer}</p>
          <p>{Order.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Ordercard;

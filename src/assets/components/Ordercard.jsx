const Ordercard = ({ Order, handleOrder }) => {
  // console.log(Order);

  return (
    <div
      onClick={() => handleOrder(Order)}
      className="bg-white rounded-sm p-4 shadow-xl gap-4"
    >
      <div className="flex-1">
        {/* Title + Status */}
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-semibold text-sm truncate whitespace-nowrap overflow-hidden w-[70%]">
            {Order.title}
          </h2>

          <span className="flex items-center text-sm gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full shrink-0">
            <span className="w-1 h-1 bg-green-600 rounded-full"></span>
            {Order.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs mt-1">
          {Order.description.slice(0, 90)}...
        </p>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
          {/* Order Number + Priority */}
          <div className="flex items-center gap-2">
            <p className="font-sm">#{Order.id}</p>
            <p className="text-red-500 font-semibold">{Order.priority}</p>
          </div>

          {/* Customer */}
          <p className="text-xs">{Order.customer}</p>

          {/* Date */}
          <p>{Order.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Ordercard;

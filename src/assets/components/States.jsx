const States = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* total progress */}
        <div className="bg-gradient-to-br from-purple-600 to-fuchsia-300 mt-2 rounded-xl p-5 py-10 text-white">
          <div className="text-xl text-center">In-Progress</div>
          <div className="text-4xl text-center">0</div>
        </div>

        {/* 2nd cart */}
        <div>
          <div className=" bg-gradient-to-tr  from-green-300 to-green-600 mt-2 rounded-xl p-5 py-10 text-white">
            <div className="text-xl text-center">Resolved</div>
            <div className="text-4xl text-center">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;

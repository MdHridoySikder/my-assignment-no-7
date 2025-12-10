const States = ({ inProgress, ResolvedTaskTotal }) => {
  return (
    <div className=" flex flex-col md:flex-row justify-around mt-20 container mx-auto gap-5 px-13 relative">
      <div className="bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] rounded-xl relative">
        <div className=" absolute top-15 bottom left-5 right-5 text-center">
          <span className="text-white">In-Progress</span>
          <br />
          <span className="text-white text-4xl font-bold">{inProgress}</span>
        </div>
        <div className="flex gap-25">
          <img className="w-60 h-55" src={"/public/vector1.png"} alt="" />
          <img
            className="scale-x-[-1] w-60 h-55"
            src={"/public/vector1.png"}
            alt=""
          />
        </div>
      </div>
      <div className="bg-gradient-to-bl from-[#54CF68] to-[#00827A] rounded-xl relative">
        <div className=" absolute top-15 bottom left-5 right-5 text-center">
          <span className="text-white">Resolved</span>
          <br />
          <span className="text-white text-4xl font-bold">
            {ResolvedTaskTotal}
          </span>
        </div>
        <div className="flex gap-25 ">
          <img className="w-60 h-55" src={"/public/vector1.png"} alt="" />
          <img
            className="scale-x-[-1] w-60 h-55"
            src={"/public/vector1.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default States;

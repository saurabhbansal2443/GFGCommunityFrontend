import React from "react";

const FeedProfile = () => {
  return (
    <div className="bg-slate-200 p-2  w-1/6 flex-col items-center justify-center h-[25%] rounded-lg  border-[0.5px] border-gray-600" >
      <div className="avatar h-1/2 w-full  flex items-center justify-between pt-[5%]">
        <div className="w-16 rounded-full  ">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <div className="flex justify-center items-end  text-sm text-gray-500 flex-col h-2/4 w-3/4">
          <p className="font-bold"> Saurabh Bansal </p>
          <p> saurabhbansal2443@gmail.com </p>
        </div>
      </div>
      <div  className="flex  items-center justify-around  mt-[10%]">
        <div className="stats shadow text-sm text-[#E88D67] bg-slate-500">
          <div className="stat text-sm">
            <div className="stat-title text-black font-bold">Followers</div>
            <div className="stat-value text-sm">89,400</div>
          </div>
        </div>

        <div className="stats shadow text-sm text-[#E2BBE9] bg-slate-500">
          <div className="stat text-sm">
            <div className="stat-title text-black font-bold">Followers</div>
            <div className="stat-value text-sm">89,400</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedProfile;

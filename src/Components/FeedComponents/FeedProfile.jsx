import React from "react";

const FeedProfile = () => {
  return (
    <div className="bg-slate-200 w-1/5 flex-col items-center justify-center h-[30%] rounded-3xl  border-[0.5px] border-gray-600" >
      <div className="avatar flex  items-center justify-center pt-[5%]">
        <div className="w-28 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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

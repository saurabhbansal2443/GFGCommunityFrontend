import React, { useState } from "react";

const FeedAdder = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-2/5 h-24 bg-slate-200 border-[0.5px] border-gray-600 rounded-3xl relative">
      <div className="flex justify-around items-center mx-4 my-2">
        <div className="avatar w-1/5">
          <div className="w-20 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <button
          onClick={() => {
            setModal(!modal);
          }}
          className="rounded-3xl bg-gray-300 text-black border-none h-14 w-4/5 font-bold flex justify-evenly items-center"
        >
          <span>Write your Thoughts or Feelings</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path>
            </svg>
          </span>
        </button>
      </div>
      {modal && (
        <div
          onClick={() => {
            setModal(!modal);
          }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-1/2 h-1/2 bg-slate-500 flex justify-center flex-col items-center p-4 rounded-xl"
          >
            <textarea
              reSize="none"
              className="textarea textarea-info h-3/4 w-[90%] text-2xl  "
              placeholder="Post Your thoughts/Ideas "
            ></textarea>
            <div className="w-[90%] h-1/4 flex justify-between items-center ">
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            <button className="btn btn-outline btn-primary"> Add Post </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedAdder;

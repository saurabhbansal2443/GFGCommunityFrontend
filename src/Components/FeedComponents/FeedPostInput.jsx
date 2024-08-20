import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const FeedPostInput = () => {
  const [content, setContent] = useState("");
  let user = useSelector((store)=> store.user.user );
  let {userName , profilePicture , email } = user ;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <img
          src={profilePicture}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <p className="font-semibold">{userName}</p>
          <Link to="/community/profile" className="text-sm text-gray-500">view profile </Link>
        </div>
      </div>

      <textarea
        className="w-full p-2 border border-gray-300 rounded-md text-black bg-[#DBE2EF] focus:outline-none focus:ring-2 focus:ring-[#112D4E]"
        placeholder="Describe what’s on your mind..."
        rows="4"
        maxLength={1000}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex justify-between items-center mt-4">
        <button className="flex items-center text-[#3F72AF] font-semibold">
          <span className="mr-2">➕</span>
          Upload Image
        </button>
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">
            Draft
          </button>
          <button className="bg-[#3F72AF] text-white px-4 py-2 rounded-full hover:bg-green-600">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedPostInput;

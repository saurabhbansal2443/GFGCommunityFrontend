import React from "react";
import profileDp from "../../assets/images.jpeg"

const FeedProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md text-center p-6">
      <img
        src={profileDp}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4">Saurabh</h2>
      <p className="text-gray-600">MAIT</p>
      <p className="text-gray-500">@saurabhbansal2443</p>

      <div className="flex justify-between mt-4 text-gray-600">
        <div>
          <p className="font-semibold">0</p>
          <p>Followers</p>
        </div>
        <div>
          <p className="font-semibold">0</p>
          <p>Following</p>
        </div>
      </div>

      <button className="mt-4 bg-[#3F72AF] text-white px-4 py-2 rounded-full hover:bg-green-600">
        My Posts
      </button>
    </div>
  );
};

export default FeedProfile;

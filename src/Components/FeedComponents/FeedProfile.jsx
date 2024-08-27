import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userDp from "../../assets/images.jpeg";

const FeedProfile = () => {
  let user = useSelector((store) => store.user.user);
  console.log(user);
  let {
    userName,
    profilePicture,
    email,
    followerCount,
    followingCount,
   
  } = user;
  return (
    <div className="bg-white rounded-lg shadow-md text-center p-6">
      <img
        src={profilePicture != null ? profilePicture : userDp}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4">{userName}</h2>

      <p className="text-gray-500">{email}</p>

      <div className="flex justify-between mt-4 text-gray-600">
        <div>
          <p className="font-semibold">{followerCount}</p>
          <p>Followers</p>
        </div>
        <div>
          <p className="font-semibold">{followingCount}</p>
          <p>Following</p>
        </div>
      </div>

      <Link
        to="/community/profile"
        className="mt-4 bg-[#3F72AF] text-white px-4 py-2 rounded-full hover:bg-green-600"
      >
        My Posts
      </Link>
    </div>
  );
};

export default FeedProfile;

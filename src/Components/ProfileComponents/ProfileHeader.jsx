import React from 'react';
import profileDp from "../../assets/images.jpeg"
import { useSelector } from 'react-redux';

const ProfileHeader = () => {
  let user = useSelector((store)=> store.user.user );
  let {userName , profilePicture , email } = user ;
  return (
    <div className="bg-[#DBE2EF] p-6 text-white flex items-center">
      <img
        src={profilePicture}
        alt="Profile"
        className="w-20 h-20 rounded-full border-2 border-white"
      />
      <div className="ml-4">
        <h1 className="text-2xl font-bold text-black ">{userName}</h1>
        <p className="text-gray-500">{email}</p>
      </div>
      <button className="ml-auto bg-[#3F72AF] hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeader;

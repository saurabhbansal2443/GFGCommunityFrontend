import React from 'react';
import profileDp from "../../assets/images.jpeg"

const ProfileHeader = () => {
  return (
    <div className="bg-[#DBE2EF] p-6 text-white flex items-center">
      <img
        src={profileDp}
        alt="Profile"
        className="w-20 h-20 rounded-full border-2 border-white"
      />
      <div className="ml-4">
        <h1 className="text-2xl font-bold text-black ">Andy Horwitz</h1>
        <p className="text-gray-500">New York</p>
      </div>
      <button className="ml-auto bg-[#3F72AF] hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeader;

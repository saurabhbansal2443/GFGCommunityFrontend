import React from 'react';
import { useSelector } from 'react-redux';


const ProfileStats = () => {
  let user = useSelector((store)=> store.user.user);
  let {followerCount,
    followingCount,
    blogCount} = user;
  return (
    <div className="bg-[#3F72AF] p-4 text-center text-white grid grid-cols-3">
      <div>
        <p className="text-xl font-semibold">{blogCount}</p>
        <p className="text-gray-300">Post</p>
      </div>
      <div>
        <p className="text-xl font-semibold">{followerCount}</p>
        <p className="text-gray-300">Followers</p>
      </div>
      <div>
        <p className="text-xl font-semibold">{followingCount}</p>
        <p className="text-gray-300">Following</p>
      </div>
    </div>
  );
};

export default ProfileStats;

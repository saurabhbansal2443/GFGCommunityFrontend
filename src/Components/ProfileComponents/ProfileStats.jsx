import React from 'react';

const ProfileStats = () => {
  return (
    <div className="bg-[#3F72AF] p-4 text-center text-white grid grid-cols-3">
      <div>
        <p className="text-xl font-semibold">253</p>
        <p className="text-gray-300">Photos</p>
      </div>
      <div>
        <p className="text-xl font-semibold">1026</p>
        <p className="text-gray-300">Followers</p>
      </div>
      <div>
        <p className="text-xl font-semibold">478</p>
        <p className="text-gray-300">Following</p>
      </div>
    </div>
  );
};

export default ProfileStats;

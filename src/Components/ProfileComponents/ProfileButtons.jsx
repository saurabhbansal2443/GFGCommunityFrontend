import React from 'react';

const ProfileButtons = () => {
  return (
    <div className="flex justify-around bg-[#112D4E] p-4 text-white">
      <button className="bg-[#3F72AF] hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded">
        My Posts
      </button>
      <button className="bg-[#3F72AF] hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded">
        Saved Posts
      </button>
    </div>
  );
};

export default ProfileButtons;

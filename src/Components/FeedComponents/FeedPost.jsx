import React from 'react';

const FeedPost = () => {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <img 
          src="path-to-profile-image" 
          alt="Profile" 
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <p className="font-semibold">Snehasish Das</p>
          <p className="text-sm text-gray-500">University of Calcutta Kolkata • 8 days ago</p>
        </div>
        <button className="ml-auto bg-[#DBE2EF] text-[#3F72AF] px-3 py-1 rounded-full">
          Follow
        </button>
      </div>

      <p className="text-gray-800 mb-4">
        Students aiming to give WB JECA exam for pursuing MCA can see my latest article.
      </p>
      <a href="https://www.geeksforgeeks.org/wbjec..." className="text-blue-500 hover:underline">
        https://www.geeksforgeeks.org/wbjec...
      </a>

      <div className="flex justify-between items-center mt-4 text-gray-600">
        <div className="flex space-x-2">
          <button className="flex items-center">
            <span className="mr-2">❤️</span>
            2 likes
          </button>
          <button className="flex items-center">
            <span className="mr-2">💬</span>
            Add Comment
          </button>
        </div>
        <button className="flex items-center">
          <span className="mr-2">🔖</span>
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default FeedPost;

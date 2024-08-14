import React from 'react';
import dummy from "../../assets/postDummy.jpeg"

const PhotoGallery = () => {
  return (
    <div className="bg-[#DBE2EF] p-6 text-gray-600">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent photos</h2>
        <button className="text-sm text-gray-600 hover:text-white">Show all</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src={dummy} alt="Recent 1" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 2" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 3" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 4" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 2" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 3" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 4" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 2" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 3" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 4" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 2" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 3" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 4" className="w-full h-32 object-cover rounded-lg" />
        <img src={dummy} alt="Recent 4" className="w-full h-32 object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default PhotoGallery;

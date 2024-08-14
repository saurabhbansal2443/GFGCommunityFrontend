import React from "react";

const Job = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <nav className="mt-6">
        <ul className="space-y-4">
          <li className="flex items-center text-[#3F72AF] font-semibold">
            <span className="mr-2">🏠</span>
            Home
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-700">
            <span className="mr-2">💼</span>
            Fresher Jobs
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-700">
            <span className="mr-2">🏢</span>
            Experienced Jobs
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-700">
            <span className="mr-2">📃</span>
            All Job Updates
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-700">
            <span className="mr-2">📝</span>
            Interview Experience
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-700">
            <span className="mr-2">🏫</span>
            Campus Experience
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-700">
            <span className="mr-2">📰</span>
            News
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Job;

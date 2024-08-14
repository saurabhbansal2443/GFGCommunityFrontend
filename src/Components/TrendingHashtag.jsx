import React from "react";

const TrendingHashtags = () => {
  const hashtags = [
    "experiences",
    "interviewexperiences",
    "gblog",
    "experiences_qna",
    "softwaretesting",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Top Hashtag Trends</h2>
      <ul className="space-y-4">
        {hashtags.map((hashtag, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-gray-700">#{hashtag}</span>
            <button className="text-green-700">+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingHashtags;

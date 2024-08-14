import React from "react";

const PopularSuggestions = () => {
  const suggestions = [
    { name: "jobs update", followers: "28.7K Followers", posts: "3.2K Posts" },
    { name: "Geetanjali", followers: "97 Followers", posts: "55 Posts" },
    { name: "EKAM IAS ACADEMY", followers: "67 Followers", posts: "34 Posts" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Popular Around You 🔥</h2>
      <ul className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-semibold text-gray-700">
              {suggestion.name}
            </span>
            <span className="text-sm text-gray-500">{suggestion.followers}</span>
            <span className="text-sm text-gray-500">{suggestion.posts}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularSuggestions;

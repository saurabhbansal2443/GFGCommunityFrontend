import React from "react";
import FeedPost from "./FeedPost";

const MainFeed = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <FeedPost />
      <FeedPost />
    </div>
  );
};

export default MainFeed;

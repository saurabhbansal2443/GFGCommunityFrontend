import React from "react";
import Job from "./JobComponents/Job";
import TrendingHashtags from "./TrendingHashtag";
import PopularSuggestions from "./PopularSuggestion";
import MainFeed from "./FeedComponents/MainFeed";
import FeedProfile from "./FeedComponents/FeedProfile";
import FeedPostInput from "./FeedComponents/FeedPostInput";

const Home = () => {
  return (
    <div className="bg-[#DBE2EF] min-h-screen px-4 pt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="order-1 md:order-1 lg:order-1 space-y-6">
        <div className="shadow-lg rounded-lg p-4">
          <FeedProfile />
        </div>
        <div className="shadow-lg rounded-lg p-4">
          <Job />
        </div>
      </div>
      <div className="order-3 md:order-2 lg:col-span-2 space-y-6">
        <div className="shadow-lg rounded-lg p-4">
          <FeedPostInput />
        </div>
        <div className="shadow-lg rounded-lg p-4">
          <MainFeed />
        </div>
      </div>
      <div className="order-2 md:order-3 lg:order-2 space-y-6">
        <div className="shadow-lg rounded-lg p-4">
          <TrendingHashtags />
        </div>
        <div className="shadow-lg rounded-lg p-4">
          <PopularSuggestions />
        </div>
      </div>
    </div>
  );
};

export default Home;

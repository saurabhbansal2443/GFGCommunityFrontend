import React from "react";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProfileStats from "./ProfileComponents/ProfileStats";
import ProfileButtons from "./ProfileComponents/ProfileButtons";
import PhotoGallery from "./ProfileComponents/PhotoGallery";

const Profile = () => {
  return (
    <div className="mt-6 min-h-screen  max-w-3xl mx-auto bg-[#F9F7F7] text-white rounded-lg overflow-hidden">
      <ProfileHeader />
      <ProfileStats />
      <ProfileButtons />
      <PhotoGallery />
    </div>
  );
};

export default Profile;

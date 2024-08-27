import React, { useState } from 'react';
import userDp from "../../assets/images.jpeg";
import { useSelector , useDispatch } from 'react-redux';
import EditProfileModal from './EditProfileModal'; // Importing modal
import axios from 'axios';
import { userUpdateURL , userProfilePictureURL } from '../../Utility/Constant';
import { updateUserName , updateProfilePicture } from "../../Store/userSlice";


const ProfileHeader = () => {
  let user = useSelector((store) => store.user.user);
  let { userName, profilePicture, email } = user;

  let dispatch = useDispatch(); 

  // State for modal and form inputs
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  // Open modal function
  const openModal = () => {
    setModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setModalOpen(false);
  };

  // Handle file change
  const handleFileChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  // API calling for both name and profile Picture ;

    const changeUserName = async (userName)=>{
      let response  = await axios.patch(userUpdateURL , {userName : userName } , {
        headers: { 'Content-type': 'application/json' },
        withCredentials: true,
      })
      if(response?.data?.result == true ){
        dispatch(updateUserName(userName));
      }else{
        console.log( response?.data?.message )
      } 
    }

    const changeprofilePicture = async (newProfilePicture)=>{
      let response  = await axios.patch(userProfilePictureURL , {profilePicture : newProfilePicture } , {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      })
      console.log( response)
      if(response?.data?.result == true ){
        console.log( response?.data?.profilePicture )
         dispatch(updateProfilePicture(response.data.data.profilePicture));
      }else{
        console.log( response?.data?.message )
      } 
    }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if username is empty or unchanged
    if (!newUserName.trim()) {
      alert('Username cannot be empty.');
      return;
    }
    // if (newUserName === userName && !newProfilePicture) {
    //   alert('No changes made to update.');
    //   return;
    // }

    if(newUserName != userName){
      await changeUserName(newUserName);
    }

    if (newProfilePicture){
      console.log(newProfilePicture)
      await changeprofilePicture(newProfilePicture);
    }

    // Logic to update profile (e.g., dispatch Redux action or API call)
    console.log("New Username:", newUserName);
    console.log("New Profile Picture:", newProfilePicture);

  
  
    // Close the modal after submission
    closeModal();
  };

  return (
    <div className="bg-[#DBE2EF] p-6 text-white flex items-center">
      <img
        src={profilePicture != null ? profilePicture : userDp}
        alt="Profile"
        className="w-20 h-20 rounded-full border-2 border-white"
      />
      <div className="ml-4">
        <h1 className="text-2xl font-bold text-black">{userName}</h1>
        <p className="text-gray-500">{email}</p>
      </div>
      <button
        onClick={openModal}
        className="ml-auto bg-[#3F72AF] hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
      >
        Edit Profile
      </button>

      {/* Render the modal */}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        userName={newUserName}
        setUserName={setNewUserName}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        profilePicture={profilePicture}
      />
    </div>
  );
};

export default ProfileHeader;

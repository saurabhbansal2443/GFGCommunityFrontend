import React, { useState } from 'react';

const EditProfileModal = ({ isOpen, onClose, userName, setUserName, handleFileChange, handleSubmit, profilePicture }) => {
  const [selectedFileName, setSelectedFileName] = useState(null); // To store the selected image file name

  if (!isOpen) return null; // If the modal is not open, return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

        <form onSubmit={handleSubmit}>
          {/* Username input */}
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={`w-full p-2 border ${!userName.trim() ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
            />
            {!userName.trim() && (
              <p className="text-red-500 text-sm mt-1">Username cannot be empty.</p>
            )}
          </div>

          {/* Profile Picture input */}
          <div className="mb-4">
            <label className="block text-gray-700">Profile Picture:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleFileChange(e);
                setSelectedFileName(e.target.files[0]?.name || null); // Set the selected image name
              }}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {/* Show selected file name if any */}
            {selectedFileName && (
              <p className="text-gray-500 text-sm mt-1">Selected file: {selectedFileName}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;

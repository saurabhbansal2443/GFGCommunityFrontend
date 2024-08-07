import { useState } from 'react';
import axios from 'axios';

const CloudinaryUpload = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      
    }
  };

  const handleUpload = async () => {
    if (!image) {
      console.error('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'community'); // replace with your own upload preset

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dvit6fss4/image/upload', // using your cloud name
        formData
      );
      setImageUrl(response.data.secure_url);
      console.log('Image uploaded successfully:', response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
      console.error('Error details:', error.response.data); // Detailed error message
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
};

export default CloudinaryUpload;

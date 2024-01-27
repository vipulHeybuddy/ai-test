import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setLoading(true); // Set loading to true on upload start

      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('https://aiflooring1.onrender.com/upload', formData);

      // Handle the API response accordingly
      console.log('File uploaded successfully!', response.data.secure_url);

      // Navigate to the next page (replace this with your navigation logic)
      // Example: history.push('/next-page');
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false); // Set loading to false when the API response is received
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  };
  
  const uploadSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
  }; 
  
  const fileInputStyle = {
    display: 'none',
  };

  const chooseFileButtonStyle = {
    backgroundColor: '#6f4507',
    color: 'white',
    padding: '20px', // Increased padding for a longer button
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    fontSize: '18px', // Increase text size
  };

  const uploadButtonStyle = {
    backgroundColor: '#6f4507',
    color: 'white',
    padding: '15px',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
    fontSize: '16px',
  };

  const selectedImageStyle = {
    marginTop: '20px',
    maxWidth: '100%',
    maxHeight: '300px',
    borderRadius: '10px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
  };

  const loaderStyle = {
    position: 'fixed',
   
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '999',
  };

  return (
    <div style={containerStyle}>
      {loading && (
        <div style={loaderStyle}>
         
          <img style={{width: '100vw', height: '100vh', display: 'flex' , justifyContent: 'center', alignItems: 'center',}} src="  https://res.cloudinary.com/dyx9ocdno/image/upload/v1706220244/xp6hddrypkgju5kkfruk.gif" alt="Loading" />
        </div>
      )}
      <div style={uploadSectionStyle}>
        <label htmlFor="fileInput" style={chooseFileButtonStyle}>
          <i className="bi bi-camera-fill" style={{ marginRight: '8px' }}></i>
          Choose File
        </label>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          style={fileInputStyle}
        />
        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected File"
            style={selectedImageStyle}
          />
        )}
      </div>
      {selectedFile && (
        <button style={uploadButtonStyle} onClick={handleUpload}>
          Upload
        </button>
      )}
    </div>
  );
};

export default Upload;

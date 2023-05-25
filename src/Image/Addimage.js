import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Addimage = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button variant="success" onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </Button>
    </div>
  );
};

export default Addimage;
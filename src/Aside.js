import React from "react";
import "./App.css";
import { useState } from "react";

function Aside() {
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
    //   onFileUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <div className="site">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!selectedFile}>
          Upload
        </button>
        <div>{imageUrl && <img src={imageUrl} alt="Uploaded" />}</div>
      </div>
    </div>
  );
}

export default Aside;

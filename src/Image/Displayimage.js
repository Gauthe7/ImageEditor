import React from "react";

const Displayimage = ({ imageUrl }) => {
  return (
    <div style={{position:"relative",overflow:"hidden",height:"300px",width:"200px"}}>
      {imageUrl && (
        <img style={{maxWidth:"100%",maxHeight:"100%",position:"fixed"}}  className=""
          
          src={imageUrl}
          alt="Uploaded"
        />
      )}
    </div>
  );
};

export default Displayimage;

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "./App.css";
import Nav from "./Nav";
import Addimage from "./Image/Addimage";
import Displayimage from "./Image/Displayimage";
import AddText from "./Text/AddText";
import DisplayText from "./Text/DisplayText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="App">
      <Nav />

      {/* <div className="aside">
        {" "}
        <h1>Image </h1>
        <br></br>
        <Addimage onFileUpload={handleFileUpload} />
        <br></br>
      
        <br></br>
        <AddText />
        <br></br>
        <DisplayText />
        <br></br>
      </div>
      <div className="canvas">
      <Displayimage imageUrl={imageUrl} />
      </div> */}

      <Container>
        <Row>
          <Col>
            <div className="aside">
              
              <h1>Image </h1>
              <br></br>
              <Addimage onFileUpload={handleFileUpload} />
              <br></br>
              <br></br>
              <AddText />
              <br></br>
              <DisplayText />
              <br></br>
            </div>
          </Col>
          <Col xs={5}>
            <div className="canvas">
              <Displayimage  imageUrl={imageUrl} />
              <DisplayText/>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

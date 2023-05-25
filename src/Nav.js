import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./Logo.png"

function Nav() {
  return (
    <div>
         <Navbar bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="80"
              height=""
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav
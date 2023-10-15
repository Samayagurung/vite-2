import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


const Navbar1 = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home"><Link to="Navbar1">Home</Link></Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#login">
            <Link to='/'>
            <button className="btn btn-outline-primary">Log In</button>
            </Link>
          </Nav.Link>
          <Nav.Link href="#signup">
            <Link to='/signup'>
            <button className="btn btn-dark">Sign Up</button>
            </Link>
            
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbar1;

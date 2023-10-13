import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>

          <Nav.Link href="#product">Products</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#features">
            <button className="btn btn-outline-primary">Log In</button>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <button className="btn btn-dark">Sign Up</button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbar1;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
        <Navbar bg="light" data-bs-theme="light" style={{ height: "100px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/Navbar1">Navbar</Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/">
            <button className="btn btn-outline-primary me-2">Log In</button>
          </Link>
          <Link href="#signup" to="/signup">
            <button className="btn btn-dark">Sign Up</button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
    </>

  );
};

export default Navbar1;

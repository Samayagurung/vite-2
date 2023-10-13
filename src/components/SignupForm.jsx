import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const SignupForm = ({ handleInput, handleSignup }) => {
  return (
    <>
      <Card className="signupCard">
        <Card.Header className="p-3">
          <h3>Sign Up Form</h3>
        </Card.Header>
        <Card.Body className="p-4">
          <Form>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>
                <h5 className="text-secondary">Full Name</h5>
              </Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>
                <h5 className="text-secondary">Email Address</h5>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleInput}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>
                <h5 className="text-secondary">Password</h5>
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInput}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="p-3">
          <Button
            href="#"
            variant="primary"
            size="lg"
            type="submit"
            className="text-light"
            onClick={handleSignup}
          >
            Sign up
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default SignupForm;

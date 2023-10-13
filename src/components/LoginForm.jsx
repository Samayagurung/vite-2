import React from 'react';
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const LoginForm = ({changeHandle, loginHandle}) => {
  return (
    <>
    <Card className="signupCard">
        <Card.Header className="p-3">
          <h3>Login Form</h3>
        </Card.Header>
        <Card.Body className="p-4">
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>
                <h5 className="text-secondary">Email Address</h5>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={changeHandle}
                
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
                onChange={changeHandle}
                
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
            onClick={loginHandle}
            
          >
            Login
          </Button>
        </Card.Footer>
      </Card>
    </>
  )
}

export default LoginForm
// src/pages/SignIn.js
import React from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

function SignIn() {
  return (
    <div style={{ backgroundColor: '#fff8e1', minHeight: '100vh', paddingTop: '60px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow rounded">
              <Card.Body>
                <h2 className="text-center mb-4" style={{ color: '#6d4c41' }}>Sign In 🔐</h2>
                <p className="text-center text-muted">Access your Ideal Café account here.</p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="warning" type="submit">
                      Log In
                    </Button>
                  </div>

                  <p className="text-center mt-3">
                    Don’t have an account? <a href="/signup">Sign up here</a>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;

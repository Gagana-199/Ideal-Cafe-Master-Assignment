// src/pages/ContactUs.js
import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function ContactUs() {
  return (
    <div style={{ backgroundColor: '#fff8e1', minHeight: '100vh', paddingTop: '60px' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <Card className="p-4 shadow rounded">
              <Card.Body>
                <h2 className="text-center mb-3" style={{ color: '#6d4c41' }}>Contact Us ☎️</h2>
                <p className="text-center text-muted">
                  Have any questions? Reach out to us anytime. We love hearing from you! 💌
                </p>

                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="warning" type="submit">
                      Send Message 📬
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="p-4 shadow-sm rounded bg-light">
              <Card.Body>
                <h4 className="mb-3" style={{ color: '#6d4c41' }}>About Ideal Café ☕</h4>
                <p>
                  At Ideal Café, we believe that every cup tells a story. Located in the heart of the city,
                  we offer a cozy escape from the busy world with handcrafted coffees, freshly baked pastries,
                  and creamy daily specials. Whether you're catching up with friends, reading a book,
                  or just chilling, Ideal Café is your go-to happy place! 🌿
                </p>
                <p>
                  You can visit us at: <strong>lalbhag,Bharath Mall</strong><br />
                  Or email us: <strong>hello@idealcafe.com</strong>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;

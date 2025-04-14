// src/pages/Checkout.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Checkout() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Checkout 💳</h2>

      {submitted ? (
        <Alert variant="success">
          Your order has been placed successfully! 🎉 Thank you for ordering from Ideal Café.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPayment">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select required>
              <option value="">Select...</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Place Order
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default Checkout;

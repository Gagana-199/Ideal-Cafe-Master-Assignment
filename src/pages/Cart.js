import React, { useContext } from 'react';
import { Container, Table, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext'; // 👈 Import context

function Cart() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center" style={{ color: '#7b4b3a' }}>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <Card className="p-4 shadow-sm text-center">
          <h5>Your cart is empty ☕</h5>
          <Link to="/menu">
            <Button variant="outline-secondary" className="mt-3">Go to Menu</Button>
          </Link>
        </Card>
      ) : (
        <Card className="p-4 shadow-sm" style={{ backgroundColor: '#fff8e1' }}>
          <Table responsive bordered hover>
            <thead className="table-warning text-center">
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price (₹)</th>
                <th>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx} className="text-center">
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.qty * item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Row className="mt-4">
            <Col md={6} className="text-start">
              <Link to="/menu">
                <Button variant="outline-secondary">← Continue Shopping</Button>
              </Link>
            </Col>
            <Col md={6} className="text-end">
              <h5 className="mb-3">Total: <strong>₹{total}</strong></h5>
              <Link to="/checkout">
                <Button variant="success">Proceed to Checkout</Button>
              </Link>
            </Col>
          </Row>
        </Card>
      )}
    </Container>
  );
}

export default Cart;

import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartContext } from '../CartContext';

const menuItems = [
  { id: 1, name: 'GadBad', category: 'Coffee', price: 120, image: '/download (16).jpg' },
  { id: 2, name: 'Tiramisu', category: 'Coffee', price: 100, image: '/download (17).jpg' },
  { id: 3, name: 'iPizza(chocolate or vanilla)', category: 'Dessert', price: 90, image: '/download (18).jpg' },
  { id: 4, name: 'Chole Bature', category: 'Dessert', price: 80, image: '/download (19).jpg' },
  { id: 5, name: 'iShake', category: 'Tea', price: 70, image: '/download (20).jpg' },
];

function Menu() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('');
  const { addToCart } = useContext(CartContext);

  const filteredItems = menuItems
    .filter(item => filter === 'All' || item.category === filter)
    .sort((a, b) => {
      if (sort === 'lowToHigh') return a.price - b.price;
      if (sort === 'highToLow') return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ backgroundColor: '#fff8e7', minHeight: '100vh', padding: '40px 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#5d3a00', fontWeight: 'bold' }}>🍰 Ideal Café Menu</h2>

        <Row className="mb-4">
          <Col md={6} className="mb-2">
            <Form.Select onChange={(e) => setFilter(e.target.value)} className="shadow-sm border-0 rounded-pill">
              <option value="All">All Categories</option>
              <option value="Coffee">Icecream</option>
              <option value="Tea">Shakes</option>
              <option value="Dessert">Dessert and food</option>
            </Form.Select>
          </Col>
          <Col md={6}>
            <Form.Select onChange={(e) => setSort(e.target.value)} className="shadow-sm border-0 rounded-pill">
              <option value="">Sort by</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {filteredItems.map(item => (
            <Col md={4} key={item.id} className="mb-4">
              <Card className="shadow-sm h-100 rounded-4" style={{ border: '2px solid #f4e2d8', backgroundColor: '#fffefc' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ fontWeight: '600', color: '#5a3825' }}>{item.name}</Card.Title>
                  <Card.Text className="text-muted">{item.category}</Card.Text>
                  <Card.Text style={{ fontSize: '1.1rem', color: '#d2691e' }}>₹{item.price}</Card.Text>
                  <Button
                    variant="outline-warning"
                    onClick={() => addToCart(item)}
                    className="rounded-pill px-4"
                    style={{ fontWeight: '500' }}
                  >
                    Add to Cart 🛒
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Menu;

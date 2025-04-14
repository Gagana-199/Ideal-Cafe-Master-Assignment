// src/pages/Offers.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Offers() {
  const todayOffers = [
    {
      title: '☕ Buy 1 Get 1 Free Lunch Combo',
      description: 'Double the joy with our classic gulab jamun',
      price: '₹150 for 2',
      image: '/download (21).jpg',
    },
    {
      title: '🍰 Maha North Combo Deal',
      description: 'Puri + vada + dosa = pure love.',
      price: '₹220 only',
      image: '/download (22).jpg',
    },
    {
      title: '🍦 Daily Tasty Combo',
      description: 'Try today’s spicy and flavourful combo',
      price: '₹89 only',
      image: '/images (4).jpg',
    },
    {
      title: '🥐 Spicy Combo',
      description: 'Shezwan noodles+ gobi manchurian + fried rice',
      price: '₹199 only',
      image: '/images (5).jpg',
    },
  ];

  return (
    <div style={{ backgroundColor: '#fff8e1', minHeight: '100vh', paddingTop: '60px' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#6d4c41' }}>🎉 Today's Special Offers 💸</h2>
        <p className="text-center text-muted mb-5">Don't miss out—these limited-time treats are here to make your day sweeter!</p>

        <Row>
          {todayOffers.map((offer, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm rounded border-0">
                <Card.Img variant="top" src={offer.image} />
                <Card.Body>
                  <Card.Title style={{ color: '#4e342e' }}>{offer.title}</Card.Title>
                  <Card.Text>{offer.description}</Card.Text>
                  <h5 style={{ color: '#d84315' }}>{offer.price}</h5>
                  <Button variant="outline-dark" className="mt-2">Grab Offer</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4 mb-5">
          <p style={{ fontStyle: 'italic', color: '#6d4c41' }}>New offers added daily. Check back tomorrow for more surprises! 🎈</p>
        </div>
      </Container>
    </div>
  );
}

export default Offers;

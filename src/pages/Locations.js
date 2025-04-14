// src/pages/Locations.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Locations() {
  const branches = [
    {
      city: 'Bangalore',
      address: '123 Coffee Street, Indiranagar, Bangalore - 560038',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...',
    },
    {
      city: 'Mumbai',
      address: '45 Brew Lane, Bandra West, Mumbai - 400050',
    },
    {
      city: 'Chennai',
      address: '78 Bean Boulevard, T. Nagar, Chennai - 600017',
    },
    {
      city: 'Hyderabad',
      address: '22 Roast Road, Banjara Hills, Hyderabad - 500034',
    },
    {
      city: 'Delhi',
      address: '90 Mocha Marg, Connaught Place, New Delhi - 110001',
    },
  ];

  return (
    <div style={{ backgroundColor: '#fff8e1', minHeight: '100vh', paddingTop: '60px' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#6d4c41' }}>📍 Our Locations</h2>
        <p className="text-center text-muted mb-5">
          Find your cozy corner of Ideal Café near you! We’re brewing happiness in multiple cities 🍵✨
        </p>

        <Row>
          {branches.map((branch, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm rounded border-0">
                <Card.Body>
                  <Card.Title style={{ color: '#4e342e' }}>{branch.city}</Card.Title>
                  <Card.Text>
                    <strong>Address:</strong><br />
                    {branch.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <p style={{ fontStyle: 'italic', color: '#6d4c41' }}>
            More locations coming soon... stay tuned for a café near you! 💖
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Locations;

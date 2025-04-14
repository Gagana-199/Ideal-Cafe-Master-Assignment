// src/pages/Home.js
import React from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: '#fffaf0' }}>
      
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1350&q=80"
            alt="Cozy Cafe Interior"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '10px' }}>
            <h3>Welcome to Ideal Café</h3>
            <p>Your happy place for coffee, desserts, and chill vibes ☕🍰</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/download (14).jpg"
            alt="Ice Cream Special"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '10px' }}>
            <h3>Daily Ice Cream Special!</h3>
            <p>Something new and creamy every day 🍦💫</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/download (15).jpg"
            alt="Desserts and Coffee"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '10px' }}>
            <h3>Desserts That Melt Hearts</h3>
            <p>Sweeten your day with our delicious delights 🍩🧁</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Picks */}
      <Container className="my-5 p-4 rounded" style={{ backgroundColor: '#fff8e1' }}>
        <h2 className="text-center mb-4" style={{ color: '#7b4b3a' }}>Popular Picks</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/download (16).jpg" />
              <Card.Body>
                <Card.Title>GadBad</Card.Title>
                <Card.Text>Smooth and creamy—your go-to icecream</Card.Text>
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                  <Button variant="warning">Order Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/download (17).jpg" />
              <Card.Body>
                <Card.Title>Tiramisu</Card.Title>
                <Card.Text>Buttery, flaky, and filled with chocolatey goodness 🥐🍫</Card.Text>
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                  <Button variant="warning">Order Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/download (18).jpg" />
              <Card.Body>
                <Card.Title>iPizza</Card.Title>
                <Card.Text>Fresh,chocolatey,magical goodness🍨</Card.Text>
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                  <Button variant="warning">Order Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Review Section */}
      <Container className="my-5 p-4 rounded" style={{ backgroundColor: '#ffe4e1' }}>
        <h2 className="text-center mb-4" style={{ color: '#6d4c41' }}>What Our Customers Say 💬</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>🌟🌟🌟🌟🌟</Card.Title>
                <Card.Text>"The vibe here is unmatched. I love the cozy ambiance and the cappuccino is to die for!"</Card.Text>
                <Card.Subtitle className="text-muted mt-2">– Aanya R.</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>🌟🌟🌟🌟🌟</Card.Title>
                <Card.Text>"Perfect spot to hang out with friends. The ice cream special always surprises me!"</Card.Text>
                <Card.Subtitle className="text-muted mt-2">– Karan M.</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>🌟🌟🌟🌟🌟</Card.Title>
                <Card.Text>"Staff are friendly, food is fresh, and the desserts are a dream. Highly recommend!"</Card.Text>
                <Card.Subtitle className="text-muted mt-2">– Priya S.</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

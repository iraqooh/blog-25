import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <h2>Welcome to Our Project Blog</h2>
            <p>This blog documents the contributions of each team member to the Bidirectional Sign Language and Speech Translation System project.</p>
          </Col>
        </Row>
      </Container>
      <div className="banner-section bg-light py-5">
        <Container>
          <Row>
            <Col md={3}>
              <Card className="text-center">
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/atong.jpg"} alt="Atong Kur Abraham" />
                <Card.Body>
                  <Card.Title>Atong Kur Abraham</Card.Title>
                  <Card.Text>Lead Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/ddamulira.jpg'} alt="Ddamulira Owen" />
                <Card.Body>
                  <Card.Title>Ddamulira Owen</Card.Title>
                  <Card.Text>ML Engineer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/mutumba.jpg"} alt="Mutumba Robert" />
                <Card.Body>
                  <Card.Title>Mutumba Robert</Card.Title>
                  <Card.Text>Frontend Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/iraku.jpg"} alt="Iraku Harry" />
                <Card.Body>
                  <Card.Title>Iraku Harry</Card.Title>
                  <Card.Text>Project Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;

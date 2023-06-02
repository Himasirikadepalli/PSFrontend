import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const MyLibraryPage = () => {
  return (
    <Container>
      <h1 className="my-4">My Library</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Projects Uploaded</Card.Title>
              <Card.Text>View and manage your uploaded projects.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Projects Saved</Card.Title>
              <Card.Text>Explore and access your saved projects.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>More Projects</Card.Title>
              <Card.Text>Discover more exciting projects.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyLibraryPage;

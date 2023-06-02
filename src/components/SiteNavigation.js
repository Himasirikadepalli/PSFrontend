import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const SiteNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>Project Showcase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#my-profile">My Profile</Nav.Link>
            <Nav.Link href="#my-library">My Library</Nav.Link>
            <Nav.Link href="#help-desk">Help Desk</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavigation;

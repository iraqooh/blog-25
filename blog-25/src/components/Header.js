import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Automated Exam Grading</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
          <Nav.Link as={Link} to="/abraham">Atong Kur Abraham</Nav.Link>
          <Nav.Link as={Link} to="/owen">Ddamulira Owen</Nav.Link>
          <Nav.Link as={Link} to="/robert">Mutumba Robert</Nav.Link>
          <Nav.Link as={Link} to="/harry">Iraku Harry</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

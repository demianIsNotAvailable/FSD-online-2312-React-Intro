import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Header.css";

function Header() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    const location = useLocation()
    // console.log(location)
    // console.log(location.pathname, "usted está aquí")

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mi app de R&M</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Despliégame!" id="basic-nav-dropdown">
              <NavDropdown.Item href="/characters" className={location.pathname === "/characters" ? "elementTest" : ""}>Characters</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login" className={location.pathname === "/login" ? "elementTest" : ""}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/register" className={location.pathname === "/register" ? "elementTest" : ""}>
                Register
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
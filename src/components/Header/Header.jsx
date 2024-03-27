import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const location = useLocation()
    console.log(location)
    console.log(location.pathname, "usted está aquí")

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mi app de R&M</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Despliégame!" id="basic-nav-dropdown">
              <NavDropdown.Item href="/characters">Characters</NavDropdown.Item>
              <NavDropdown.Item >prueba</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {!isLoggedIn
                ? "Inicia Sesión"
                : "Salir"

                }
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, logout } from '../../app/slices/userSlice';

function Header() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    // el header necesita poder acceder al almacén de redux tanto para leer datos de él,
    // como para escribir ya que desde aquí se hace logout (y un logout es "escribir" unas credenciales vacías)

    // modo escritura para usar con logout
    const dispatch = useDispatch()

    // modo lectura para recuperar los datos que retorna getUserData (en este caso de nuestro state => state.user,
    // es decir, ve el almacén entero pero accede específicamente al pasillo de user)
    const myPassport = useSelector(getUserData)
    const token = myPassport?.token;

    const logMeOut = () => {
      // llamamos al almacén para que nos haga un logout. Como sólo necesitamos vaciar las credenciales, no necesitamos pasar
      // ningún argumento al logout y hemos hardcodeado las credenciales vacías en el propio reducer
      dispatch(logout())
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mi app de R&M {myPassport.vecesLogeado}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Despliégame!" id="basic-nav-dropdown">
              <NavDropdown.Item href="/characters" className={location.pathname === "/characters" ? "elementTest" : ""}>Characters</NavDropdown.Item>
              <NavDropdown.Divider />
              {token ? (
                <NavDropdown.Item onClick={() => logMeOut()}>
                  Logout
                </NavDropdown.Item>
              ) : (
                <p>no hay token</p>
              )}
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
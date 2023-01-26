import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to='/'> React Cookbook </Navbar.Brand>
        <Nav className="navbar">
          <Nav.Link to='/new'> Create Recipe </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header

import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand> <Link to='/'>React Cookbook</Link></Navbar.Brand>
        <Nav className="navbar">
          <Link to='/new'> Create Recipe </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header

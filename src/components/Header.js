import { Container, Nav, Navbar } from "react-bootstrap"

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React Cookbook</Navbar.Brand>
        <Nav className="navbar">
          <Nav.Link href='/new'>Create Recipe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header

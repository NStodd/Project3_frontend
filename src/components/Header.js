import { Container, Nav, Navbar } from "react-bootstrap"

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="login_page">
        <Navbar.Brand href="/login">React Cookbook Login </Navbar.Brand></Nav>
         <Nav className="signup_page">
          <Nav.Link href="/signup">React Cookbook Sign Up</Nav.Link>
        </Nav>
         <Nav className="home_page">
          <Nav.Link href="/">React Cookbook Home</Nav.Link>
        </Nav>
        <Nav className="navbar">
          <Nav.Link href='/new'>Create Recipe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Library</Nav.Link>
              <Nav.Link href="/add">Add Game</Nav.Link>
              <Nav.Link href="/view">View Reviews</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;
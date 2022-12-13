import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class AppNavbar extends Component {
  render() {
    return (
        <Navbar expand="lg">
          <Container>
            <img
                src="/paw.png"
                width="32"
                height="32"
                className="d-inline-block align-top"
                alt="App logo"/>
            <Navbar.Brand href="#home">Get-Dog app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#search">Search</Nav.Link>
                <NavDropdown title="Action" id="basic-nav-dropdown">
                  <NavDropdown.Item href="liked_list">Liked List</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="separated_link">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default AppNavbar;
import { Navbar, Nav, Container } from 'react-bootstrap';

import Link from 'next/link';

export function NavBar() {
  return (
    <Navbar expand="md">
      <Container>
        <Link href="/" className="nav-link">
          <Navbar.Brand>Crypto Tracker</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" className="nav-link">Inicio</Link>
            <Link href="/historico" className="nav-link">Historico</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
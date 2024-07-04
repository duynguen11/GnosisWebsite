import React from "react";
import "./Header.css";
import Logo from "./assets/gnosis logo 2 1.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="justify-content-between navbar-bg fixed-top"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home" className="logo-container">
            <img
              src={Logo}
              width="140"
              height="94"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto bolder">
            <Link className="ms-4 navbar-link" to="/about-us">
              ABOUT US
            </Link>
            <Link className="ms-4 navbar-link" to="/blog">
              BLOG
            </Link>
            <Link className="ms-4 navbar-link" to="/trader-hub">
              TRADER' HUB
            </Link>
            <Link className="ms-4 navbar-link" to="/contact">
              CONTACT
            </Link>
            <Link className="ms-4 navbar-link" to="/signals">
              SIGNALS
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom"

import dannyNavImage from '../../../static/Danny_home.jpg'

function NavBar() {
    return (
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className="navbar-brand js-scroll-trigger">
              <span className="d-block d-lg-none">Clarence Taylor</span>
              <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={dannyNavImage} alt="..." /></span>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Collapse className="js-scroll-trigger" id="navbarResponsive">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/projects">Personal Projects</Nav.Link>
            <Nav.Link as={Link} to="#">SECRET COMING SOON...</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;
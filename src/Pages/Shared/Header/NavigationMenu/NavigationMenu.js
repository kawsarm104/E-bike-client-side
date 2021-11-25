import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import logo from "../../../../images/logo/ebikenavicon.png";
import "./NavigationMenu.css"
const NavigationMenu = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="">
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="logo" height="40px" width="150px" className="" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 toggler-button"
        >
          {/* <i class="fal fa-bars"></i> */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>

            {user.email ? (
              <>
                {" "}
                <Nav.Link as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <button onClick={logOut}> Log Out</button>
              </>
            ) : (
              <li className="nav-item mx-3">
                <Link to="/login">Login</Link>
              </li>
            )}
            <p>Name: {user?.displayName}</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;

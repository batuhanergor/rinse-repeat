import React from "react";
// import { UserContext } from "../contexts/UserContext";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navigation-bar" sticky="top">
      <Navbar.Brand className="home">
        <Link to="/">Shopping Cart</Link>
      </Navbar.Brand>
      <Nav className="ml-auto"></Nav>
    </Navbar>
  );
};

export default Banner;

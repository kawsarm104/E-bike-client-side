import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      fluid
      className="mt-5 p-5 text-white"
      style={{ backgroundColor: "#555555" }}
    >
      <Row>
        <Col sm={12} md={4}>
          <h6 className="fw-bold text-uppercase">
            services <hr className="w-25" />
          </h6>
          <div className="my-3 py-2">
            <NavLink to="#">E-Bike Repair</NavLink>
            <br />
            <NavLink to="#">World Wide Shipping</NavLink>
            <br />
            <NavLink to="#">Free Return</NavLink>
            <br />
            <NavLink to="#">Membership Discount</NavLink>
            <br />
            <NavLink to="#">E-Bike Repair</NavLink>
            <br />
          </div>
        </Col>
        <Col sm={12} md={4}>
          <h6 className="fw-bold text-uppercase">
            <>information</> <hr className="w-25" />
          </h6>
          <div className="my-3 py-2">
            <NavLink to="#">About Us</NavLink>
            <br />
            <NavLink to="#">Contact Us</NavLink>
            <br />
            <NavLink to="#">All Collection</NavLink>
            <br />
            <NavLink to="#">Delivery Information</NavLink>
            <br />
            <NavLink to="#">Privacy Policy</NavLink>
            <br />
          </div>
        </Col>
        <Col sm={12} md={4}>
          <h6 className="fw-bold text-uppercase">
            <>support</> <hr className="w-25" />
          </h6>
          <div className="my-3 py-2">
            <NavLink to="#">E-Bike Repair</NavLink>
            <br />
            <NavLink to="#">World Wide Shipping</NavLink>
            <br />
            <NavLink to="#">Free Return</NavLink>
            <br />
            <NavLink to="#">Membership Discount</NavLink>
            <br />
            <NavLink to="#">E-Bike Repair</NavLink>
            <br />
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Footer;

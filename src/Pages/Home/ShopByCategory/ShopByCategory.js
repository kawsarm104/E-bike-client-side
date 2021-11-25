import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import safety from "./../../../images/category/ebikesafety.jpg";
import img from "./../../../images/category/ebikeshopbycategory.jpg";
const ShopByCategory = () => {
  return (
    <Container fluid className="">
      <h2 className="fw-bolder text-center my-4">SHOP BY CATEGORY</h2>
      <Row className="">
        <Col sm={12} md={7}>
          <img src={img} className="img-fluid" alt="img" />
        </Col>
        <Col sm={12} md={5} className="p-3">
          <h2 className="fw-bolder text-center my-4">E-Bike Safety</h2>
          <p className=" align-justify" style={{ textAlign: "justify" }}>
            Crashes can happen on any bike, but e-bikes are noteworthy because
            of the higher speeds involved. That said, Quan notes that the
            crashes he's seen likely would have happened on conventional bikes
            as well. In fact, a 2018 survey found that only 20 percent of e-bike
            riders said they had experienced any type of crash.
          </p>
          <div className="d-flex justify-content-center">
            <img src={safety} className="img-fluid mb-4" alt="" srcset="" />
          </div>
          <div className="d-flex justify-content-center ">
            <Link to="/products">
              <Button variant="outline-secondary " className="border-1">
                VIEW ALL COLLECTION
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopByCategory;

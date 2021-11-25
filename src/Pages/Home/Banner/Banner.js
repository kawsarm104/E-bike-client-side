import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bannerBike from "../../../images/banner/bannerbike.png";
import bg from "../../../images/banner/bg-slideshow-v4.jpg";
import "./Banner.css";

const Banner = () => {
  const bannerBg = {
    marginTop: "0",
    background: `url(${bg})`,

    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // width: "100vw",
    width: "100%",

    height: "100vh",
    // overflowX:"hidden",
  };

  return (
    <Container fluid style={bannerBg} className=" banner-class">
      <Row>
        <Col sm={12} md={7} className="animate__animated animate__fadeInLeft">
          <div className="mb-3">
            {" "}
            <img src={bannerBike} alt="banner" className="img-fluid mt-5 " />
          </div>
        </Col>
        <Col sm={12} md={5} className="  best-electric-parent">
          <div className="animate__animated  animate__bounceInRight best-electric-child">
            <div className=" ">
              <h1 className="fs-3">New Collection</h1>
              <h1 className="  fw-bolder" style={{ fontSize: "4rem" }}>
                Best Electric Bike
              </h1>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import PurchaseBike from "../PurchaseBike/PurchaseBike";

const SingleBikeDetails = () => {
  const [bikeDetails, setBikeDetails] = useState({});
  // MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // MODAL
  const { id } = useParams();
  useEffect(() => {
    const url = `https://ancient-reaches-67409.herokuapp.com/products/${id}`;
    axios.get(url).then((res) => {
      setBikeDetails(res.data);
    });
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={6} className="">
            <img src={bikeDetails.photoUrl} className="img-fluid" alt="" />
          </Col>
          <Col
            sm={12}
            md={6}
            className=" d-flex align-items-center ps-5 pb-5 pe-5"
          >
            <div>
              <h1> {bikeDetails.name}</h1>
              <p className="text-warning fw-bolder fs-4">
                ${bikeDetails.price}
              </p>
              <p>{bikeDetails.details}</p>
              <p>{bikeDetails.description}</p>
              <Button
                variant="outline-secondary "
                className="px-5 rounded"
                onClick={handleShow}
              >
                Purchase
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Want to purchase ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <PurchaseBike bikeDetails={bikeDetails}></PurchaseBike>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleBikeDetails;

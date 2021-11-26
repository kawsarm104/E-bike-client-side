import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./BIkeChild.css"

const BikesChild = (props) => {
  const { _id, name, price, details, photoUrl } = props.service;
  return (
    <div className=" col-sm-12 col-md-6 col-lg-3 g-1 my-2 bike-card">
      <Card className="h-100 m-auto border-1 image-zoom">
        <Card.Img variant="top" className="img-fluid img" src={photoUrl} />
        <div className="overlay">
          <Card.Body className="text-center ">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="fw-bold">
              Price: <span className="text-warning">${price}</span>
            </Card.Text>
            {/* <Card.Text>
            {details.split(" ").slice(0, 10).toString().replace(/,/g, " ")}
          </Card.Text> */}
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end border-0 shadow-none">
            <Link to={`/purchase/${_id}`}>
              <span  className="p-2  rounded details-button bg-none shadow-none">
                View Details
              </span>{" "}
            </Link>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default BikesChild;

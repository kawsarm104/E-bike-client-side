import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BikesChild = (props) => {
  const { _id, name, price, details, photoUrl } = props.service;
  return (
    <div className=" col-sm-12 col-md-6 col-lg-3 g-1 my-2 ">
      <Card className="h-100 m-auto border-1">
        <Card.Img variant="top" className="img-fluid" src={photoUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="fw-bold">
            Price: <span className="text-warning">${price}</span>
          </Card.Text>
          <Card.Text>
            {details.split(" ").slice(0, 10).toString().replace(/,/g, " ")}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end border-0 shadow-none bg-white">
          <Link to={`/purchase/${_id}`}>
            <Button variant="secondary " className="p-2  rounded">
              View Details
            </Button>{" "}
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BikesChild;

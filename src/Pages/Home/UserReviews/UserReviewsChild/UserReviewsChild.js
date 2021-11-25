import React from "react";
import Card from "react-bootstrap/Card";


const UserReviesChild = (props) => {
  const { displayName, email, details } = props.review;
  return (
    <div className=" col-sm-12 col-md-6 col-lg-3 g-1 my-2 ">
      <Card className="h-100 m-auto border-1">
        <Card.Body>
          <Card.Title>{displayName}</Card.Title>
          <Card.Text className="fw-bold">
                      <h6>{email}</h6>
                      <p>{details}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end border-0 shadow-none bg-white"></Card.Footer>
      </Card>
    </div>
  );
};

export default UserReviesChild;

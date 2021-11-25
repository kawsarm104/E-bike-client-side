import React, { useState } from "react";
import { ButtonGroup, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AllAddedProductsChild = (props) => {
  const { _id, name, price, details, photoUrl } = props.service;
  // for Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tr>
        <th scope="row">{props.index + 1}</th>

        <td>
          <img
            src={photoUrl}
            style={{ height: "90px", width: "100px" }}
            className="img-fluid"
            alt=""
          />
        </td>

        <td>{name}</td>
        <td>{details}</td>
        <td>{price}</td>
        <td className="">
          <div className="d-inline-flex">
            <button
              title="want to edite the item ?"
              // onClick={() => props.handleDeleteButton(_id)}
              //   onClick={handleShow}
              className="delete-btn btn btn-outline-primary border-0 "
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i className="far fa-edit "></i>
            </button>
            <button
              // onClick={() => props.handleDeleteButton(_id)}
              //   onClick={() => props.handleDeleteButton(_id)}
              
              onClick={handleShow}
              title="want to delete the item ?"
              className="delete-btn btn btn-outline-danger border-0 "
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i className="far fa-trash-alt "></i>
            </button>
          </div>
        </td>
      </tr>
      {/* //  Modal  */}

      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure , you want to delete?</Modal.Body>
        <Modal.Footer>
          <ButtonGroup variant="secondary" onClick={handleClose}>
            Cancel
          </ButtonGroup>
          <Button
            variant="primary"
            onClick={() => props.handleDeleteButton(_id)}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};



export default AllAddedProductsChild;
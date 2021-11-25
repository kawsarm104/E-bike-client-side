import React, { useState } from "react";
import { ButtonGroup, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const MyOrdersChild = (props) => {
  const { _id, name, email, ordereditemname, address, phone, status } =
    props.userData;
  // for delete
  // console.log(props.userData);
  // for Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tr>
        <th scope="row">{props.index + 1}</th>

        <td>{name}</td>
        <td>{email}</td>
        <td>{ordereditemname}</td>
        <td>{address}</td>
        <td>{phone}</td>

        <td>
          <button
            // onClick={() => props.handleDeleteButton(_id)}
            onClick={handleShow}
            className="delete-btn btn btn-outline-danger border-0 "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="far fa-trash-alt "></i>
          </button>
        </td>
        <td>
          <span className="badge rounded-pill bg-info text-dark">{status}</span>
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

export default MyOrdersChild;

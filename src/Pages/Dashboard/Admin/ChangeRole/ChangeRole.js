import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// React toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangeRole = () => {
  const [email, setEmail] = useState("");
  const notify = () => toast.success("Make Admin successfully");
  const handleOnBlur = (e) => {
    const user = { email };
    const url = "https://ancient-reaches-67409.herokuapp.com/users/admin";
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          notify();
        }
      });
    setEmail(e.target.value);
  };

  const handleChangeRole = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <h1>Make Admin</h1>
      <form onSubmit={handleChangeRole}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onBlur={handleOnBlur}
            placeholder="Enter email"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Make Admin
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ChangeRole;

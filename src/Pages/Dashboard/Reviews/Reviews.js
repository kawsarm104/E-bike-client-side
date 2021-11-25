import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../Hooks/useAuth";
import "./Reviews.css";

const Reviews = ({ bikeDetails }) => {
  const [serviceDetail, setServiceDetail] = useState({});

  // toastify message for success
  const notify = () => toast.success("Review received successfully");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    // console.log(data);
    const url = `https://ancient-reaches-67409.herokuapp.com/reviews`;
    axios.post(url, data).then((res) => {
      if (res.data.insertedId) {
        notify();
        reset();
      }
    });
  };
  return (
    <div>
      <Container fluid className="">
        <form
          className="shipping-form border p-3 h-100 rounded"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3>Please give us your valuable response</h3>
          <input defaultValue={user.displayName} {...register("displayName")} />

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <textarea
            placeholder="Enter item details"
            {...register("details", { required: true })}
          />

          {errors.details && (
            <span className="error">Details field is required</span>
          )}

          <input
            type="submit"
            // onClick={notify}
            className="btn btn-warning"
            value="Review"
          />
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Reviews;

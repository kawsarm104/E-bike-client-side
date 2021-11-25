import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../Hooks/useAuth";
import "./Purchase.css";

// import "./PlaceOrder.css";

const PurchaseBike = ({ bikeDetails }) => {
  const [serviceDetail, setServiceDetail] = useState({});

  // toastify message for success
  const notify = () => toast.success("Order placed successfully");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  //   const { id } = useParams();

  const onSubmit = (data) => {
    const url = `https://ancient-reaches-67409.herokuapp.com/orders`;
    axios.post(url, data).then((res) => {
      // console.log(res);
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
          className="purchase-form w-100 mx-auto  h-100 rounded"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input defaultValue={user.displayName} {...register("displayName")} />

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            {...register("ordereditemname", { required: true })}
            defaultValue={bikeDetails.name}
          />
          {errors.ordereditemname && (
            <span className="error">Ordered Item Name is required</span>
          )}
          <input
            placeholder="House no, Ward no, Post Office"
            defaultValue=""
            {...register("address", { required: true })}
          />
          {errors.address && <span className="error">Address is required</span>}
          <input
            placeholder="City"
            defaultValue=""
            {...register("city", { required: true })}
          />
          {errors.city && <span className="error">City is required</span>}
          <input
            placeholder="Phone number"
            defaultValue=""
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="error">Phone number is required</span>
          )}
          <input
            type="submit"
            // onClick={notify}
            className="btn btn-warning"
            value="Purchase"
          />
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default PurchaseBike;

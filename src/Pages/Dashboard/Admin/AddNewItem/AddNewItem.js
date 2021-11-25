import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllAddedProductsParent from "../AllAddedProducts/AllAddedProductsParent/AllAddedProductsParent";
import "./AddNewItem.css";

const AddNewItem = () => {
  // toastify message for success
  const notify = () => toast.success("Item Added successfully");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const url = "https://ancient-reaches-67409.herokuapp.com/products";
    console.log(data);
    axios.post(url, data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        notify();
        reset();
      }
    });
    
  };
  return (
    <div className="add-new-item ">
      <div className=" container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-8 mt-4 container-fluid">
            {/* All added item  */}
            <h3 className="text-center">All Item</h3>
            {/* <AllAddedServiceItem /> */}
            <AllAddedProductsParent></AllAddedProductsParent>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className=" d-flex justify-content-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center">Add New Item</h3>
                <input
                  id="displayName"
                  placeholder="Enter Item Name"
                  {...register("name", { required: true, maxLength: 40 })}
                />
                {errors.name && errors.name.type === "required" && (
                  <span className="error">Item name is required</span>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <span className="error">Max length exceeded</span>
                )}

                <textarea
                  placeholder="Enter item details"
                  {...register("details", { required: true })}
                />

                {errors.details && (
                  <span className="error">Details field is required</span>
                )}
                <input
                  type="number"
                  step="0.1"
                  placeholder="Enter Item Price"
                  {...register("price", { required: true })}
                />

                {errors.price && (
                  <span className="error">This field is required</span>
                )}
                <input
                  type="text"
                  placeholder="Enter item image url "
                  {...register("photoUrl", { required: true })}
                />

                {errors.photoUrl && (
                  <span className="error">
                    Please Provide an valid image url
                  </span>
                )}

                <input
                  type="submit"
                  value="Add Item"
                  className="btn btn-warning"
                />
              </form>
            </div>
            {/* End of form div  */}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddNewItem;

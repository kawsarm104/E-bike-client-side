import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
// React Toastify 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllAddedProductsChild from "../AllAddedProductsChild/AllAddedProductsChild";

const AllAddedProductsParent = () => {
    const [allServices, setAllServices] = useState([]);
    // React Toastify 
    const notify = () => {
        toast.success("Deleted Successfully")
    }
        
    

  useEffect(() => {
    const url = "https://ancient-reaches-67409.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
        // console.log(data);
      });
  }, [allServices]);
  if (!allServices.length > 0) {
    return (
      <div className="text-center loading-spinner mt-5">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
    const handleDeleteButton = (id) => {
    //   const proceed = window.confirm("Are you sure you want to delete ?");
      const proceed = true;

      const url = `https://ancient-reaches-67409.herokuapp.com/products/${id}`;
      if (proceed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
            //   alert("deleted successfully");
              notify(); // import <ToastContainer /> at bottom of div
              const remainingUsers = allServices.filter(
                (order) => order._id !== id
              );
              setAllServices(remainingUsers);
            }
          });
      }
    };
  return (
    <>
      <div className="container fluid">
        <div className="row ">
          <div className="table-responsive">
            <table className="shadow table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Item Details</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allServices.map((service, index) => (
                  <AllAddedProductsChild
                    key={service._id}
                    service={service}
                    index={index}
                    handleDeleteButton={handleDeleteButton}
                  ></AllAddedProductsChild>
                ))}{" "}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AllAddedProductsParent;

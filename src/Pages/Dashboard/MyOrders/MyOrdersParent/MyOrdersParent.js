import React, { useEffect, useState } from "react";
// React toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../../Hooks/useAuth";
import MyOrdersChild from "../MyOrdersChild/MyOrdersChild";

const MyOrdersParent = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  const notify = () => toast.success("Order deleted successfully");
  // Loading all orders
  useEffect(() => {
    const url = "https://ancient-reaches-67409.herokuapp.com/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);
  // console.log(typeof(alluser));
  const handleDeleteButton = (id) => {
    // const proceed = window.confirm("Are you sure you want to delete ?");
    const proceed = true;
    if (proceed) {
      fetch(`https://ancient-reaches-67409.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // alert("deleted successfully");
            notify(); // import <ToastContainer /> at bottom of div
            const remainingUsers = allOrders.filter((user) => user._id !== id);
            setAllOrders(remainingUsers);
          }
        });
    }
  };
  // filtering uniq/each user order
  const uniqUserOrder = allOrders.filter((order) => order.email === user.email);
  //   console.log(uniqUserOrder, "uniquser");
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="table-responsive">
          <table className="shadow table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Item Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {uniqUserOrder.map((userData, index) => (
                <MyOrdersChild
                  key={userData._id}
                  index={index}
                  userData={userData}
                  handleDeleteButton={handleDeleteButton}
                ></MyOrdersChild>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyOrdersParent;

import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageAllOrdersChild from "../ManageAllOrdersChild/MaageAllOrdersChild";

const ManageAllOrdersParent = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = "https://ancient-reaches-67409.herokuapp.com/orders";
    axios.get(url).then((res) => {
      setAllOrders(res.data);
    });
  }, []);
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
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <ManageAllOrdersChild
                  key={order._id}
                  order={order}
                  index={index}
                ></ManageAllOrdersChild>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrdersParent;

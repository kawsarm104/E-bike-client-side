import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BikesChild from "../BikesChild/BikesChild";

const BikesParent = () => {
  const [allProducts, setAllProduct] = useState([]);
  useEffect(() => {
    const url = "https://ancient-reaches-67409.herokuapp.com/products";
    axios(url).then((res) => {
      setAllProduct(res.data);
      // console.log(data);
    });
  }, []);
  if (!allProducts.length > 0) {
    return (
      <div className="text-center loading-spinner mt-5">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  return (
    <>
      <div className="text-center ">
        <h1 className="fw-bolder my-5 fs-2 ">FEATURED PRODUCT</h1>
      </div>
      <div className="container-fluid row mx-auto">
        {allProducts.map((product) => (
          <BikesChild key={product._id} service={product}></BikesChild>
        ))}{" "}
      </div>
    </>
  );
};

export default BikesParent;

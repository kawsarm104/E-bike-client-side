import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BikesChild from "../../Products/BikesChild/BikesChild";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import UserReviewsParent from "../UserReviews/UserReviewsParent/UserReviewsParent";

const Home = () => {
  const [allProducts, setAllProduct] = useState([]);
  useEffect(() => {
    const url = "https://ancient-reaches-67409.herokuapp.com/products";
    axios(url).then((res) => {
      setAllProduct(res.data);
      // console.log(data);
    });
  }, [allProducts]);
  if (!allProducts.length > 0) {
    return (
      <div className="text-center loading-spinner mt-5">
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }
  return (
    <>
      <Banner></Banner>
      <div className="text-center ">
        <h1 className="fw-bolder my-5 fs-2 ">FEATURED PRODUCT</h1>
      </div>
      <div className="container-fluid row mx-auto">
        {allProducts.slice(0, 8).map((product) => (
          <BikesChild key={product._id} service={product}></BikesChild>
        ))}{" "}
      </div>
      <ShopByCategory></ShopByCategory>
      <UserReviewsParent></UserReviewsParent>
    </>
  );
};

export default Home;

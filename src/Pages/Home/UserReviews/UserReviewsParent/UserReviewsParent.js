import axios from "axios";
import React, { useEffect, useState } from "react";
import UserReviewsChild from "../UserReviewsChild/UserReviewsChild";

const UserReviewsParent = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    const url = "https://ancient-reaches-67409.herokuapp.com/reviews";
    axios
      .get(url)

      .then((res) => {
        setAllReviews(res.data);
      });
  }, [allReviews]);
  return (
    <div>
      <div className="text-center ">
        <h1 className="fw-bolder my-5 fs-2 ">User Reviews</h1>
      </div>
      <div className="container-fluid row mx-auto">
        {allReviews.map((review) => (
          <UserReviewsChild key={review._id} review={review}></UserReviewsChild>
        ))}{" "}
      </div>
    </div>
  );
};

export default UserReviewsParent;

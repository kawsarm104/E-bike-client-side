import React from 'react';
import CustomerReviewsChild from '../CustomerReviewsChild/CustomerReviewsChild';

const CustomerReviewsParent = () => {
    return (
        <div>
            show reviews
            <CustomerReviewsChild></CustomerReviewsChild>
        </div>
    );
};

export default CustomerReviewsParent;
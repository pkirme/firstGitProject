import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const param = useParams();
  return (
    <div>
      <h1>This is product details.</h1>
      <p>{param.productId}</p>
    </div>
  );
};

export default ProductDetails;

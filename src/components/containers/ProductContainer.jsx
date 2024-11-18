import React from "react";
import HomeItem from "../cards/HomeItem";

const ProductContainer = ({ products }) => {
  return (
    <div className="container">
      <div className="product-list">
        {products?.map((product) => (
          <HomeItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;

import React from "react";
import { useNavigate } from "react-router-dom";


const HomeItem = ({ product }) => {
  const { id, title, price, image } = product;
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      key={id}
      onClick={() => navigate(`/detail/${id}`)}
    >
      <img src={image} alt={title} />
      <span>{title}</span>
      <p>${price}</p>
    </div>
  );
};

export default HomeItem;

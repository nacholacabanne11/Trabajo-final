import React from "react";

import { useNavigate } from "react-router-dom";

const DetailItem = ({ detail }) => {
  const navigate = useNavigate();
  const { id, price, image, title } = detail;
  return (
    <div className="product-card">
      <img src={image} alt={title} width={200} height={200} />
      <span>{title}</span>
      <p>${price}</p>
      <input type="submit" value="Comprar" />
      <input type="submit" value="Volver" onClick={() => navigate(`/shop`)} />
    </div>
  );
};

export default DetailItem;

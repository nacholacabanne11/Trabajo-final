import React from "react";

import { useNavigate } from "react-router-dom";

const DetailItem = ({ detail }) => {
  const navigate = useNavigate();
  const { precio, imagen, titulo } = detail;
  return (
    <div className="product-card">
      <img src={imagen} alt={titulo} width={200} height={200} />
      <span>{titulo}</span>
      <p>${precio}</p>
      <p></p>
      <input type="submit" value="Comprar" />
      <input type="submit" value="Volver" onClick={() => navigate(`/shop`)} />
    </div>
  );
};

export default DetailItem;

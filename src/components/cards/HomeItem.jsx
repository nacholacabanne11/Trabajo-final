import React from "react";
import { useNavigate } from "react-router-dom";


const HomeItem = ({ product }) => {
  const { descripcion, titulo, precio, imagen,sku} = product;
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      
      onClick={() => navigate(`/detail/${sku}`)}
    >
      <img src={imagen} alt={titulo} />
      <span>{titulo}</span>
      <span>{descripcion}</span>
      <p>${precio}</p>
    </div>
  );
};

export default HomeItem;

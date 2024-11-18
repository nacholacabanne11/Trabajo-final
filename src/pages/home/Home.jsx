import React, { useEffect, useState } from "react";
import "./Home.css"; // Asegúrate de importar tu archivo CSS
import { useNavigate } from "react-router-dom";
import ProductContainer from "../../components/containers/ProductContainer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return <ProductContainer products={products} />;
};

export default Home;

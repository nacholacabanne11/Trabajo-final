import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailItem from "../../components/cards/DetailItem";

function Detail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return <DetailItem detail={product} />;
}

export default Detail;

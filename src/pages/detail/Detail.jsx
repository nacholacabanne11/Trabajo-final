import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailItem from "../../components/cards/DetailItem";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

function Detail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const getData= async() =>{
    try{
      const collectionRef=doc(db,"productos",id)
      const docSnap = await getDoc(collectionRef);
      const productWithId={...docSnap.data(),sku:docSnap.id}
      setProduct(productWithId)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
   getData()
  }, []);
  return <DetailItem detail={product} />;
}

export default Detail;

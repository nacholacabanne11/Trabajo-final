import React, { useEffect, useState } from "react";
import "./Home.css"; // Asegúrate de importar tu archivo CSS
import { useNavigate } from "react-router-dom";
import ProductContainer from "../../components/containers/ProductContainer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getData= async() =>{
    try{
      const collectionRef=collection(db,"productos")
      const docSnap = await getDocs(collectionRef);
      const productsWithId=docSnap.docs.map((doc=>{
        const data=doc.data()
        return {sku:doc.id,...data}

      }))
      setProducts(productsWithId)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    getData()
    
  }, []);
console.log(products)
  return <ProductContainer products={products} />;
};

export default Home;

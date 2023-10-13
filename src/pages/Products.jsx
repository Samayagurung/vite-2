import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";

const Products = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await axios.get(URL + "/products");
        // console.log(resp.data.products)
        setProduct(resp.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="productContainer">
      {product.map((prod) => {
        return <ProductList key={prod.id} prodX={prod}/>;
      })}
      </div>
      
    </>
  );
};

export default Products;

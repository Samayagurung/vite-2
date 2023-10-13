import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import AddProductModal from "../components/AddProductModal";

const Products = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState([]);
  const [addProduct, setAddProduct] = useState([]);

  const [addshow, setAddShow] = useState(false);

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

  // Add Product

  const addProductClickHandle = (e) => {
    e.preventDefault();
    // console.log("clicked")
    setAddShow(true);
  };

  const addChangeHandle = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value)
    setAddProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addProductHandle = (e) => {
    e.preventDefault();
    setProduct([addProduct, ...product]);
  };

  const addCloseHandle = (e) => {
    e.preventDefault();
    setAddShow(false);
  };

  return (
    <>
      <button
        className="btn btn-outline-dark mt-3 ms-2"
        onClick={addProductClickHandle}
      >
        Add Product
      </button>
      <div className="productContainer">
        {product.map((prod) => {
          return <ProductList key={prod.id} prodX={prod} />;
        })}
      </div>
      <AddProductModal
        addshow={addshow}
        addChangeHandle={addChangeHandle}
        addCloseHandle={addCloseHandle}
        addProductHandle={addProductHandle}
      />
    </>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import AddProductModal from "../components/AddProductModal";
import ViewProductModal from "../components/ViewProductModal";
import EditProductModal from "../components/EditProductModal";

const Products = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState([]);
  const [addProduct, setAddProduct] = useState([]);
  const [viewProduct, setViewProduct] = useState([]);
  const [editProduct, setEditProduct] = useState([]);

  const [addshow, setAddShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

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

  // Delete Product
  const deleteHandle = (e, id) => {
    e.preventDefault();

    const filteredProduct = product.filter((prod) => {
      return prod.id !== id;
    });
    setProduct(filteredProduct);
  };

  // View Product

  const viewHandle = (e, id) => {
    e.preventDefault();
    // console.log("click")
    setViewShow(true);
    const viewProd = product.find((item) => {
      return item.id === id;
    });
    setViewProduct(viewProd);
  };

  const viewChangeHandle = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value)
    setViewProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const viewCloseHandle = (e) => {
    e.preventDefault();
    setViewShow(false);
  };

  // Edit Product

  const editHandle = (e, id) => {
    e.preventDefault();
    // console.log("clicked")
    setEditShow(true);

    const editedProd = product.find((item) => {
      return item.id === id;
    });
    setEditProduct(editedProd);
  };

  const editChangeHandle = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value)

    setEditProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const editCloseHandle=(e)=>{
    e.preventDefault();
    setEditShow(false)
  }

  const editProductHandle=(e)=>{
    e.preventDefault();
    const updatedData=product.map((item)=>{
      if(item.id === editProduct.id){
        return editProduct
      }else{
        return item
      }
    })
    setProduct(updatedData)
    setEditShow(false)
  }

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
          return (
            <ProductList
              key={prod.id}
              prodX={prod}
              deleteHandle={deleteHandle}
              viewHandle={viewHandle}
              editHandle={editHandle}
            />
          );
        })}
      </div>
      <AddProductModal
        addshow={addshow}
        addChangeHandle={addChangeHandle}
        addCloseHandle={addCloseHandle}
        addProductHandle={addProductHandle}
      />
      <ViewProductModal
        viewshow={viewShow}
        viewChangeHandle={viewChangeHandle}
        viewprodX={viewProduct}
        viewCloseHandle={viewCloseHandle}
      />
      <EditProductModal
        editShowX={editShow}
        editChangeHandle={editChangeHandle}
        editProdX={editProduct}
        editCloseHandle={editCloseHandle}
        editProductHandle={editProductHandle}
      />
    </>
  );
};

export default Products;

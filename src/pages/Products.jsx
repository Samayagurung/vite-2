import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import AddProductModal from "../components/AddProductModal";
import ViewProductModal from "../components/ViewProductModal";
import EditProductModal from "../components/EditProductModal";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { successToast } from "../services/toast.service";

const Products = () => {
  const nav = useNavigate();
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState([]);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [addProduct, setAddProduct] = useState([]);
  const [viewProduct, setViewProduct] = useState([]);
  const [editProduct, setEditProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const [addshow, setAddShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await axios.get(URL + "/products");
        // console.log(resp.data.products)
        setProduct(resp.data.products);
        setOriginalProduct(resp.data.products);

        const categories = resp.data.products.map((item) => {
          return item.category;
        });
        // console.log(categories)

        const uniqueCategory = [...new Set(categories)];
        // console.log(uniqueCategory)
        // console.log(category)
        setCategory(uniqueCategory);
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

  const editCloseHandle = (e) => {
    e.preventDefault();
    setEditShow(false);
  };

  const editProductHandle = (e) => {
    e.preventDefault();
    const updatedData = product.map((item) => {
      if (item.id === editProduct.id) {
        return editProduct;
      } else {
        return item;
      }
    });
    setProduct(updatedData);
    setEditShow(false);
  };

  // SearchBar

  const searchChangeHandle = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    // console.log(product[0].title.includes(e.target.value))

    const searchedProd = originalProduct.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProduct(searchedProd);
  };

  //FilterProdutcs

  const filterProducts = (data) => {
    if (data !== "") {
      const filteredData = originalProduct.filter((item) => {
        return item.category === data;
      });
      setProduct(filteredData);
    } else {
      setProduct(originalProduct);
    }
  };

  // LogOut

  const logoutHandle = (e) => {
    e.preventDefault();
    localStorage.clear();
    nav("/");
    successToast("Logout Successfully");
  };

  return (
    <>
      <div className="container d-flex justify-content-center">
        <button
          className="btn btn-secondary mt-3 mb-2 p-2"
          onClick={logoutHandle}
        >
          Log Out
        </button>
      </div>

      <div className=" container d-flex  justify-content-between p-3">
        <button
          className="btn btn-outline-dark"
          onClick={addProductClickHandle}
        >
          Add Product
        </button>
        <Form.Select
          style={{ width: "13rem" }}
          onChange={(e) => filterProducts(e.target.value)}
        >
          <option value="">Filter by Category</option>
          {category.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Form.Select>
        <FloatingLabel
          controlId="floatingInput"
          label="Search Products Here"
          className="w-25"
        >
          <Form.Control
            type="text"
            placeholder=""
            onChange={searchChangeHandle}
          />
        </FloatingLabel>
      </div>

      <div className="container productContainer">
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products/productList").then((res) => {
      setProductList(res.data);
    });
  }, []);

  const renderedProducts = productList.map((product) => {
    return (
      <tr key={product.product_id}>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.image}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <div className="container" style={{ margin: "150px auto 500px auto" }}>
      <h4>Product List</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderedProducts}</tbody>
      </table>
    </div>
  );
};

export default ProductList;

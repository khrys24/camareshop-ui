import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products/productList").then((res) => {
      setProductList(res.data);
    });
  }, []);

  const deleteProduct = (e, id) => {
    e.preventDefault();
    const deleteBtn = e.target;
    swal("Warning!", "Are you sure?", "warning", {
      dangerMode: true,
      buttons: true,
    }).then((confirm) => {
      if (!confirm) {
        return;
      }
      axios
        .delete(`http://localhost:3001/products/${id}`)
        .then((res) => {
          swal("Deleted", res.data.message, "success");
          deleteBtn.closest("tr").remove();
        })
        .catch((err) => {
          swal("Error", "Unable to delete", "error");
        });
    });
  };

  const renderedProducts = productList.map((product) => {
    return (
      <tr key={product.product_id}>
        <td>{product.product_id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.image}</td>
        <td>{product.price}</td>
        <td>{product.status}</td>
        <td>{product.created_at}</td>
        <td>{product.updated_at}</td>
        <td>
          <Link to={`/productList/${product.product_id}`}>
            <EditIcon sx={{ color: "gray" }} />
          </Link>
        </td>
        <td>
          <Button
            id="basic-button"
            sx={{ color: "red" }}
            onClick={(e) => deleteProduct(e, product.product_id)}
          >
            <DeleteForeverIcon />
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container" style={{ margin: "150px auto 500px auto" }}>
      <h4>Product List</h4>
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <Link to="/addproduct" style={{textDecoration:"none"}}>
          <Button variant="contained" size="large" sx={{ backgroundColor: "#ce65cc", "&:hover": { backgroundColor: "#ce65cc" } }}>
            <AddIcon/>Add Product
          </Button>
        </Link>
      </div>
      <table className="table" style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>Status</th>
            <th>Date Created</th>
            <th>Date Updated</th>
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

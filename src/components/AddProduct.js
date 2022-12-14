import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    error_list: {},
  });

  const onInputChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "image") {
      value = e.target.files[0];
    }

    setProduct({
      ...product,
      [e.target.name]: value,
    });
  };


  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let field in product) {
      formData.append(field, product[field]);
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/products/addproduct`, formData)
      .then((res) => {
        swal("Success", "Added product successfully", "success");
        setProduct({
          name: "",
          description: "",
          price: "",
          image: "",
          error_list: {},
        });
        navigate('/productlist');
      })
      .catch((err) => {
        console.log(err.response.data);
        setProduct({ ...product, error_list: err.response.data });
      });
  };

  return (
    <div className="container" style={{ margin: "150px auto 500px auto" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Add Product</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSubmit} encType="multipart/form-data">
                <div className="input-group mb-3">
                  <label
                    htmlFor="name"
                    className="input-group-text"
                    style={{ width: "200px", height: "37px" }}
                  >
                    Product Name:
                  </label>
                  <input
                    style={{ width: "200px", height: "37px" }}
                    className={`form-control ${product.error_list.name ? "is-invalid" : ""
                      }`}
                    name="name"
                    id="name"
                    type="text"
                    onChange={onInputChange}
                    value={product.name}
                  />
                  <div className="invalid-feedback">
                    {product.error_list.name}
                  </div>
                </div>

                <div className="input-group mb-3">
                  <label
                    htmlFor="description"
                    className="input-group-text"
                    style={{ width: "200px" }}
                  >
                    Product Description:
                  </label>
                  <textarea
                    className={`form-control ${product.error_list.description ? "is-invalid" : ""
                      }`}
                    name="description"
                    id="description"
                    type="text"
                    onChange={onInputChange}
                    value={product.description}
                  />
                  <div className="invalid-feedback">
                    {product.error_list.description}
                  </div>
                </div>

                <div className="input-group mb-3">
                  <label
                    htmlFor="price"
                    className="input-group-text"
                    style={{ width: "200px", height: "37px" }}
                  >
                    Price:
                  </label>
                  <input
                    style={{ width: "200px", height: "37px" }}
                    className={`form-control ${product.error_list.price ? "is-invalid" : ""
                      }`}
                    name="price"
                    id="price"
                    type="number"
                    onChange={onInputChange}
                    value={product.price}
                  />
                  <div className="invalid-feedback">
                    {product.error_list.price}
                  </div>
                </div>

                <div className="input-group mb-3">
                  <label
                    htmlFor="image"
                    className="input-group-text"
                    style={{ width: "200px", height: "37px" }}
                  >
                    Image Upload:
                  </label>
                  <input
                    style={{ width: "200px", height: "37px" }}
                    className={`form-control`}
                    name="image"
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={onInputChange}
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    type="submit"
                    value="Add Product"
                    className="btn w-100"
                    style={{
                      backgroundColor: "#9c27b0",
                      "&:hover": { backgroundColor: "#ce65cc" },
                      color: "white", marginBottom: "10px"
                    }}
                  />
                </div>
              </form>
              <div>
                <Link to="/productList">
                  <button
                    className="btn w-100"
                    style={{
                      backgroundColor: "#9c27b0",
                      "&:hover": { backgroundColor: "#ce65cc" },
                      color: "white",
                    }}
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
/*     image: "", */
    error_list: {},
  });

  const onInputChange = (e) => {
    let value = e.target.value;
/*     if (e.target.name === "image") {
      value = e.target.files[0];
    } */

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
      .post("http://localhost:3001/products/addproduct", formData)
      .then((res) => {
        swal("Success", "Added product successfully", "success");
        setProduct({
            name: "",
            description: "",
            price: "",
/*             image: "", */
          error_list: {},
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        setProduct({ ...product, error_list: err.response.data });
      });
  };

  return (
    <div className="container" style={{margin:"150px auto 500px auto"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Add Product</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSubmit} encType="multipart/form-data">
                <div className="input-group mb-3">
                  <label htmlFor="name" className="input-group-text">
                    Product Name:
                  </label>
                  <input
                    className={`form-control ${
                      product.error_list.name ? "is-invalid" : ""
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
                  <label htmlFor="description" className="input-group-text">
                    Product Description:
                  </label>
                  <textarea
                    className={`form-control ${
                      product.error_list.description ? "is-invalid" : ""
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
                  <label htmlFor="price" className="input-group-text">
                    Price:
                  </label>
                  <input
                    className={`form-control ${
                      product.error_list.price ? "is-invalid" : ""
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



{/*                 <div className="input-group mb-3">
                  <label
                    htmlFor="password_confirmation"
                    className="input-group-text"
                  >
                    Image Upload:
                  </label>
                  <input
                    className={`form-control`}
                    name="image"
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={onInputChange}
                  />
                </div> */}

                <div className="input-group mb-3">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-dark w-100"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

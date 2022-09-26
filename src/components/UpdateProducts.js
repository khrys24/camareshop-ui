import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const UpdateProducts = () => {
    const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
/*     image: "", */
    price: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`).then((res) => {
      setProduct({
        name: res.data[0].name,
        description: res.data[0].description,
        /*         image: res.data[0].image, */
        price: res.data[0].price,
      });
    });
  }, [id]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: product.name,
      description: product.description,
      /*       image: product.image, */
      price: product.price,
    };
    axios.post(`http://localhost:3001/products/${id}`, data).then((res) => {
      swal("Success!", res.data.message, "success");
    });
    navigate("/productlist")
  };

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ margin: "150px auto 500px auto" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Update Product</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3">
                  <label htmlFor="name" className="input-group-text">
                    Name:
                  </label>
                  <input
                    className={`form-control`}
                    name="name"
                    id="name"
                    type="text"
                    onChange={onInputChange}
                    value={product.name}
                  />
                </div>

                <div className="input-group mb-3">
                  <label htmlFor="description" className="input-group-text">
                    Description:
                  </label>
                  <input
                    className={`form-control`}
                    name="description"
                    id="description"
                    type="text"
                    onChange={onInputChange}
                    value={product.description}
                  />
                </div>

                {/*                 <div className="input-group mb-3">
                  <label htmlFor="image" className="input-group-text">
                    Image:
                  </label>
                  <input
                    className={`form-control`}
                    name="images"
                    id="image"
                    type="text"
                    onChange={onInputChange}
                    value={product.image}
                  />
                </div> */}

                <div className="input-group mb-3">
                  <label htmlFor="price" className="input-group-text">
                    Price:
                  </label>
                  <input
                    className={`form-control`}
                    name="price"
                    id="price"
                    type="text"
                    onChange={onInputChange}
                    value={product.price}
                  />
                </div>

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

export default UpdateProducts;

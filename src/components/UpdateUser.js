import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    /*     email: "", */
    phone_number: "",
    address: "",
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`).then((res) => {
      setUser({
        first_name: res.data[0].first_name,
        last_name: res.data[0].last_name,
        /*         email: res.data[0].email, */
        phone_number: res.data[0].phone_number,
        address: res.data[0].address,
      });
    });
  }, [id]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      address: user.address,
    };
    axios.post(`${process.env.REACT_APP_API_URL}/users/${id}`, data).then((res) => {
      swal("Success!", res.data.message, "success");
      navigate("/users");
    });
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ margin: "150px auto 500px auto" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Update User</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3">
                  <label
                    htmlFor="first_name"
                    className="input-group-text"
                    style={{ width: "150px", height: "60px" }}
                  >
                    First Name:
                  </label>
                  <input
                    style={{ width: "150px", height: "60px" }}
                    className={`form-control`}
                    name="first_name"
                    id="first_name"
                    type="text"
                    onChange={onInputChange}
                    value={user.first_name}
                  />
                </div>

                <div className="input-group mb-3">
                  <label
                    htmlFor="last_name"
                    className="input-group-text"
                    style={{ width: "150px", height: "60px" }}
                  >
                    Last Name:
                  </label>
                  <input
                    style={{ width: "150px", height: "60px" }}
                    className={`form-control`}
                    name="last_name"
                    id="last_name"
                    type="text"
                    onChange={onInputChange}
                    value={user.last_name}
                  />
                </div>

                {/*                 <div className="input-group mb-3">
                  <label htmlFor="email" className="input-group-text">
                    Email:
                  </label>
                  <input
                    className={`form-control`}
                    name="email"
                    id="email"
                    type="email"
                    value={user.email}
                    readOnly
                  />
                </div> */}

                <div className="input-group mb-3">
                  <label
                    htmlFor="phone_number"
                    className="input-group-text"
                    style={{ width: "150px", height: "60px" }}
                  >
                    Phone Number:
                  </label>
                  <input
                    style={{ width: "150px", height: "60px" }}
                    className={`form-control`}
                    name="phone_number"
                    id="phone_number"
                    type="text"
                    onChange={onInputChange}
                    value={user.phone_number}
                  />
                </div>

                <div className="input-group mb-3">
                  <label
                    htmlFor="address"
                    className="input-group-text"
                    style={{ width: "150px", height: "60px" }}
                  >
                    Address:
                  </label>
                  <input
                    style={{ width: "150px", height: "60px" }}
                    className={`form-control`}
                    name="address"
                    id="address"
                    type="text"
                    onChange={onInputChange}
                    value={user.address}
                  />
                </div>

                <div className="input-group">
                  <input
                    type="submit"
                    value="Update"
                    className="btn w-100"
                    style={{
                      backgroundColor: "#9c27b0",
                      "&:hover": { backgroundColor: "#ce65cc" },
                      color: "white",
                      marginBottom: "20px",
                    }}
                  />
                </div>
              </form>
              <div>
                <Link to="/users">
                  <button
                    className="btn w-100"
                    style={{
                      backgroundColor: "#9c27b0",
                      "&:hover": { backgroundColor: "#ce65cc" },
                      color: "white", marginBottom: "20px"
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

export default UpdateUser;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, Typography } from "@mui/material";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((res) => {
      setUserList(res.data);
    });
  }, []);

  const deleteUser = (e, id) => {
    e.preventDefault();
    const deleteBtn = e.target;
    swal("Warning!", "Are you sure you want to delete this user?", "warning", {
      dangerMode: true,
      buttons: true,
    }).then((confirm) => {
      if (!confirm) {
        return;
      }
      axios
        .delete(`${process.env.REACT_APP_API_URL}/users/${id}`)
        .then((res) => {
          swal("Deleted", res.data.message, "success");
          deleteBtn.closest("tr").remove();
        })
        .catch((err) => {
          swal("Error", "Unable to delete", "error");
        });
    });
  };

  const renderedUsers = userList.map((user) => {
    return (
      <tr key={user.user_id}>
        <td>{user.user_id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.phone_number}</td>
        <td>{user.address}</td>
        <td>{user.status}</td>
        <td>{user.created_at}</td>
        <td>{user.updated_at}</td>
        <td>
          <Link to={`/users/${user.user_id}`}>
            <EditIcon sx={{ color: "gray" }} />
          </Link>
        </td>
        <td>
          <Button
            id="basic-button"
            sx={{ color: "red" }}
            onClick={(e) => deleteUser(e, user.user_id)}
          >
            <DeleteForeverIcon />
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div
      style={{ margin: "auto auto 500px auto", width: "80%" }}
      className="user-table"
    >
      <Typography
        variant="h2"
        sx={{
          marginTop: "100px",
          marginBottom: "40px",
          color: "#ce65cc",
          fontWeight: "bold",
          fontFamily: "Varela Round",
        }}
      >
        User List
      </Typography>
      <table className="table" style={{ textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2a537", color: "white" }}>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Status</th>
            <th>Date Created</th>
            <th>Date Updated</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderedUsers}</tbody>
      </table>
    </div>
  );
};

export default UserList;

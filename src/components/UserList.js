import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => {
      setUserList(res.data);
    });
  }, []);

  const renderedUsers = userList.map((user) => {
    return (
      <tr key={user.user_id}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.phone_number}</td>
        <td>{user.address}</td>
      </tr>
    );
  });

  return (
    <div className="container" style={{ margin: "150px auto 500px auto" }}>
      <h4>User List</h4>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
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

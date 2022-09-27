import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin, details }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    };
    axios
      .post("http://localhost:3001/users/login", data)
      .then((res) => {
        localStorage.setItem("User_Details", JSON.stringify(res.data));
        swal("Success", "Logged in successfully", "success");
        onLogin({
          id: res.data.user_id,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          is_admin: res.data.is_admin,
          address: res.data.address,
          phone_number: res.data.phone_number,
        });
        navigate("/");

        setUser({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        swal("Error", err.response.data.message, "error");
      });
    localStorage.setItem("email", user.email);
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };

  return (
    <div className="container" style={{ margin: "200px auto" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
        </Box>
        <Box component="form" noValidate onSubmit={onFormSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className={`form-control  `}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                value={user.email}
                onChange={(e) => onInputChange(e, "email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={`form-control`}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={user.password}
                onChange={(e) => onInputChange(e, "password")}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#9c27b0",
              "&:hover": { backgroundColor: "#ce65cc" },
            }}
          >
            Log In
          </Button>
          <Link to="/register">
            <Typography variant="subtitle2">
              Don't have an account? Sign up
            </Typography>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Login;

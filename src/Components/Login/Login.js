import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logInImage from "../../../src/images/login-image.svg";
import useAuth from "../../hooks/UseAuth/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { error, setError, signInUsingGoogle, isLoading, loginUser, user } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    loginUser(loginData.email, loginData.password, location, navigate);
    e.target.reset();
    setError("");
  };
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ mt: 10 }} xs={12} md={6}>
        <Typography variant="body1">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            required
            name="email"
            label="Your Email"
            type="email"
            variant="standard"
            onChange={handleOnChange}
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            required
            name="password"
            label="Your Password"
            type="password"
            variant="standard"
            onChange={handleOnChange}
          />
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
              color="warning"
            >
              Login
            </Button>
          )}
          <Link to="/register">
            <Typography>New To Re-Charge.bd?</Typography>
          </Link>
        </form>
        {user.email && <Alert severity="success">Login Successfully!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <div>-------------------OR-------------------</div>
        <Button
          variant="outlined"
          onClick={() => {
            signInUsingGoogle(location, navigate);
          }}
        >
          Google LogIn
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={logInImage}
          alt=""
          style={{ width: "100%", marginTop: "10px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;

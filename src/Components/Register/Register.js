import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import registerImage from "../../../src/images/register-image.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { error, setError, signInUsingGoogle, isLoading, registerUser, user } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.password2) {
      setError("password did not match");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      location,
      navigate
    );
    console.log(registerData);
    e.target.reset();
    setError("");
  };
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ mt: 10 }} xs={12} md={6}>
        <Typography variant="body1">Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            required
            name="name"
            label="Your name"
            type="text"
            variant="standard"
            onChange={handleOnChange}
          />
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
          <TextField
            sx={{ width: "75%", m: 1 }}
            required
            name="password2"
            label="Confirm Password"
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
              Register
            </Button>
          )}
          <Link to="/login">
            <Typography>Already have a account? Login</Typography>
          </Link>
        </form>
        {user.email && (
          <Alert severity="success">Registration Successfully!</Alert>
        )}
        {error && <Alert severity="error">{error}</Alert>}
        <div>-------------------OR-------------------</div>
        <Button variant="outlined" onClick={signInUsingGoogle}>
          Google LogIn
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={registerImage}
          alt=""
          style={{ width: "100%", marginTop: "70px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Register;

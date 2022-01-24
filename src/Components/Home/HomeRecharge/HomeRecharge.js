import ReactTypingEffect from "react-typing-effect";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomepageRecharge from "../../../images/recharge-homepage.jpg";
import useAuth from "../../../hooks/UseAuth/useAuth";

const HomeRecharge = () => {
  const date = new Date().toLocaleDateString();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [rechargeData, setRechargeData] = useState({});
  const networks = [
    {
      value: "Grameenphone",
      label: "Grameenphone",
    },
    {
      value: "Airtle",
      label: "Airtle",
    },
    {
      value: "Teletalk",
      label: "Teletalk",
    },
    {
      value: "Robi",
      label: "Robi",
    },
    {
      value: "Banglalink",
      label: "Banglalink",
    },
  ];
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...rechargeData };
    newData[field] = value;
    setRechargeData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email) {
      navigate("/login");
    } else {
      const homeRechargeData = {
        ...rechargeData,
        email: user.email,
        name: user.displayName,
        date,
      };
      //send data to database
      fetch("https://rocky-atoll-33019.herokuapp.com/recharges", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(homeRechargeData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Recharge Successful");
            e.target.reset();
          }
        });
    }
  };
  return (
    <Container id="recharge-section">
      <Box sx={{ my: 8 }}>
        <Typography
          variant="h4"
          color="error"
          sx={{ fontWeight: 400, fontSize: { xs: "20px", md: "28px" } }}
        >
          <ReactTypingEffect text={["Recharge Any Time Any Where"]} />
        </Typography>

        <Grid container spacing={2}>
          <Grid item xm={12} sm={12} md={6}>
            <img style={{ width: "75%" }} src={HomepageRecharge} alt="" />
          </Grid>
          <Grid item xm={12} sm={12} md={6}>
            <Paper sx={{ pt: 5, mt: 5 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  sx={{ width: "75%", mb: 3 }}
                  label="Type a valid Number"
                  variant="outlined"
                  name="phone"
                  type="text"
                  onChange={handleChange}
                />
                <TextField
                  required
                  sx={{ width: "75%", mb: 3 }}
                  select
                  label="Select your Operator"
                  name="network"
                  onChange={handleChange}
                  helperText="Please select your Operator"
                >
                  {networks.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  sx={{ width: "75%", mb: 3 }}
                  label="Amount in TK"
                  variant="outlined"
                  name="price"
                  type="text"
                  onChange={handleChange}
                />
                <Button
                  disabled={!rechargeData.phone && !rechargeData.price}
                  sx={{ width: "75%", mb: 3 }}
                  variant="contained"
                  color="error"
                  type="submit"
                >
                  Recharge
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeRecharge;

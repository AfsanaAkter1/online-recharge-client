import { Phone } from "@mui/icons-material";
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

const HomeRecharge = () => {
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
    console.log(rechargeData);
    e.target.reset();
  };
  return (
    <Container>
      <Box sx={{ my: 8 }}>
        <Typography sx={{ textAlign: "center" }} color="error" variant="h5">
          Recharge Any Time Any Where
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

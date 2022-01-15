import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import DetailImage from "../../../images/DetailImage.jpg";

const Details = () => {
  return (
    <Paper elevation={0} sx={{ py: 1, height: "400px" }}>
      <Grid container spacing={2}>
        <Grid item sx={12} md={6}>
          <img
            style={{
              width: "100%",
            }}
            src={DetailImage}
            alt=""
          />
        </Grid>
        <Grid
          item
          sx={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" color="error" sx={{ fontWeight: 500 }}>
              Use Re-Charge.bd
            </Typography>
            <Typography variant="subtitle2">
              Recharge your mobile anywhere and <br /> anytime and you can also
              recharge your <br /> loving family and other person.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Details;

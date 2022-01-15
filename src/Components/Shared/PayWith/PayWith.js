import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Bkask from "../../../images/bkash-seeklogo.com-ai.jpg";
import Rocket from "../../../images/dutch-bangla-rocket-seeklogo.com-ai.jpg";
import Nagad from "../../../images/nagad-seeklogo.com-svg.jpg";
import Upay from "../../../images/upay-ai.jpg";
import VisaElectron from "../../../images/visa-electron-logo-vector-01.jpg";
import Visa from "../../../images/visa--eps--vector-logo.jpg";
import AmericanExpress from "../../../images/American_Express-ai.jpg";
import Mastercard from "../../../images/MasterCard.jpg";

const PayWith = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={0}
            style={{ borderRadius: 0, borderRight: "1px solid black" }}
          >
            <Typography variant="subtitle1" sx={{ mr: 10 }}>
              Accept Here
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={9} sx={{ textAlign: "left" }}>
          <Paper elevation={0}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={Nagad} alt="" />
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={Bkask} alt="" />
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={Rocket} alt="" />
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={Upay} alt="" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={0}
            style={{ borderRadius: 0, borderRight: "1px solid black" }}
          >
            <Typography variant="subtitle1" sx={{ mr: 10 }}>
              Payment With
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={9} sx={{ textAlign: "left" }}>
          <Paper elevation={0}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={Mastercard} alt="" />
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={Visa} alt="" />
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={VisaElectron} alt="" />
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={AmericanExpress} alt="" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PayWith;

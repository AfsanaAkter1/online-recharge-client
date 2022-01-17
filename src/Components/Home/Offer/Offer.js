import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import OfferModal from "../OfferModal/OfferModal";
import useAuth from "../../../hooks/UseAuth/useAuth";

const Offer = ({ offer }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { title, img, price, validity } = offer;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleModal = () => {
    if (!user.email) {
      navigate("/login");
    } else {
      handleOpen();
    }
  };
  return (
    <>
      <Grid xs={12} sm={12} md={3}>
        <Paper
          variant="outlined"
          style={{
            height: "220px",
            padding: "10px",
            margin: "5px",
            position: "relative",
          }}
        >
          <img style={{ width: "30%" }} src={img} alt="" />
          <h5 style={{ marginBottom: "2px" }}>{title}</h5>
          <Box
            style={{
              lineHeight: "10px",
              textAlign: "left",
              paddingLeft: "20px",
            }}
          >
            <Typography variant={"body1"}>Validity: {validity}</Typography>
            <Typography variant={"body1"}>Price: {price}TK</Typography>
          </Box>

          <Button
            style={{
              width: "75%",
              position: "absolute",
              left: "30px",
              bottom: "15px",
            }}
            variant="contained"
            color="error"
            onClick={handleModal}
          >
            Get it
          </Button>
        </Paper>
      </Grid>
      <OfferModal
        offer={offer}
        open={open}
        handleClose={handleClose}
      ></OfferModal>
    </>
  );
};

export default Offer;

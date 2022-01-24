import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./OfferModal.css";
import ModalImage from "../../../images/modalImage.jpg";
import { Grid, Paper, TextField } from "@mui/material";
import useAuth from "../../../hooks/UseAuth/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const OfferModal = ({ offer, open, handleClose }) => {
  const date = new Date().toLocaleDateString();
  const { user } = useAuth();
  const [modalData, setModalData] = useState({});
  const { title, price, validity, network } = offer;

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...modalData };
    newData[field] = value;
    setModalData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const rechargeData = {
      ...modalData,
      email: user.email,
      name: user.displayName,
      title,
      price,
      network,
      date,
    };
    //send data to the database
    fetch("https://rocky-atoll-33019.herokuapp.com/recharges", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rechargeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          handleClose();
        }
        alert("Recharge Successful");
      });
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid
              item
              sx={12}
              md={6}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <img
                style={{ width: "80%", marginTop: "20px" }}
                src={ModalImage}
                alt=""
              />
            </Grid>
            <Grid item sx={12} md={6}>
              <Paper elevation={3} sx={{ pt: 5 }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    required
                    sx={{
                      width: { xs: "90%", md: "75%" },
                      mb: 3,
                      mx: { xs: "6%", md: "12%" },
                    }}
                    label="Type a valid Number"
                    variant="outlined"
                    name="phone"
                    type="text"
                    onChange={handleChange}
                  />
                  <TextField
                    sx={{
                      width: { xs: "90%", md: "75%" },
                      mb: 3,
                      mx: { xs: "6%", md: "12%" },
                    }}
                    label="Operator"
                    variant="outlined"
                    name="operator"
                    value={network}
                    onBlur={handleChange}
                  />
                  <TextField
                    required
                    sx={{
                      width: { xs: "90%", md: "75%" },
                      mb: 3,
                      mx: { xs: "6%", md: "12%" },
                    }}
                    label="Amount in TK"
                    variant="outlined"
                    name="price"
                    type="text"
                    defaultValue={price}
                    onBlur={handleChange}
                  />
                  <TextField
                    sx={{
                      width: { xs: "90%", md: "75%" },
                      mb: 3,
                      mx: { xs: "6%", md: "12%" },
                    }}
                    label="Validation"
                    variant="outlined"
                    name="validity"
                    value={validity}
                    type="text"
                    onBlur={handleChange}
                  />
                  <Button
                    disabled={!modalData.phone && !modalData.price}
                    sx={{
                      width: { xs: "90%", md: "75%" },
                      mb: 3,
                      mx: { xs: "6%", md: "12%" },
                    }}
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
      </Modal>
    </>
  );
};

export default OfferModal;

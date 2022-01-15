import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./OfferModal.css";
import ModalImage from "../../../images/modalImage.jpg";
import { Grid, Paper, TextField } from "@mui/material";

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
  const [modalData, setModalData] = useState({});
  const { title, price, validity, network } = offer;
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...modalData };
    newData[field] = value;
    setModalData(newData);
    console.log(modalData);
  };
  const handleSubmit = (e) => {
    e.prevent.default();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item sx={12} md={6}>
            <img
              style={{ width: "80%", marginTop: "20px" }}
              src={ModalImage}
              alt=""
            />
          </Grid>
          <Grid item sx={12} md={6}>
            <Paper elevation={3} sx={{ pl: 15, pt: 5 }}>
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
                  disabled
                  sx={{ width: "75%", mb: 3 }}
                  label="Operator"
                  variant="outlined"
                  name="operator"
                  value={network}
                  onChange={handleChange}
                />
                <TextField
                  required
                  sx={{ width: "75%", mb: 3 }}
                  label="Amount in TK"
                  variant="outlined"
                  name="price"
                  type="text"
                  value={price}
                  onChange={handleChange}
                />
                <TextField
                  disabled
                  sx={{ width: "75%", mb: 3 }}
                  label="Validation"
                  variant="outlined"
                  name="validity"
                  value={validity}
                  type="text"
                  onChange={handleChange}
                />
                <Button
                  disabled={!modalData.phone && !modalData.price}
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
    </Modal>
  );
};

export default OfferModal;

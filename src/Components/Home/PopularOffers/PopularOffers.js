import {
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Offer from "../Offer/Offer";

const PopularOffers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://rocky-atoll-33019.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => {
        let newData = data.offers;
        let newOffers = newData.sort(() => Math.random() - 0.5);
        let popularOffers = newOffers.slice(0, 4);
        setOffers(popularOffers);
      });
  }, []);

  return (
    <Container textAlign="center">
      <Box sx={{ mx: "auto", my: 10 }}>
        <Box>
          <Typography
            sx={{ textAlign: "left", fontWeight: 500 }}
            variant="h4"
            color="error"
          >
            Popular Offers
          </Typography>
        </Box>
        <Paper variant="outlined" square sx={{ px: 4, py: 3 }}>
          <Grid container spacing={2}>
            {offers.length ? (
              offers.map((offer) => (
                <Offer key={offer._id} offer={offer}></Offer>
              ))
            ) : (
              <CircularProgress sx={{ mx: "auto", my: "20px" }} />
            )}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default PopularOffers;

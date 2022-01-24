import { Button, CircularProgress, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Offer from "../Offer/Offer";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const size = 8;

  useEffect(() => {
    fetch(
      `https://rocky-atoll-33019.herokuapp.com/offers?type=${type}&&page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pageNumber = Math.ceil(count / 8);
        setPageCount(pageNumber);
        setOffers(data.offers);
      });
  }, [page, type, size]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleOnClick = (e) => {
    const type = e.target.value;
    setType(type);
    console.log(type);
  };

  return (
    <Container id="offers-section">
      <Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} sx={{ mt: 1, textAlign: "left" }}>
              <Typography
                sx={{
                  textAlign: { md: "left", sm: "center" },
                  fontWeight: 500,
                }}
                variant="h4"
                color="error"
              >
                Recharge Offers
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{ my: 3, textAlign: { md: "right", sm: "center" } }}
            >
              <Button onClick={handleOnClick} value="internet">
                INTERNET
              </Button>
              <Button onClick={handleOnClick} value="voice">
                VOICE
              </Button>
              <Button onClick={handleOnClick} value="combo">
                COMBO
              </Button>
              <Button onClick={handleOnClick} value="sms">
                SMS
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {offers.length ? (
              offers.map((offer) => (
                <Offer key={offer._id} offer={offer}></Offer>
              ))
            ) : (
              <CircularProgress sx={{ mx: "auto", mt: "200px" }} />
            )}
          </Grid>
        </Box>
        <Box sx={{ mx: "auto", width: "50%", my: 3 }}>
          <Stack spacing={2}>
            <Pagination count={pageCount} onChange={handleChange} />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Offers;

import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import useAuth from "../../../hooks/UseAuth/useAuth";

const Footer = () => {
  const { user, logout } = useAuth();
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        mt: 10,
        height: "20%",
        backgroundColor: red[500],
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{ textAlign: { sm: "center", md: "left" } }}
        >
          <a href="#recharge-section" className="footer-link">
            Recharge
          </a>
          <a href="#offers-section" className="footer-link">
            Offers
          </a>
          <Link to="/login" className="footer-link" style={{}}>
            Login
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box>
            <a
              href="https://github.com/AfsanaAkter1"
              className="footer-link"
              target="_blank"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://facebook.com/"
              className="footer-link"
              target="_blank"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/"
              className="footer-link"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body" style={{ color: "white" }}>
        Copyright &copy; {year}
      </Typography>
    </Box>
  );
};

export default Footer;

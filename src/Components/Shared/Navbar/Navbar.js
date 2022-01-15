import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import useAuth from "../../../hooks/UseAuth/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "black" }}
              >
                Re-Charge.bd
              </Link>
            </Typography>

            {!user?.email ? (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button color="primary">Login</Button>
              </Link>
            ) : (
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <Button style={{ color: "black" }}>Dashboard</Button>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;

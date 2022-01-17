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
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>Home</Button>
            </Link>

            {!user?.email ? (
              <Link to="/home" style={{ textDecoration: "none" }}>
                <Button style={{ color: "black" }}>Login</Button>
              </Link>
            ) : (
              <Box>
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <Button style={{ color: "black" }}>Dashboard</Button>
                </Link>
                <Button color="primary" onClick={logout}>
                  Logout
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;

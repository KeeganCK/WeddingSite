import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { Link, BrowserRouter } from "react-router-dom";
import MK from "../svgComponents/MK";

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const theme = createTheme({
  typography: {
    fontFamily: ["'Ysabeau Infant'", "sans-serif"].join(","),
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            color: "white",
            backgroundColor: "#8D9E6F",
            position: "fixed",
						padding: "5px 0"
          }}
        >
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <CustomLink to="/#home"><MK /></CustomLink>
            </Typography>

						<CustomLink to="/#wedding">
              <Button color={"inherit"}>Wedding</Button>
            </CustomLink>
            <CustomLink to="/#accomodations">
              <Button color={"inherit"}>Accomodations</Button>
            </CustomLink>
            <CustomLink to="/#travel">
              <Button color={"inherit"}>Travel</Button>
            </CustomLink>
            <CustomLink to="/#preWedding">
              <Button color={"inherit"}>Pre-Wedding</Button>
            </CustomLink>
						<CustomLink to="/#music">
              <Button color={"inherit"}>Music</Button>
            </CustomLink>
            <CustomLink to="/#activities">
              <Button color={"inherit"}>Activities</Button>
            </CustomLink>
            <CustomLink to="/#faq">
              <Button color={"inherit"}>Faq</Button>
            </CustomLink>
						<CustomLink to="/#RSVP">
              <Button color={"inherit"}>RSVP</Button>
            </CustomLink>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;

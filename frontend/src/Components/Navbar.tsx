import React, { useEffect, useState } from "react";
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
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import { getWindowDimensions } from "./HomePage";

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const MobileMKDiv = styled.div`
  width: 100%;
  display: flex;
`;

const theme = createTheme({
  typography: {
    fontFamily: ["'Ysabeau Infant'", "sans-serif"].join(","),
  },
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainNavItems = [
    {
      name: "Wedding",
      value: "wedding",
    },
    {
      name: "Accomodations",
      value: "accomodations",
    },
    {
      name: "Travel",
      value: "travel",
    },
    {
      name: "Pre-Wedding",
      value: "preWedding",
    },
    {
      name: "Music",
      value: "music",
    },
    {
      name: "Activities",
      value: "activities",
    },
    {
      name: "FAQ",
      value: "faq",
    },
    {
      name: "RSVP",
      value: "RSVP",
    },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography
        variant="h6"
        sx={{ padding: "5px 0", backgroundColor: "rgb(141, 158, 111)" }}
      >
        <MK />
      </Typography>
      <Divider /> */}
      <List>
        <CustomLink to={`/#home`}>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </CustomLink>
        {mainNavItems.map((item) => (
          <CustomLink to={`/#${item.value}`}>
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </CustomLink>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            color: "white",
            backgroundColor: "#8D9E6F",
            position: "fixed",
            padding: "5px 0",
          }}
        >
          <Toolbar>
            {windowDimensions.width < 900 ? (
              <>
                <MobileMKDiv>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <CustomLink to="/#home">
                      <MK />
                    </CustomLink>
                  </Typography>
                </MobileMKDiv>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <CustomLink to="/#home">
                    <MK />
                  </CustomLink>
                </Typography>
                {mainNavItems.map((item) => (
                  <CustomLink to={`/#${item.value}`}>
                    <Button color={"inherit"}>{item.name}</Button>
                  </CustomLink>
                ))}
              </>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": { backgroundColor: "#EBEFE3", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;

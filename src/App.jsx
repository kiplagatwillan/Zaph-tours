import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import zaphTheme from "./theme";

import HomePage from "./components/HomePage";
import DestinationsPage from "./components/DestinationsPage";
import TripTypesPage from "./components/TripTypesPage";
import ContactUsPage from "./components/ContactUsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setDrawerOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "destinations":
        return <DestinationsPage />;
      case "trip-types":
        return <TripTypesPage />;
      case "contact-us":
        return <ContactUsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider theme={zaphTheme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppBar position="sticky" color="primary" sx={{ boxShadow: 2 }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 2, md: 4 },
              py: 1,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              onClick={() => navigateTo("home")}
              sx={{
                fontWeight: 700,
                cursor: "pointer",
                color: "white",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Zaph Tours
            </Typography>

            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                {" "}
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 3 }}>
                <Button
                  color="inherit"
                  onClick={() => navigateTo("home")}
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigateTo("destinations")}
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Destinations
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigateTo("trip-types")}
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Trip Types
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigateTo("contact-us")}
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Contact Us
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button onClick={() => navigateTo("home")}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => navigateTo("destinations")}>
                <ListItemText primary="Destinations" />
              </ListItem>
              <ListItem button onClick={() => navigateTo("trip-types")}>
                <ListItemText primary="Trip Types" />
              </ListItem>
              <ListItem button onClick={() => navigateTo("contact-us")}>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1 }}>
          {renderPage()}
        </Box>
        <Box
          component="footer"
          sx={{
            backgroundColor: "grey.800",
            color: "white",
            py: 4,
            px: { xs: 2, md: 4 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body1" sx={{ mb: 1 }}>
              &copy; {new Date().getFullYear()} Kiplagat willan. All rights
              reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.400" }}>
              Best Safaris and Adventures
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
            >
              <IconButton
                color="inherit"
                href="#"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                target="_blank"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

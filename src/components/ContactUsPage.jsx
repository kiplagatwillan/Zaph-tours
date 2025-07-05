import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ContactUsPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    e.target.reset();
  };
  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };
  return (
    <Box sx={{ backgroundColor: "background.default", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: { xs: 6, md: 8 },
            fontSize: { xs: "2rem", md: "3rem" },
            color: "primary.main",
          }}
        >
          Get in Touch with Zaph Tours
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                {" "}
                Send Us a Message
              </Typography>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ py: 1.5 }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  Contact Information
                </Typography>
                <List disablePadding>
                  <ListItem sx={{ p: 0, mb: 1.5 }}>
                    <InputAdornment position="start" sx={{ mr: 1.5 }}>
                      <EmailIcon color="primary" />
                    </InputAdornment>
                    <ListItemText primary="info@zaphtours.com" />
                  </ListItem>
                  <ListItem sx={{ p: 0, mb: 1.5 }}>
                    <InputAdornment position="start" sx={{ mr: 1.5 }}>
                      {" "}
                      <PhoneIcon color="primary" />
                    </InputAdornment>
                    <ListItemText primary="+254 712 345 678" />
                  </ListItem>
                  <ListItem sx={{ p: 0, mb: 1.5 }}>
                    <InputAdornment position="start" sx={{ mr: 1.5 }}>
                      <LocationOnIcon color="primary" />
                    </InputAdornment>
                    <ListItemText primary="123 Safari Avenue, Nairobi, Kenya" />
                  </ListItem>
                </List>
                <Typography
                  variant="body1"
                  sx={{ mt: 3, mb: 1, fontWeight: 600 }}
                >
                  Office Hours
                </Typography>
                <Typography variant="body2">
                  Mon-Fri: 9:00 AM - 5:00 PM (EAT)
                </Typography>
                <Typography variant="body2">
                  Sat: 10:00 AM - 2:00 PM (EAT)
                </Typography>
                <Typography variant="body2">Sun: Closed</Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  {" "}
                  Follow Us
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton
                    color="primary"
                    href="https://x.com/home"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://x.com/home"
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://www.linkedin.com/feed/"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
        >
          {" "}
          <Alert
            severity="success"
            onClose={handleCloseSnackbar}
            sx={{ width: "100%" }}
          >
            {" "}
            Message sent successfully! We'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};
export default ContactUsPage;

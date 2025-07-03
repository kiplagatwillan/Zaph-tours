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
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSnackbarMessage(
      "Message sent successfully! We will get back to you soon.",
    );
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
    event.target.reset();
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
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
            {" "}
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
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
                  fullWidth
                  type="email"
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
                  fullWidth
                  multiline
                  rows={6}
                  required
                />{" "}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ py: 1.5, borderRadius: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
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
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  Contact Information
                </Typography>
                <List disablePadding>
                  <ListItem sx={{ mb: 1.5, p: 0 }}>
                    <InputAdornment position="start" sx={{ mr: 1.5 }}>
                      <EmailIcon color="primary" />
                    </InputAdornment>
                    <ListItemText
                      primary="info@zaphtours.com"
                      primaryTypographyProps={{
                        variant: "body1",
                        sx: { color: "text.secondary" },
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ mb: 1.5, p: 0 }}>
                    <InputAdornment position="start" sx={{ mr: 1.5 }}>
                      <PhoneIcon color="primary" />
                    </InputAdornment>
                    <ListItemText
                      primary="+254 712 345 678"
                      primaryTypographyProps={{
                        variant: "body1",
                        sx: { color: "text.secondary" },
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ mb: 1.5, p: 0 }}>
                    <InputAdornment position="start" sx={{ mr: 1.5 }}>
                      <LocationOnIcon color="primary" />
                    </InputAdornment>
                    <ListItemText
                      primary="123 Safari Avenue, Nairobi, Kenya"
                      primaryTypographyProps={{
                        variant: "body1",
                        sx: { color: "text.secondary" },
                      }}
                    />
                  </ListItem>
                </List>

                <Typography
                  variant="h4"
                  sx={{
                    mt: 4,
                    mb: 2,
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  Office Hours
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Monday - Friday: 9:00 AM - 5:00 PM (EAT)
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Saturday: 10:00 AM - 2:00 PM (EAT)
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Sunday: Closed
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  Follow Us
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton
                    color="primary"
                    href="#"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FacebookIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="#"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <TwitterIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="#"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <InstagramIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="#"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, boxShadow: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                Our Location
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 300, md: 400 },
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816480397072!2d36.817223!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d0d0b%3A0xf751e1d0f5e4e7e!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zaph Tours Location"
                ></iframe>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>{" "}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUsPage;

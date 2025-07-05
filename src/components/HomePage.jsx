import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { featuredDestinations, testimonials } from "../data/dummyData";

const HomePage = ({ setCurrentPage }) => {
  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <Box
        sx={{
          py: { xs: 12, md: 18 },
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 800,
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Explore With Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 500,
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              maxWidth: "80%",
              margin: "0 auto",
            }}
          >
            Breathtaking landscapes, iconic wildlife safaris, and vibrant local
            cultures await.
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => setCurrentPage("destinations")}
            sx={{ fontWeight: 600 }}
          >
            Explore Destinations
          </Button>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "background.paper" }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 4, color: "primary.main", fontWeight: 700 }}
          >
            About Zaph Tours
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            Zaph Tours is your trusted gateway to unforgettable African
            adventures. We specialize in customized safaris, cultural
            explorations, and eco-conscious travel experiences across Kenya and
            East Africa. Whether you're seeking luxury, thrill, or connection
            with nature, we make your travel dreams a breathtaking reality.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, color: "primary.main", fontWeight: 600 }}
          >
            Featured Destinations
          </Typography>
          <Grid container spacing={2}>
            {featuredDestinations.map((dest) => (
              <Grid item xs={12} sm={6} md={4} key={dest.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={dest.image}
                    alt={dest.name}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {dest.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, color: "text.secondary" }}
                    >
                      {dest.description}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mt: 2, fontWeight: 700 }}
                    >
                      {dest.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "grey.100" }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, color: "primary.main", fontWeight: 600 }}
          >
            What Our Travelers Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ p: 3, borderRadius: 3, height: "100%" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", mb: 2 }}
                  >
                    “{testimonial.quote}”
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    — {testimonial.author}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

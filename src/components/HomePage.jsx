import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  TextField,
} from "@mui/material";
import {
  featuredDestinations,
  testimonials,
  getPlaceholderImage,
} from "../data/dummyData.js";

const HomePage = ({ setCurrentPage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
    
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              color: "white",
              marginBottom: 2,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 700,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Best Safaris and Adventures
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              marginBottom: 4,
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Explore the world with Zaph Tours
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setCurrentPage("destinations")}
            sx={{
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              borderRadius: "9999px",
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontWeight: "semibold",
            }}
          >
            Discover Destinations
          </Button>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          About Zaph Tours
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "text.secondary", lineHeight: 1.8 }}
        >
          Zaph Tours is a premier travel company based in Kenya, specializing in
          providing the best safaris and adventure tours. With a strong
          reputation for delivering exceptional travel experiences, Zaph Tours
          offers a variety of packages that showcase the natural beauty and
          cultural richness of Kenya and other destinations. Our mission is to
          create unforgettable journeys that connect you with nature, culture,
          and adventure, all while prioritizing your safety and comfort. We are
          passionate about travel and committed to providing personalized
          service that exceeds your expectations.
        </Typography>
      </Container>
      <Box
        sx={{
          backgroundColor: "grey.100",
          width: "100%",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: { xs: 6, md: 8 }, fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Our Featured Destinations
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {featuredDestinations.map((destination) => (
              <Grid
                item
                key={destination.id}
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex" }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    borderRadius: 3,
                    boxShadow: 3,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6, // shadow-xl
                    },
                  }}
                >
                  {" "}
                  <CardMedia
                    component="img"
                    height="250"
                    image={destination.image}
                    alt={destination.name}
                    sx={{
                      borderTopLeftRadius: 3, // rounded-t-xl
                      borderTopRightRadius: 3, // rounded-t-xl
                      objectFit: "cover",
                      height: 192, // h-48
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.25rem",
                        color: "primary.main",
                      }}
                    >
                      {destination.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {destination.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: 700 }}
                    >
                      Price: {destination.price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      fullWidth
                      sx={{ borderRadius: 2, py: 1 }}
                      onClick={() => setCurrentPage("destinations")}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: { xs: 6, md: 8 }, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          What Our Customers Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} md={4} sx={{ display: "flex" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "secondary.light",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", mb: 2, color: "grey.800" }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 600 }}
                  >
                    - {testimonial.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          py: { xs: 8, md: 12 },
          color: "white",
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              color: "white",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 700,
            }}
          >
            Stay Updated!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "white" }}>
            Sign up for Zaph Tours' newsletter to receive weekly email updates
            on safaris and adventures, exclusive offers, and travel tips.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 3 },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              label="Your Email Address"
              variant="outlined"
              fullWidth
              size="medium"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                  color: "white",
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                borderRadius: "9999px",
                fontWeight: "semibold",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { allDestinations } from "../data/dummyData.js";

const DestinationsPage = () => {
  return (
    <Box sx={{ backgroundColor: "background.default", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: { xs: 6, md: 8 },
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "primary.main",
          }}
        >
          All Our Amazing Destinations
        </Typography>

        <Grid container spacing={4}>
          {allDestinations.map((destination) => (
            <Grid item key={destination.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={destination.image}
                  alt={destination.name}
                  sx={{
                    height: 200,
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "primary.main", mb: 1 }}
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
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Group: {destination.priceGroup || destination.price}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Solo:{" "}
                    {destination.priceIndividual ||
                      (
                        parseFloat(destination.price.replace("$", "")) * 1.2
                      ).toFixed(0) + "$"}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    sx={{ borderRadius: 2, py: 1 }}
                    href="#"
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DestinationsPage;

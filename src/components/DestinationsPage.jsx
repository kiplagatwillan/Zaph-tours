import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
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
            fontSize: { xs: "2rem", md: "3rem" },
            color: "primary.main",
          }}
        >
          All Our Amazing Destinations
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {allDestinations.map((destination) => (
            <Grid
              item
              key={destination.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
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
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.name}
                  sx={{
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    objectFit: "cover",
                    height: 192,
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 700, color: "grey.800" }}
                    >
                      Group Cost: {destination.priceGroup || destination.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 700, color: "grey.800" }}
                    >
                      Solo Cost:{" "}
                      {destination.priceIndividual ||
                        (
                          parseFloat(destination.price.replace("$", "")) * 1.2
                        ).toFixed(0) + "$"}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    fullWidth
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

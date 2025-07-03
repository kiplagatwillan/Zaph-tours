import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { tripTypes } from "../data/dummyData.js";
const TripTypesPage = () => {
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
          Our Diverse Trip Types
        </Typography>{" "}
        <Grid container spacing={6} justifyContent="center">
          {tripTypes.map((trip, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
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
                {" "}
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.25rem",
                      color: "primary.main",
                      mb: 2,
                    }}
                  >
                    {trip.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    {" "}
                    {trip.images.map((img, imgIndex) => (
                      <CardMedia
                        key={imgIndex}
                        component="img"
                        height="150"
                        image={img}
                        alt={`${trip.title} image ${imgIndex + 1}`}
                        sx={{
                          borderRadius: 2,
                          objectFit: "cover",
                          width: "100%",
                          height: 144,
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {trip.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, color: "grey.800" }}
                  >
                    Pricing: {trip.pricing}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default TripTypesPage;

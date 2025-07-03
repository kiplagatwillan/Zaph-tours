import { createTheme } from "@mui/material/styles";
const getPlaceholderImage = (width, height, text) =>
  `https://placehold.co/${width}x${height}/E0E0E0/333333?text=${text}`;
const zaphTheme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32",
      light: "#60AD5E",
      dark: "#005005",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFC107",
      light: "#FFF350",
      dark: "#C79100",
      contrastText: "#000",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#2E7D32",
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
      "@media (min-width:960px)": {
        fontSize: "5rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#2E7D32",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      "@media (min-width:960px)": {
        fontSize: "3.5rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#2E7D32",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#2E7D32",
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});
export default zaphTheme;

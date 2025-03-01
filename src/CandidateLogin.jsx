import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#527853", // Green
    },
    secondary: {
      main: "#EE7214", // Orange
    },
    background: {
      default: "#F5F5F5", // Light grayish white
      paper: "#E0E0E0", // Grayish
    },
    accent: {
      main: "#A47FC2", // Purple accent
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const CandidateLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {};

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          margin: "0px",
          backgroundColor: "#F5F5F5", // Light Grayish White
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            minWidth: "50%",
            padding: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Decorative Elements */}
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              left: "10%",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(164, 127, 194, 0.2)", // Soft Purple
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              right: "10%",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "rgba(238, 114, 20, 0.2)", // Soft Orange
              zIndex: 1,
            }}
          />

          {/* Login Box */}
          <Box
            sx={{
              zIndex: 2,
              width: "400px",
              padding: "40px",
              backgroundColor: "#E0E0E0", // Light Gray Background
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#527853", // Green Title
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Login
            </Typography>

            <form>
              {/* Email Field */}
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                required
                sx={{
                  input: { color: "#333333" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#527853", // Green border
                    },
                    "&:hover fieldset": {
                      borderColor: "#A47FC2", // Purple hover effect
                    },
                  },
                  "& label": {
                    color: "#555555", // Dark Gray Label
                  },
                }}
              />

              {/* Password Field */}
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type={showPassword ? "text" : "password"}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePassword}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  input: { color: "#333333" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#527853", // Green border
                    },
                    "&:hover fieldset": {
                      borderColor: "#A47FC2", // Purple hover effect
                    },
                  },
                  "& label": {
                    color: "#555555", // Dark Gray Label
                  },
                }}
              />

              <Link
                to="/hr-login"
                style={{ textDecoration: "none" }} // Removes underline
              >
                <Typography
                  sx={{
                    display: "block",
                    textAlign: "right",
                    color: "#EE7214", // Orange Link
                    marginTop: "8px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  HRBP Login?
                </Typography>
              </Link>

              {/* Login Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "20px",
                  padding: "12px 0",
                  fontWeight: "bold",
                  fontSize: "16px",
                  borderRadius: "8px",
                  backgroundColor: "#527853", // Green Button
                  "&:hover": {
                    backgroundColor: "#4CAF50", // Lighter Green Hover
                  },
                }}
                onClick={handleLogin}
              >
                Log In
              </Button>
            </form>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default CandidateLogin;

// MainLayout.tsx
import React from "react";
import { Outlet } from "react-router";
import { Box, useTheme } from "@mui/material";
import Header from "../Header/Header";

const MainLayout: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* Header with responsive min-height */}
      <Box
        component="header"
        sx={{
          flex: "0 0 auto",
          minHeight: {
            xs: 56, // Mobile
            sm: 64, // Tablet / small desktop
            md: 72, // Larger desktop
          },
        }}
      >
        <Header />
      </Box>

      {/* Main content area filling remaining space */}
      <Box
        component="main"
        sx={{
          flex: "1 1 auto",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;

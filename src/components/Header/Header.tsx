import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Badge,
  Avatar,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Find Parking", path: "/find" },
  { label: "Bookings", path: "/bookings" },
  { label: "Profile", path: "/profile" },
  { label: "Help", path: "/help" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleLocate = () => {
    // Integrate actual geolocation API or UI feedback
    console.log("Requesting current location...");
  };

  const drawerList = (
    <Box sx={{ width: 250 }}>
      <List>
        {navItems.map(({ label, path }) => (
          <ListItemButton
            key={label}
            component={Link}
            to={path}
            onClick={toggleDrawer}
            selected={location.pathname === path}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            ParkEasy
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                component={Link}
                to={path}
                sx={{
                  color: location.pathname === path ? "#fff" : "inherit",
                  borderBottom:
                    location.pathname === path ? "2px solid #fff" : "none",
                  marginLeft: theme.spacing(2),
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <IconButton
              color="inherit"
              onClick={handleLocate}
              title="Locate Me"
            >
              <MyLocationIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <DirectionsCarIcon />
            </IconButton>
            <Avatar
              sx={{
                bgcolor: theme.palette.secondary.main,
                marginLeft: theme.spacing(1),
              }}
            >
              U
            </Avatar>
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        {drawerList}
      </Drawer>
    </>
  );
}

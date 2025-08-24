import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Badge,
  Avatar,
  useTheme,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import NavButton from "../Mui/NavButton";

const navItems = [
  { label: "Find Parking", path: "/find" },
  { label: "Register Parking", path: "/register" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              ParkEasy
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map(({ label, path }) => (
              <NavButton key={label} to={path} label={label} component={Link} />
            ))}
          </Box>

          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            {/* Optionally, you could use this icon to eventually trigger geolocation */}
            <IconButton color="inherit" title="Locate Me">
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                sx={{ ml: 2 }}
              >
                <Typography variant="subtitle1">Patna</Typography>
                <MyLocationIcon />
              </Stack>
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

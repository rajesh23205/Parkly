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
  useMediaQuery,
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const count = 5;

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
        {isMobile && (
          <>
            <ListItemButton onClick={toggleDrawer}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
              <ListItemText primary="Notifications" sx={{ ml: 1 }} />
            </ListItemButton>
            <ListItemButton onClick={toggleDrawer}>
              <DirectionsCarIcon />
              <ListItemText primary="My Rides" sx={{ ml: 1 }} />
            </ListItemButton>
          </>
        )}
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
              <NavButton key={label} to={path} label={label} component={Link} />
            ))}
          </Box>

          <Stack direction="row" alignItems="center" spacing={1}>
            {!isMobile && (
              <>
                <IconButton color="inherit" title="Locate Me">
                  <Stack direction="row" alignItems="center" spacing={0.5}>
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
                    ml: 1,
                  }}
                >
                  U
                </Avatar>
              </>
            )}
          </Stack>

          {/* {isMobile && (
            <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )} */}

          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer}
              aria-label={`${count} menu notifications`}
            >
              <Badge badgeContent={count} color="error">
                <MenuIcon />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          {drawerList}
        </Drawer>
      )}
    </>
  );
}

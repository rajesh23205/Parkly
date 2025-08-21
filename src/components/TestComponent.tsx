// src/TestComponent.tsx
import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

const TestComponent: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        MUI Test Component
      </Typography>
      <TextField
        label="Enter something"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default TestComponent;

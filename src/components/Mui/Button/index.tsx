// components/NavButton.tsx
import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { useLocation } from "react-router";

interface NavButtonProps extends ButtonProps {
  to: string;
  label: string;
  component: any;
}

const Button: React.FC<NavButtonProps> = ({
  to,
  label,
  component,
  ...props
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <MuiButton
      component={component || "button"}
      to={to}
      {...props}
      sx={{
        color: isActive ? "#fff" : "inherit",
        borderBottom: isActive ? "2px solid #fff" : "none",
        marginLeft: (theme) => theme.spacing(2),
        ...props.sx,
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;

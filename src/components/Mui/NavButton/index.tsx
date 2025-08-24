// components/NavButton.tsx
import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { useLocation } from "react-router-dom";

// Generic polymorphic prop type
type ButtonProps<C extends React.ElementType> = {
  to?: string;
  label: string;
  component?: C;
} & Omit<MuiButtonProps<C>, "component" | "to" | "children">;

const NavButton = <C extends React.ElementType = "button">({
  to,
  label,
  component,
  ...props
}: ButtonProps<C>) => {
  const location = useLocation();
  const isActive = to ? location.pathname === to : false;

  return (
    <MuiButton
      component={component}
      to={to}
      {...(props as ButtonProps<C>)}
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

export default NavButton;

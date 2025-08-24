// components/Button.tsx
import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type PolymorphicButtonProps<C extends React.ElementType> = {
  component?: C;
} & Omit<MuiButtonProps<C>, "component">;

const Button = <C extends React.ElementType = "button">({
  component,
  children,
  ...props
}: PolymorphicButtonProps<C>) => (
  <MuiButton
    component={component || "button"}
    {...(props as MuiButtonProps<C>)}
  >
    {children}
  </MuiButton>
);

export default Button;

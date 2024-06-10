import React, { FC } from "react";
import { Button, ButtonProps } from "./button";

const CTAButton: FC<ButtonProps> = ({ size = "lg", ...props }) => {
  return (
    <Button {...props} size={size} variant='gradient'>
      Book your call
    </Button>
  );
};

export default CTAButton;

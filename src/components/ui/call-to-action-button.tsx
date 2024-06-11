import { MoveRight } from "lucide-react";
import { FC } from "react";
import { Button, ButtonProps } from "./button";

const CTAButton: FC<ButtonProps> = ({ size = "lg", ...props }) => {
  return (
    <Button {...props} className="group" size={size} variant="gradient">
      <span>Book your call</span>
      <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
};

export default CTAButton;

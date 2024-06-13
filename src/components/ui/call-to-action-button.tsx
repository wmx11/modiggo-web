import { MoveRight } from "lucide-react";
import { FC } from "react";
import { Button, ButtonProps } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CTAButton: FC<ButtonProps> = ({ size = "lg", ...props }) => {
  return (
    <Link
      href="https://calendly.com/modiggo/1-on-1-meeting"
      target="_blank"
      className="inline-block"
    >
      <Button {...props} className={cn("group", props.className)} size={size} variant="gradient">
        <span>Book your call</span>
        <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Link>
  );
};

export default CTAButton;

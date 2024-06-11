import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"span"> {}

const Highlight: FC<Props> = (props) => {
  return (
    <span
      {...props}
      className={twMerge(
        "bg-gradient-to-t from-violet to-pink bg-clip-text text-transparent",
        props.className
      )}
    ></span>
  );
};

export default Highlight;

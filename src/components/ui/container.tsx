import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"div"> {}

const Container: FC<Props> = (props) => {
  return (
    <div
      {...props}
      className={twMerge("container mx-auto px-4", props.className)}
    ></div>
  );
};

export default Container;

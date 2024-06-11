import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"section"> {}

const Section: FC<Props> = (props) => {
  return (
    <section {...props} className={twMerge("py-28", props.className)}></section>
  );
};

export default Section;

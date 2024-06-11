import React, { ComponentPropsWithRef, FC, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithRef<"section"> {}

const Section = forwardRef<HTMLElement, Props>((props, ref) => {
  return (
    <section
      ref={ref}
      {...props}
      className={twMerge("py-28", props.className)}
    ></section>
  );
});

Section.displayName = "Section";

export default Section;

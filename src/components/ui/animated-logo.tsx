"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { ComponentPropsWithoutRef, FC, RefObject } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"svg"> {
  container?: RefObject<HTMLElement>;
}

const AnimatedLogo: FC<Props> = (props) => {
  const { scrollYProgress } = useScroll({
    target: props.container,
    offset: ["end end", "start start"],
    layoutEffect: false,
  });

  const progressY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 100,
    restDelta: 0.001,
  });

  return (
    <motion.svg
      className={twMerge("", props.className)}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 610 410"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        transition={{ type: "inertia" }}
        style={{
          fill: "transparent",
          stroke: "#000",
          pathLength: progressY,
        }}
        d="M546,62.4C480.1-3.4,379.7-13.7,303,31.5c-12.4,7.3-24.1,16-35,26.2l-43-43c-5.5-5.5-12.7-8.3-20-8.3V6.1
C154.1,6.2,103,25.8,64,64.7c-78.1,78.1-78.1,204.7,0,282.8c65.9,65.9,166.2,76.2,242.9,31c14.2-8.4,27.7-18.7,39.9-31
c3-3,5.9-6.1,8.7-9.3c29.5-33.5,46-74.5,49.2-116.4v-11.7c0-6.1-1.1-12.2-3.4-17.9c-1.2-3-2.7-5.8-4.6-7.7
c-11.3-11.2-29.5-11.2-40.8,0c-2.3,2.3-4.4,6.5-5.9,9.8c-1.2,2.8-1.8,5.9-1.8,8.9l0,0.1c0,0,0,0.1,0,0.1c0,2.5,0,5-0.1,7.5
c-0.7,18.9-5.1,37.7-13.2,55.2l-62.3-62.8l-0.1-0.1L262,192.6c2-25.3,10.7-50.1,26-71.7c2.3-3.2,4.7-6.3,7.3-9.3
c2.6-3,5.3-6,8.2-8.9c0.1-0.1,0.3-0.3,0.4-0.4c14.4-14.2,31-24.8,48.7-31.7c51.3-20,111.7-9.2,153.1,32.1
c55.9,55.8,55.9,146.4,0,202.2c-27.8,27.8-64.3,41.8-100.8,41.9v0c-7.2,0-14.3,2.7-19.8,8.2c-10.9,10.9-10.9,28.7,0,39.6
c1.4,1.4,3.3,2.6,5.4,3.7c7.4,3.9,15.9,5.6,24.3,5.2c47.7-2.4,94.8-21.9,131.2-58.3C624.1,267.2,624.1,140.6,546,62.4z M257.4,339.4
c-51.3,20-111.7,9.2-153.1-32.1c-55.9-55.8-55.9-146.4,0-202.2c25-25,57-38.9,89.8-41.4l38.3,38.3c-15.9,26.8-25,56.5-27.3,86.6v15
h-0.1c0,7.3,2.7,14.6,8.3,20.1l88.3,88.3C288.4,324.1,273.3,333.2,257.4,339.4z"
      />
    </motion.svg>
  );
};

export default AnimatedLogo;

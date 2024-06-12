import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"a"> {
  dark?: boolean;
}

export const NavigationLink: FC<Props> = ({ href, children, dark = false }) => {
  return (
    <Link href={href as string} className="flex group text-sm">
      <span className="relative">
        <span>{children}</span>
        <div
          className={cn(
            "absolute bottom-0 group-hover:w-full scale-x-0 group-hover:scale-x-100 origin-left transition h-[2px] bg-black",
            dark && "bg-white"
          )}
        ></div>
      </span>
    </Link>
  );
};

export default NavigationLink;

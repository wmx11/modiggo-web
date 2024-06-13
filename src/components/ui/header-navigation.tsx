"use client";
import Logo from "@/app/assets/logo/logo.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTAButton from "./call-to-action-button";
import Container from "./container";
import { renderMainMenu } from "./navigation";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { MenuIcon } from "lucide-react";

const DesktopNavigation = () => {
  const { scrollY } = useScroll();
  const [isTop, setIsTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  });

  return (
    <Container className="flex justify-center">
      <motion.div
        className="flex items-center justify-between p-4 gap-4 bg-white/50 backdrop-blur-sm rounded-full border border-transparent"
        transition={{
          duration: 0.25,
          y: { duration: 1, type: "spring" },
        }}
        initial={{ width: "100%" }}
        animate={{
          width: isTop ? "100%" : "auto",
          y: isTop ? 0 : [-200, 8],
        }}
        style={{
          borderColor: isTop ? "transparent" : "#e4e4e7",
        }}
      >
        <div>
          <Link href="/">
            <Image src={Logo} alt="Modiggo logo" width={80} />
          </Link>
        </div>
        <div>
          <ul className="flex gap-6">{renderMainMenu()}</ul>
        </div>
        <div>
          <CTAButton size="sm" className={isTop ? "" : "rounded-full"} />
        </div>
      </motion.div>
    </Container>
  );
};

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row-reverse items-center justify-between px-4 py-2 mx-1 gap-4 bg-white/50 backdrop-blur-sm rounded-full border translate-y-1">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div>
            <ul
              className="flex flex-col [&_a]:text-lg [&_a]:text-center [&_a>span]:w-full font-bold gap-6"
              onMouseDown={(e) => {
                const target = e.target as HTMLElement;
                if (target.nodeName !== "UL") {
                  setIsOpen(false);
                }
              }}
            >
              <li className="border-b pb-2">
                <Link href="/">
                  <Image src={Logo} alt="Modiggo logo" width={80} />
                </Link>
              </li>
              {renderMainMenu()}
              <li className="border-t pt-2 [&>a]:w-full">
                <CTAButton size="sm" className="rounded-full w-full" />
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
      <div>
        <CTAButton size="sm" className="rounded-full" />
      </div>
    </div>
  );
};

const HeaderNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const MOBILE_BREAKPOINT = 640;

    if (typeof window === "undefined") {
      return;
    }

    const getWindowWidth = () => {
      const width = window.innerWidth;

      if (width <= MOBILE_BREAKPOINT && !isMobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    getWindowWidth();

    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav>{isMobile ? <MobileNavigation /> : <DesktopNavigation />}</nav>
    </header>
  );
};

export default HeaderNavigation;

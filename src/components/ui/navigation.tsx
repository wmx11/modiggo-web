import React from "react";
import Container from "./container";
import Logo from "@/app/assets/logo/logo.png";
import CTAButton from "./call-to-action-button";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="bg-white sticky top-0 z-10 py-3 border-b">
      <nav>
        <Container className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Modiggo logo" width={80} />
            </Link>
          </div>
          <div>
            <ul className="flex gap-6">
              <li>Services</li>
              <li>Pricing</li>
              <li>Case studies</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <CTAButton size="default" />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navigation;

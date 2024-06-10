import React from "react";
import Container from "./container";
import CTAButton from "./call-to-action-button";

const Navigation = () => {
  return (
    <header className="bg-white sticky top-0 z-10">
      <nav>
        <Container className="flex justify-between py-4 items-center">
          <div>Logo</div>
          <div>
            <ul className="flex gap-4">
              <li>Services</li>
              <li>Pricing</li>
              <li>Case studies</li>
              <li>About</li>
              <li>How we work</li>
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

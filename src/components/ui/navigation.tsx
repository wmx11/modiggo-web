import React from "react";
import Container from "./container";
import CTAButton from "./call-to-action-button";

const Navigation = () => {
  return (
    <header className="bg-white sticky top-0 z-10 py-3 border-b">
      <nav>
        <Container className="flex justify-between items-center">
          <div>Logo</div>
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

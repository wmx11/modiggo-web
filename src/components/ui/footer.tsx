import React from "react";
import Container from "./container";
import Title from "./title";

const Footer = () => {
  return (
    <footer className="bg-black bg-pattern text-white text-sm [&_ul]:space-y-2 [&_h4]:mb-4 py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8">
          <div>
            <Title order={4}>Services</Title>
            <ul>
              <li>Custom websites</li>
              <li>Custom e-commerce</li>
              <li>Custom web apps</li>
              <li>Custom mobile app</li>
            </ul>
          </div>
          <div>
            <Title order={4}>Modiggo</Title>
            <ul>
              <li>Case studies</li>
              <li>Team</li>
              <li>Culture</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <Title order={4}>Find us</Title>
          </div>
        </div>
        <div>
          <div className="space-x-4 text-xs">
            <span className="space-x-2">
              <span>@ {new Date().getFullYear()}</span>
              <span>Modiggo</span>
            </span>
            <span>All rights reserved</span>
            <span>Privacy policy</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

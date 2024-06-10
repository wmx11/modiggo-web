import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import React from "react";

const Hero = () => {
  return (
    <Section className="min-h-screen">
      <Container className="text-center">
        <div className="space-y-12">
          <Title order={1} className="text-7xl">
            Crafting High-Performance Websites <br />
            with{" "}
            <span className="bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent">
              Stunning Design & Speed
            </span>
          </Title>
          <Title
            order={2}
            className="font-normal text-xl text-muted-foreground"
          >
            We build websites that drive results and help your business grow. No
            Calls. No BS. Just Results.
          </Title>
          <div>
            <Button size="lg">Book a call</Button>
          </div>
        </div>
        <div></div>
      </Container>

      <div>Logos</div>
      <div>Social proof</div>
      <div>Portfolio</div>
      <div>Services</div>
      <div>Tech stack</div>
      <div>Contact us</div>
    </Section>
  );
};

export default Hero;

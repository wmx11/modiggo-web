import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/ui/call-to-action-button";
import Container from "@/components/ui/container";
import Highlight from "@/components/ui/highlight";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import React from "react";

const Hero = () => {
  return (
    <Section className="min-h-screen">
      <Container className="text-center flex flex-col justify-center items-center">
        <div className="space-y-6 mb-16">
          <Badge>We Are Your Digital Blacksmiths</Badge>
          <Title order={1} className="text-7xl font-semibold">
            Forging web solutions
            <br />
            that <Highlight>convert & drive change</Highlight>
          </Title>
          <Title
            order={2}
            className="font-normal text-xl text-muted-foreground"
          >
            We craft tailored web solutions, focus on adaptability and proactive
            partnerships to drive value and help your business grow
          </Title>
          <div>
            <CTAButton size="xl" />
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <span className="uppercase text-muted-foreground text-sm">
            Trusted by
          </span>
          <span className="flex gap-8">
            <div className="p-4 bg-red-200 w-[80px]"></div>
            <div className="p-4 bg-red-200 w-[80px]"></div>
            <div className="p-4 bg-red-200 w-[80px]"></div>
            <div className="p-4 bg-red-200 w-[80px]"></div>
          </span>
        </div>
      </Container>

      {/* <div>Logos</div>
      <div>Social proof</div>
      <div>Portfolio</div>
      <div>Services</div>
      <div>Tech stack</div>
      <div>Contact us</div> */}
    </Section>
  );
};

export default Hero;

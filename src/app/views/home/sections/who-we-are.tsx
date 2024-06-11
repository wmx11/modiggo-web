import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import React from "react";

const WhoWeAre = () => {
  return (
    <Section>
      <Container className="text-center space-y-6">
        <Badge>Who we are</Badge>
        <Title className="font-normal max-w-text mx-auto">
          We are Modiggo, a web development agency focused on building quality
          partnerships and crafting tailored solutions to help you grow and
          drive change.
        </Title>
      </Container>
    </Section>
  );
};

export default WhoWeAre;

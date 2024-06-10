import React from "react";
import Hero from "./sections/hero";
import Container from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import Title from "@/components/ui/title";

const HomeView = () => {
  return (
    <>
      <Hero />
      <div>
        <Container className="text-center space-y-6">
          <Badge>Who we are</Badge>
          <Title className="font-normal max-w-[600px] mx-auto">
            We are Adchitects an award-winning web design agency focused on
            fostering relationships & work culture to deliver world-class
            digital products.
          </Title>
        </Container>
      </div>
    </>
  );
};

export default HomeView;

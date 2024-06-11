"use client";
import AnimatedLogo from "@/components/ui/animated-logo";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useRef } from "react";

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  return (
    <Section
      className="relative flex items-center justify-center "
      ref={sectionRef}
    >
      <Container className="text-center space-y-6">
        <Badge>Who we are</Badge>
        <Title className="font-normal max-w-text mx-auto">
          <span>
            We are Modiggo
            <Avatar className="inline-flex mx-2">
              <Tooltip>
                <TooltipTrigger>
                  <AvatarImage src="https://pbs.twimg.com/profile_images/1703025436270149632/qJby7qRD_400x400.jpg" />
                </TooltipTrigger>
                <TooltipContent className="rotate-1">
                  Vainius. Founder of Modiggo.
                </TooltipContent>
              </Tooltip>
            </Avatar>
            <br />
          </span>
          <span>
            a web development agency focused on building quality partnerships
            and crafting tailored solutions to help you grow and drive change.
          </span>
        </Title>
      </Container>

      <AnimatedLogo
        className="max-w-[700px] absolute left-auto right-auto opacity-10 -z-10"
        container={sectionRef}
      />
    </Section>
  );
};

export default WhoWeAre;
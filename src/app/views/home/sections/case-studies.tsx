import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import React from "react";

const CaseStudies = () => (
  <Section>
    <Container className="space-y-6">
      <div className="space-y-2">
        <Badge>A peek into the forge</Badge>
        <Title>Our recent works</Title>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <Card
              className="flex p-4 min-h-[400px]"
              style={{
                backgroundColor: "#9c99ff",
                backgroundImage: `radial-gradient(at 3% 47%, hsla(173,71%,62%,1) 0px, transparent 50%),
radial-gradient(at 44% 71%, hsla(334,98%,69%,1) 0px, transparent 50%),
radial-gradient(at 76% 44%, hsla(298,71%,60%,1) 0px, transparent 50%),
radial-gradient(at 84% 74%, hsla(266,77%,65%,1) 0px, transparent 50%),
radial-gradient(at 88% 5%, hsla(168,68%,75%,1) 0px, transparent 50%),
radial-gradient(at 84% 81%, hsla(275,91%,66%,1) 0px, transparent 50%),
radial-gradient(at 75% 56%, hsla(346,82%,75%,1) 0px, transparent 50%)`,
              }}
            >
              <CardContent className="flex-1 bg-white/20 backdrop-blur-lg rounded-lg">
                This is a test content
              </CardContent>
            </Card>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <Badge className="mb-2">Crypto</Badge>
              <Title order={2} className="">
                Enabling users of a new, custom blockchain trade their
                cryptocurrency assets
              </Title>
            </div>
            <p className="text-muted-foreground">
              Pet Media Group centralized the management of 6 pet marketplaces
              worth $12M by architecting a new platform and migrating millions
              of data points to it with The Software House.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

export default CaseStudies;

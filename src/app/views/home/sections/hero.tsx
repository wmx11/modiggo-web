import EurovaistineLogo from "@/app/assets/company-logos/eurovaistine_logo.png";
import LuminorLogo from "@/app/assets/company-logos/luminor_logo.png";
import { Badge } from "@/components/ui/badge";
import CTAButton from "@/components/ui/call-to-action-button";
import Container from "@/components/ui/container";
import Highlight from "@/components/ui/highlight";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Image from "next/image";

const Hero = () => {
  return (
    <Section className="">
      <Container className="">
        <div className="space-y-6 mb-16">
          <Badge>We Are Your Digital Blacksmiths</Badge>
          <Title order={1} className="md:text-7xl">
            Forging web solutions
            <br />
            that <Highlight>convert & drive change</Highlight>
          </Title>
          <Title
            order={2}
            className="font-normal text-xl text-muted-foreground max-w-text"
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
          <span className="flex gap-12">
            <div className="max-w-[80px]">
              <Image src={EurovaistineLogo} alt="Eurovaistine logo" />
            </div>
            <div className="max-w-[80px]">
              <Image src={LuminorLogo} alt="Luminor logo" />
            </div>
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

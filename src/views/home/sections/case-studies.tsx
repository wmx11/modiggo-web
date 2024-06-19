import TheCoinLogic from "@/assets/images/the_coin_logic.png";
import SolpakaNFT from "@/assets/images/solpaka_nft.png";
import Eurovaistine from "@/assets/images/eurovaistine.png";
import NobleSwap from "@/assets/images/nobleswap.png";
import Tiglee from "@/assets/images/tiglee.png";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface CaseStudyProps {
  image: string | StaticImageData;
  alt: string;
  category: string[];
  title: string;
  description: string;
}

const caseStudies: CaseStudyProps[] = [
  {
    title:
      "Eurovaistine E-pharmacy. ~98% page speed index, fastest among competitors.",
    description:
      "Eurovaistine project was struggling with slow page load times and poor overall performance. Working together with full backend and frontend teams they achieved ~98% page speed index bringing them more revenue from happy customers.",
    alt: "Eurovaistine e-pharmacy",
    category: ["E-commerce", "Frontend"],
    image: Eurovaistine,
  },
  {
    title: "Tiglee. A component-based website builder.",
    description:
      "Modiggo is currently developing a component-based website builder that helps small businesses get their websites up and running faster with reusable components they can host and develop themselves saving them time and effort.",
    alt: "Tiglee product photo",
    category: ["SaaS Product", "Fullstack", "Work in Progress"],
    image: Tiglee,
  },
  {
    title: "Solpaka. Enabling a community-driven project to distribute NFTs.",
    description:
      "A custom Web3 application enabling people to mint a Solpaka NFT on the Solana blockchain. NFTs generated using Hashlips, hosted using Candy Machine and Sugar with guards.",
    alt: "Solpaka OG NFT Application",
    category: ["Crypto", "Fullstack"],
    image: SolpakaNFT,
  },
  {
    title: "NobleSwap. A brand-new crypto swap for the Gauss chain.",
    description:
      "The Gauss chain needed its cryptocurrency exchange to allow its users to swap native currency into other tokens. The NobleSwap project allowed Gauss to do just that.",
    alt: "NobleSwap application",
    category: ["Crypto", "Frontend"],
    image: NobleSwap,
  },
  {
    title: "The Coin Logic. Allowing product owners to measure performance.",
    description:
      "A bespoke blockchain indexing and cryptocurrency social media aggregator helping project owners track and measure their marketing and community performance.",
    alt: "The Coin Logic project",
    category: ["Crypto", "Fullstack"],
    image: TheCoinLogic,
  },
];

const CaseStudyCard: FC<CaseStudyProps> = ({
  image,
  alt,
  category,
  description,
  title,
}) => {
  return (
    <div>
      <div className="mb-4">
        <div className="relative bg-white flex flex-col rounded-lg overflow-clip shadow-md">
          <div>
            <Image src={image} className="object-contain" alt={alt} />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <>
          <div className="space-x-2">
            {category.map((item, index) => (
              <Badge key={`${title}_category_${index}`}>{item}</Badge>
            ))}
          </div>
          <Title order={3}>{title}</Title>
        </>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const CaseStudies = () => (
  <Section id="case-studies">
    <Container className="space-y-6">
      <div className="space-y-2">
        <Badge>A peek into the forge</Badge>
        <Title>Our recent works</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-24 antialiased">
        {caseStudies.map((props, index) => (
          <CaseStudyCard {...props} key={`case_study_${index}`} />
        ))}
      </div>
    </Container>
  </Section>
);

export default CaseStudies;

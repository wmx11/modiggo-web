import TheCoinLogic from "@/app/assets/images/the_coin_logic.png";
import SolpakaNFT from "@/app/assets/images/solpaka_nft.png";
import Eurovaistine from "@/app/assets/images/eurovaistine.png";
import NobleSwap from "@/app/assets/images/nobleswap.png";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type CaseStudyProps = {
  image: string | StaticImageData;
  alt: string;
  category: string[];
  title: string;
  description: string;
};

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

const caseStudies: CaseStudyProps[] = [
  {
    title: "The Coin Logic",
    description:
      "A bespoke blockchain indexing and cryptocurrency social media aggregator helping project owners track and measure their marketing and community performance.",
    alt: "The Coin Logic Project",
    category: ["Crypto", "Fullstack"],
    image: TheCoinLogic,
  },
  {
    title: "Solpaka NFT App",
    description:
      "A custom Web3 application enabling people to mint a Solpaka NFT on the Solana blockchain. NFTs generated using Hashlips, hosted using Candy Machine and Sugar with guards.",
    alt: "Solpaka OG NFT Application",
    category: ["Crypto", "Fullstack"],
    image: SolpakaNFT,
  },
  {
    title: "Eurovaistine E-pharmacy",
    description:
      "A custom Web3 application enabling people to mint a Solpaka NFT on the Solana blockchain. NFTs generated using Hashlips, hosted using Candy Machine and Sugar with guards.",
    alt: "Solpaka OG NFT Application",
    category: ["E-commerce", "Frontend"],
    image: Eurovaistine,
  },
  {
    title: "Tiglee Website Builder",
    description:
      "A custom Web3 application enabling people to mint a Solpaka NFT on the Solana blockchain. NFTs generated using Hashlips, hosted using Candy Machine and Sugar with guards.",
    alt: "Solpaka OG NFT Application",
    category: ["SaaS Product", "Fullstack", "Work in Progress"],
    image: Eurovaistine,
  },
  {
    title: "NobleSwap",
    description:
      "A custom Web3 application enabling people to mint a Solpaka NFT on the Solana blockchain. NFTs generated using Hashlips, hosted using Candy Machine and Sugar with guards.",
    alt: "Solpaka OG NFT Application",
    category: ["Crypto", "Frontend"],
    image: NobleSwap,
  },
];

const CaseStudies = () => (
  <Section id="case-studies">
    <Container className="space-y-6">
      <div className="space-y-2">
        <Badge>A peek into the forge</Badge>
        <Title>Our recent works</Title>
      </div>
      <div className="grid grid-cols-2 gap-8 antialiased">
        {caseStudies.map((props, index) => (
          <CaseStudyCard {...props} key={`case_study_${index}`} />
        ))}
      </div>
    </Container>
  </Section>
);

export default CaseStudies;

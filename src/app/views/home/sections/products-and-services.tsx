/* eslint-disable react/no-unescaped-entities */
import LaravelLogo from "@/app/assets/stack-logos/laravel.png";
import NextjsLogo from "@/app/assets/stack-logos/next_js.png";
import NodeLogo from "@/app/assets/stack-logos/node_js.png";
import ReactLogo from "@/app/assets/stack-logos/react.webp";
import TailwindLogo from "@/app/assets/stack-logos/tailwindcss.png";
import TypescriptLogo from "@/app/assets/stack-logos/typescript.png";
import DigitalOceanLogo from "@/app/assets/stack-logos/digital_ocean.png";
import DockerLogo from "@/app/assets/stack-logos/docker.png";
import GithubLogo from "@/app/assets/stack-logos/github.png";
import VercelLogo from "@/app/assets/stack-logos/vercel.png";
import RedisLogo from "@/app/assets/stack-logos/redis.webp";
import PostgreLogo from "@/app/assets/stack-logos/postgresql.webp";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import CTAButton from "@/components/ui/call-to-action-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/container";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Input } from "@/components/ui/input";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import {
  AppWindow,
  DatabaseZap,
  Handshake,
  MessageCircleQuestion,
  ScanSearch,
  SearchIcon,
  Users,
} from "lucide-react";
import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface ProductAndServiceProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const productsAndServices: ProductAndServiceProps[] = [
  {
    title: "Design and development",
    description:
      "We will forge your app, dApp, website, landing page, digital product, or MVP. We can cover design, front-end, back-end, or full-stack scopes using well-known tech stacks.",
    icon: <AppWindow />,
    className: "lg:col-span-2",
    children: (
      <>
        <InfiniteMovingCards
          items={[
            <Badge key="react_badge">
              <Image src={ReactLogo} alt="React logo" width={12} />
              <span className="ml-2">React</span>
            </Badge>,
            <Badge key="node_badge">
              <Image src={NodeLogo} alt="Node logo" width={12} />
              <span className="ml-2">NodeJS</span>
            </Badge>,
            <Badge key="typescript_badge">
              <Image src={TypescriptLogo} alt="Typescript logo" width={12} />
              <span className="ml-2">TypeScript</span>
            </Badge>,
            <Badge key="nextjs_badge">
              <Image src={NextjsLogo} alt="Nextjs logo" width={12} />
              <span className="ml-2">NextJS</span>
            </Badge>,
            <Badge key="tailwind_badge">
              <Image src={TailwindLogo} alt="Tailwind logo" width={12} />
              <span className="ml-2">TailwindCSS</span>
            </Badge>,
            <Badge key="laravel_badge">
              <Image src={LaravelLogo} alt="Laravel logo" width={12} />
              <span className="ml-2">Laravel</span>
            </Badge>,
          ]}
        />
      </>
    ),
  },
  {
    title: "Hosting, deployment & maintenance",
    description:
      "We will get your web apps up and running where they belong - on robust and battle-tested hosting platforms. We will also maintain your applications so they work and stay up-to-date.",
    icon: <DatabaseZap />,
    className: "lg:col-span-1 lg:row-span-2",
    children: (
      <>
        <InfiniteMovingCards
          items={[
            <Badge key="digital_ocean_badge">
              <Image
                src={DigitalOceanLogo}
                alt="Digital ocean logo"
                width={12}
              />
              <span className="ml-2">Digital Ocean</span>
            </Badge>,
            <Badge key="docker_badge">
              <Image src={DockerLogo} alt="Docker logo" width={12} />
              <span className="ml-2">Docker</span>
            </Badge>,
            <Badge key="github_badge">
              <Image src={GithubLogo} alt="Github logo" width={12} />
              <span className="ml-2">Github</span>
            </Badge>,
          ]}
        />
        <InfiniteMovingCards
          direction="right"
          speed="normal"
          items={[
            <Badge key="vercel_badge">
              <Image src={VercelLogo} alt="Vercel logo" width={12} />
              <span className="ml-2">Vercel</span>
            </Badge>,
            <Badge key="redis_badge">
              <Image src={RedisLogo} alt="Redis logo" width={12} />
              <span className="ml-2">Redis</span>
            </Badge>,
            <Badge key="postgre_badge">
              <Image src={PostgreLogo} alt="Postgresql logo" width={12} />
              <span className="ml-2">PostgreSQL</span>
            </Badge>,
          ]}
        />
      </>
    ),
  },
  {
    title: "Get found by search engines",
    description:
      "We will optimize your websites for search engines so you can enjoy the traffic you deserve.",
    icon: <ScanSearch />,
    className: "lg:col-span-1 lg:row-span-2",
    children: (
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="relative flex items-center">
            <SearchIcon className="absolute w-3 ml-2" />
            <Input
              className="pl-6 text-muted-foreground"
              value="Your app name"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] text-muted-foreground">
                www.hackernews.com
              </p>
              <p className="text-sm">
                We launched <strong>Your app.</strong>
              </p>
              <p className="text-xs text-muted-foreground">
                The comments should look something like this but let's focus on
                your app.
              </p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">
                www.fancy-website.com
              </p>
              <p className="text-sm">
                <strong>Your app</strong> is making a change!
              </p>
              <p className="text-xs text-muted-foreground">
                With Modiggo you can create an app that is loved by search
                engines. We don't JUST code. We also help you rank.
              </p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">
                www.othernews.com
              </p>
              <p className="text-sm">
                10 ways <strong>Your app</strong> helped them do stuff...
              </p>
              <p className="text-xs text-muted-foreground">
                One of the best ways to get traffic is through organic reach.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Updates, communication & consulting",
    description:
      "You don't have to stay in the dark about where your app is. We will regularly post updates and communicate about your product's progress. Have questions or don't know what to choose? We value honesty and we will guide you on the right path.",
    icon: <Handshake />,
    className: "lg:col-span-1",
    children: "",
  },
  {
    title: "Augmentation & help",
    description:
      "We understand that some projects will have strict deadlines and more hands on board are welcome. You can temporarily choose a digital blacksmith from our curated talent pool to help you tackle the challenges.",
    icon: <Users />,
    className: "lg:col-span-1",
    children: "",
  },
  {
    title: "Anything else?",
    description:
      "If you're not sure if you're the right fit or if you found what you're looking for - feel free to drop us a message or schedule a free consultation.",
    icon: <MessageCircleQuestion />,
    className: "lg:col-span-1",
    children: (
      <>
        <CTAButton size="sm" />
      </>
    ),
  },
];

const ProductAndServiceCard: FC<ProductAndServiceProps> = ({
  title,
  description,
  icon,
  children,
  className,
}) => {
  return (
    <Card className={twMerge("group", className)}>
      <CardHeader className="space-y-4">
        <Avatar className="group-hover:-translate-y-1 transition-transform">
          <AvatarFallback className="bg-black [&>*]:w-4 [&>*]:text-white">
            {icon}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const ProductsAndServices = () => {
  return (
    <Section id="services">
      <Container className="space-y-6">
        <Title>Products & services</Title>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {productsAndServices.map((props, index) => (
            <ProductAndServiceCard {...props} key={`${props.title}_${index}`} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProductsAndServices;

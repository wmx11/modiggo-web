/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import React from "react";

const ProductsAndServices = () => {
  return (
    <Section>
      <Container className="space-y-6">
        <Title>Products & services</Title>
        <div className="grid grid-cols-3 gap-2">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="mb-2">Web design and development</CardTitle>
              <CardDescription>
                We'll build you a website that's so good, it'll make all the
                other websites jealous. Trust me, not kidding.
              </CardDescription>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
          <Card className="col-span-1 row-span-2">
            <CardHeader>
              <CardTitle className="mb-2">
                Hosting, deployment & maintenance
              </CardTitle>
              <CardDescription>
                We'll Get your website out there in the world, where it belongs,
                with our lightning-fast deployment services.
              </CardDescription>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle className="mb-2">Get found on Google</CardTitle>
              <CardDescription>
                We will make sure your website is optimized for search engines
                so you can get the traffic you're looking for.
              </CardDescription>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle className="mb-2">Regular updates & tracking</CardTitle>
              <CardDescription>
                Get regular updates on your product's progress and see it come
                to life.
              </CardDescription>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="mb-2">Everything else</CardTitle>
              <CardDescription>
                React Components, Ecommerce, Landing pages, Dashboards. You name
                it, we've done it AND we'll do it for you.
              </CardDescription>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default ProductsAndServices;

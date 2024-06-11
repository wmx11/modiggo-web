import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import React from "react";

const ProductsAndServices = () => {
  return (
    <Section className="">
      <Container className="space-y-6">
        <Title>Services</Title>
        <div className="grid grid-cols-3 gap-2">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Web design and development</CardTitle>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
          <Card className="col-span-1 row-span-2">
            <CardHeader>
              <CardTitle>Hosting, deployment & maintenance</CardTitle>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle>Get found on Google</CardTitle>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle>Regular updates & tracking</CardTitle>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Everything else</CardTitle>
            </CardHeader>
            <CardContent>Test</CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default ProductsAndServices;

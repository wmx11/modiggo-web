import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import React from "react";

const QuestionsAndAnswers = () => {
  return (
    <Section>
      <Container className="space-y-6">
        <Title>Questions & Answers</Title>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Question 1</AccordionTrigger>
              <AccordionContent>Answer 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Question 1</AccordionTrigger>
              <AccordionContent>Answer 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Question 1</AccordionTrigger>
              <AccordionContent>Answer 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>Question 1</AccordionTrigger>
              <AccordionContent>Answer 1</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default QuestionsAndAnswers;

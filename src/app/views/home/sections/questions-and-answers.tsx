import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";

type QuestionsAndAnswersSchema = {
  question: string;
  answer: string;
};

const questionsAndAnswers: QuestionsAndAnswersSchema[] = [
  {
    question: "What are digital products?",
    answer: "They are things",
  },
  {
    question: "Can you deliver a complete product?",
    answer: "They are things",
  },
  {
    question: "How much time do you need?",
    answer: "They are things",
  },
  {
    question: "How much will it cost?",
    answer: "They are things",
  },
];

const QuestionsAndAnswers = () => {
  return (
    <Section>
      <Container className="space-y-6">
        <Title>Questions & answers</Title>
        <div>
          <Accordion type="single" collapsible>
            {questionsAndAnswers.map((item, index) => (
              <AccordionItem
                value={item.question}
                key={`${item.question}_${index}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default QuestionsAndAnswers;

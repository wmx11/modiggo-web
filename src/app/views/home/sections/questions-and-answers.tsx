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

type QuestionsAndAnswersSchema = {
  question: string;
  answer: string;
};

const questionsAndAnswers: QuestionsAndAnswersSchema[] = [
  {
    question: "What are digital products?",
    answer:
      "Digital products are websites, online stores, applications, or any other digital material that can bring you revenue. We love developing new products but it's not the only thing we do. We can also help you with ideation, branding, consulting, maintenance, and guiding you on the right path.",
  },
  {
    question: "Can you deliver a complete product?",
    answer:
      "We can develop and deliver end-to-end products from scratch. We know that sometimes it's not enough to develop something so we can help you with development, copywriting, design, social media, and SEO services. If you already have a product or a service, we can help you find ways to make it even better.",
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
        <div className="spacey-y-2">
          <Badge>Q&A</Badge>
          <Title>Answering some of your questions</Title>
        </div>
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

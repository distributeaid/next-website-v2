import { FC } from "react";
import { Container, Heading, Section } from "@radix-ui/themes";

const faqs = [
  ["Here is where we'd put a question?", "Here is where we'd put an answer"],
  ["Here is where we'd put a question?", "Here is where we'd put an answer"],
  ["Here is where we'd put a question?", "Here is where we'd put an answer"],
]

export const HrtFaq: FC = () => (
  <>
    <Section>
      <Heading>FAQ</Heading>
      <Container>
        {faqs?.map((item, index) => (
          <div>
            <div className="font-bold">Q: "{item[0]}"</div>
            <div>A: {item[1]}</div>
          </div>
        ))}
      </Container>
    </Section>
  </>
);

import { Text } from "@radix-ui/themes";
import type FaqItem from "./types/FaqItem";

export const RefugeeSupportEUInNumbersValues = {
  aidWorth: 1_649_018,
  aidItems: 207_670,
  soap: 94_300,
};

export const faqs: FaqItem[] = [
  {
    q: "Where does Distribute Aid work in Europe?",
    a: (
      <Text as="p">
        <strong>A:</strong> We’ve delivered aid to besieged communities in
        Ukraine, and refugee camps in Greece and France. We also work with
        support centers and resource hubs across the Balkans.
      </Text>
    ),
  },
  {
    q: "How does Distribute Aid help refugees in Europe?",
    a: (
      <>
        <Text as="p">
          <strong>A:</strong> We provide the items that people on the move need
          most, such as shoes, sleeping bags, and hygiene products. We also
          support their human dignity by providing them with the tools to shape
          their own lives, such as sewing machines and art supplies.
        </Text>
      </>
    ),
  },
  {
    q: "What is Distribute Aid doing to respond to European aid budgets being slashed?",
    a: (
      <>
        <Text as="p">
          <strong>A:</strong> Along with the aid we deliver, Distribute Aid
          provides our partners with technical expertise and detailed
          documentation that enable them save tens of thousands of euros on
          import taxes. Many partners are able to continue providing services as
          a result.
        </Text>
      </>
    ),
  },
];

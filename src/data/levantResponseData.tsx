import { Text } from "@radix-ui/themes";
import type FaqItem from "./types/FaqItem";

export const levantInNumbersValues = {
  aidWorth: 626_161,
  aidItems: 161_051,
  mensturalHygineKits: 5_000,
};

export const faqs: FaqItem[] = [
  {
    q: "Where does Distribute Aid work in the Levant?",
    a: (
      <Text as="p">
        <strong>A:</strong> We've sent aid shipments to Lebanon, Gaza, the West
        Bank, and Jordan. Once the aid arrives, our partners at Anera have
        on-the-ground teams who ensure it goes directly to people in need.
      </Text>
    ),
  },
  {
    q: "Who does Distribute Aid help in the Levant?",
    a: (
      <>
        <Text as="p">
          <strong>A:</strong> We work with displaced Palestinian, Lebanese, and
          Syrian communities across the region. Many of them have recently fled
          their homes to seek safety (sometimes in different countries), while
          others are living in long-term refugee camps.
        </Text>
      </>
    ),
  },
  {
    q: "Is it actually possible to ship aid to the Levant?",
    a: (
      <>
        <Text as="p">
          <strong>A:</strong> Restrictions on aid are always tight in the
          region, but our team is highly experienced at navigating customs
          requirements and other logistical hurdles. Although the rules are
          constantly changing, we've never had a shipment turned back.
        </Text>
      </>
    ),
  },
];

import { Text } from "@radix-ui/themes";
import type FaqItem from "./types/FaqItem";

export const USDisasterInNumbersValues = {
  aidWorth: 1_337_443,
  diapers: 113_292,
  n95Masks: 100_000,
};

export const faqs: FaqItem[] = [
  {
    q: "Where does Distribute Aid work in the United States?",
    a: (
      <Text as="p">
        <strong>A:</strong> Our network spans the country, with a particular
        focus on California, the Gulf Coast, and the Southeast.
      </Text>
    ),
  },
  {
    q: "How does Distribute Aid respond to disasters?",
    a: (
      <>
        <Text as="p">
          <strong>A:</strong> Our pre-positioned hubs contain a wide variety of
          goods that are always necessary after a disaster: clean clothes, baby
          care items, bottled water, and so on. We also work with our grassroots
          partners to identify specific needs their community members have, from
          furniture to mobility aids.
        </Text>
      </>
    ),
  },
  {
    q: "What are some examples of Distribute Aid’s disaster response work?",
    a: (
      <>
        <Text as="p">
          <strong>A:</strong> In 2025, we focused primarily on immediate and
          long-term relief efforts for the Los Angeles wildfires. The previous
          year, we focused on delivering aid to survivors of Hurricane Helene
          and other extreme Atlantic storms.
        </Text>
      </>
    ),
  },
];

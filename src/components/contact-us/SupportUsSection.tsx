import { Box, Flex, Link } from "@radix-ui/themes";
import type { IconType } from "react-icons";
import { LuPackageCheck, LuHeartHandshake } from "react-icons/lu";
import { FiGift } from "react-icons/fi";

import IconHeader from "../text/IconHeader";
import type { IconHeaderColor } from "../text/IconHeader";

interface SupportSectionWrapperProps {
  Icon: IconType;
  title: string;
  color?: IconHeaderColor;
  children: React.ReactNode;
}

const SupportSectionWrapper = ({
  Icon,
  title,
  color,
  children,
}: SupportSectionWrapperProps) => (
  <Box px="5">
    <IconHeader Icon={Icon} title={title} color={color} />
    <Box pt="4" className="[&_ul]:mb-5 [&_li]:list-disc [&_li]:ml-6">
      {children}
    </Box>
  </Box>
);

const SupportUsSection = () => (
  <Flex direction="column" gap="8" mb="4">
    <SupportSectionWrapper Icon={LuPackageCheck} title="Got Aid?" color="pink">
      <p>
        While we help distribute shipments, we can&apos;t collect items
        ourselves. However, we can usually let you know which local hub you can
        turn to with your donations.
      </p>
      <ul>
        <li>
          If you’re in the U.K., please contact{" "}
          <Link href="mailto:hubs@distributeaid.org">
            hubs@distributeaid.org
          </Link>{" "}
          for more information on where to take your donations.
        </li>
        <li>
          If you’re based elsewhere and don’t know of any collection groups
          local to you, please email us at{" "}
          <Link href="mailto:hello@distributeaid.org">
            hello@distributeaid.org
          </Link>
          .
        </li>
      </ul>
      <p>
        If you want our support to organise a shipment, email us at{" "}
        <Link href="mailto:logistics@distributeaid.org">
          logistics@distributeaid.org
        </Link>
        .
      </p>
    </SupportSectionWrapper>
    <SupportSectionWrapper Icon={FiGift} title="Support Us" color="green">
      <p>
        If you would like to support us financially, please visit our{" "}
        <Link href="/donate">Donate page</Link> to see different options for how
        to donate.
      </p>
    </SupportSectionWrapper>
    <SupportSectionWrapper Icon={LuHeartHandshake} title="Volunteer With Us">
      <p>
        Distribute Aid welcomes volunteers worldwide and offers remote,
        part-time opportunities across various projects. You could help out with
        logistics or social media. And if you’re a software developer, designer,
        or technical writer, you could join our growing open-source tech team.
      </p>
      <ul>
        <li>
          If you want to help, email us at{" "}
          <Link href="mailto:join@distributeaid.org">
            join@distributeaid.org
          </Link>
          .
        </li>
        <li>
          For tech-specific volunteering, please email{" "}
          <Link href="mailto:tech@distributeaid.org">
            tech@distributeaid.org
          </Link>
          .
        </li>
      </ul>
      <p>We’d love to hear from you!</p>
    </SupportSectionWrapper>
  </Flex>
);

export default SupportUsSection;

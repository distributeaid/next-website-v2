import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import { ReactNode } from "react";
import { FaRegFileAlt, FaTruck, FaBook } from "react-icons/fa";
import Image from "next/image";

const informationColumn = [
  "Information",
  "Needs Assessments",
  "Aid Matching",
  "Impact Reporting",
];
const logisticsColumn = [
  "Logistics",
  "Tracking & Seafreight",
  "Warehousing",
  "Import/Export Customs",
];
const knowledgeSharingColumn = [
  "Knowledge Sharing",
  "Open Source Tech",
  "Guides",
  "Trainings",
];

const informationColumnColors = [
  "bg-[--indigo-10]",
  "bg-[--indigo-11]",
  "bg-[--indigo-12]",
];
const items = [informationColumn, logisticsColumn, knowledgeSharingColumn];

const headerToIconMap: { [key: string]: ReactNode } = {
  Information: (
    <FaRegFileAlt className="w-6 h-6 text-navy-900" aria-hidden="true" />
  ),
  Logistics: <FaTruck className="w-6 h-6 text-navy-900" aria-hidden="true" />,
  "Knowledge Sharing": (
    <FaBook className="w-6 h-6 text-navy-900" aria-hidden="true" />
  ),
};

interface CircleIconProps {
  color?: string;
}

const CircleIcon = ({ color = "bg-navy-900" }: CircleIconProps) => (
  <Box className={`size-6 rounded-full ${color}`} aria-hidden="true" />
);

const GridHeader = ({ label }: { label: string }) => (
  <Flex gap="2" align="center">
    {headerToIconMap[label]}
    <Text className="text-navy-900" size="5" weight="bold">
      {label}
    </Text>
  </Flex>
);

const GridItem = ({
  label,
  colorIdx,
}: {
  label: string;
  colorIdx?: number;
}) => (
  <Flex gap="2" align="center">
    <CircleIcon color={informationColumnColors[colorIdx ?? 0]} />
    <Text className="text-navy-900" size="4" weight="medium">
      {label}
    </Text>
  </Flex>
);

const GridColumn = ({ column }: { column: string[] }) => (
  <Flex direction="column" gap="4" align="start">
    {column.map((label, idx) =>
      idx === 0 ? (
        <GridHeader key={label} label={label} />
      ) : (
        <GridItem key={label} label={label} colorIdx={idx} />
      ),
    )}
  </Flex>
);

const HowWeHelp = () => {
  return (
    <Box className="bg-slate-100">
      <Box
        className="bg-[--purple-7] text-navy-900 shadow"
        p="4"
        mb="8"
        asChild
      >
        <Heading
          as="h2"
          id="how-we-help-heading"
          align="center"
          size={{
            initial: "5",
            md: "7",
          }}
        >
          How we help get{" "}
          <Text weight="bold" as="span">
            the right
          </Text>{" "}
          aid delivered
        </Heading>
      </Box>
      {/* Content Section */}
      <Section p="9" pt="0">
        {/* Image Section */}
        <Flex justify="center" mb="8">
          <Image
            src="/images/home/da-circular-economy.png"
            alt="Flow of donations: to hub, then to grassroots aid."
            width={1000}
            height={600}
            className="object-cover rounded-lg"
            loading="lazy"
          />
        </Flex>
        {/* Grid Section */}
        <Flex justify="center" width="100%">
          <Grid
            columns={{
              initial: "1",
              lg: "3",
            }}
            width="100%"
            gap="8"
            asChild
          >
            <ul aria-label="How We Help Columns">
              {items.map((column, idx) => (
                <li key={idx} aria-label={`How We Help Column ${idx + 1}`}>
                  <Flex justify="center" width="100%">
                    <GridColumn column={column} />
                  </Flex>
                </li>
              ))}
            </ul>
          </Grid>
        </Flex>
      </Section>
    </Box>
  );
};

export default HowWeHelp;

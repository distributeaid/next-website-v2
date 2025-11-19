import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import { ReactNode } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import {
  FaTruck as FaTruckRegular,
  FaBook as FaBookRegular,
} from "react-icons/fa6";
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
  "bg-[--indigo-12]",
  "bg-[--indigo-11]",
  "bg-[--indigo-10]",
];
const logisticsColumnColors = [
  "bg-[--green-12]",
  "bg-[--green-11]",
  "bg-[--green-10]",
];
const knowledgeSharingColumnColors = [
  "bg-[--slate-12]",
  "bg-[--slate-11]",
  "bg-[--slate-10]",
];
const items = [informationColumn, logisticsColumn, knowledgeSharingColumn];
const columnColorArrays = [
  informationColumnColors,
  logisticsColumnColors,
  knowledgeSharingColumnColors,
];

const headerToIconMap: { [key: string]: ReactNode } = {
  Information: (
    <FaRegFileAlt
      className="w-5 h-5 md:w-6 md:h-6 text-navy-900"
      aria-hidden="true"
    />
  ),
  Logistics: (
    <FaTruckRegular
      className="w-5 h-5 md:w-6 md:h-6 text-navy-900"
      aria-hidden="true"
    />
  ),
  "Knowledge Sharing": (
    <FaBookRegular
      className="w-5 h-5 md:w-6 md:h-6 text-navy-900"
      aria-hidden="true"
    />
  ),
};

interface CircleIconProps {
  color?: string;
}

const CircleIcon = ({ color = "bg-navy-900" }: CircleIconProps) => (
  <Box
    className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${color}`}
    aria-hidden="true"
  />
);

const GridHeader = ({ label }: { label: string }) => (
  <Flex gap="2" align="center">
    {headerToIconMap[label]}
    <Text
      className="text-navy-900"
      size={{ initial: "4", md: "5" }}
      weight="bold"
    >
      {label}
    </Text>
  </Flex>
);

const GridItem = ({
  label,
  colorIdx,
  columnIndex,
}: {
  label: string;
  colorIdx?: number;
  columnIndex: number;
}) => {
  const colorArray = columnColorArrays[columnIndex] || informationColumnColors;
  return (
    <Flex gap="2" align="center">
      <CircleIcon color={colorArray[colorIdx ?? 0]} />
      <Text
        className="text-navy-900"
        size={{ initial: "3", md: "4" }}
        weight="medium"
      >
        {label}
      </Text>
    </Flex>
  );
};

const GridColumn = ({
  column,
  columnIndex,
}: {
  column: string[];
  columnIndex: number;
}) => (
  <Flex direction="column" gap={{ initial: "3", md: "4" }} align="start">
    {column.map((label, idx) =>
      idx === 0 ? (
        <GridHeader key={label} label={label} />
      ) : (
        <GridItem
          key={label}
          label={label}
          colorIdx={idx}
          columnIndex={columnIndex}
        />
      ),
    )}
  </Flex>
);

const HowWeHelp = () => {
  return (
    <Box className="bg-slate-100">
      <Box
        className="bg-[--purple-7] text-navy-900 shadow"
        p={{ initial: "3", md: "4" }}
        mb={{ initial: "5", md: "8" }}
        asChild
      >
        <Heading
          as="h2"
          id="how-we-help-heading"
          align="center"
          weight="regular"
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
      <Section
        p={{ initial: "4", sm: "6", md: "9" }}
        px={{ initial: "4", md: "9" }}
        pt="0"
      >
        {/* Image Section */}
        <Flex justify="center" mb={{ initial: "5", md: "8" }}>
          <Image
            src="/images/home/da-circular-economy.png"
            alt="Flow of donations: to hub, then to grassroots aid."
            width={800}
            height={480}
            className="object-cover rounded-lg w-full max-w-[800px] h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            loading="lazy"
          />
        </Flex>
        {/* Grid Section */}
        <Flex justify="center" width="100%">
          <Grid
            columns={{
              initial: "1",
              md: "2",
              lg: "3",
            }}
            width="100%"
            gap={{ initial: "5", md: "7", lg: "8" }}
            asChild
          >
            <ul aria-label="How We Help Columns">
              {items.map((column, idx) => (
                <li key={idx} aria-label={`How We Help Column ${idx + 1}`}>
                  <Flex justify="center" width="100%">
                    <GridColumn column={column} columnIndex={idx} />
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

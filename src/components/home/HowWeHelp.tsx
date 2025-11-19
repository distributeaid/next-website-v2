import { Grid } from "@radix-ui/themes";
import { ReactNode } from "react";
import { FaRegFileAlt, FaTruck, FaBook } from "react-icons/fa";

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
  <span
    className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${color}`}
    aria-hidden="true"
  ></span>
);

const GridItem = ({
  text,
  circleIconColor,
}: {
  text: string;
  circleIconColor?: number;
}) => (
  <div className="flex items-center gap-2">
    <CircleIcon color={informationColumnColors[circleIconColor ?? 0]} />
    <span className="text-navy-900 font-medium">{text}</span>
  </div>
);
const GridHeader = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    {headerToIconMap[text]}
    <span className="text-navy-900 font-large font-semibold">{text}</span>
  </div>
);

const GridColumn = ({ items }: { items: string[] }) => (
  <div className="flex flex-col gap-4">
    {items.map((item, index) => {
      if (index === 0) {
        return <GridHeader key={item} text={item} />;
      }
      return <GridItem key={item} text={item} circleIconColor={index} />;
    })}
  </div>
);
const HowWeHelp = () => {
  return (
    <section className="mb-12" aria-labelledby="how-we-help-heading">
      {/* Banner */}
      <h2
        id="how-we-help-heading"
        className="bg-[--purple-7] text-navy-900 py-4 px-4 mb-6 text-center text-lg md:text-2xl shadow"
      >
        How we help get <span className="font-semibold">the right</span> aid
        delivered
      </h2>
      {/* Radix UI Grid */}
      <Grid
        columns="3"
        gap="4"
        rows="repeat(2, 64px)"
        width="auto"
        className="px-4"
        role="list"
      >
        <div className="col-span-3 w-full flex justify-center">
          <img
            src="images/home/da-circular-economy.png"
            alt="Flow of donations: to hub, then to grassroots aid."
            className="w-full max-w-[800px] min-h-[600px] h-auto object-cover rounded-lg"
          />
        </div>
        {items.map((column, idx) => (
          <GridColumn key={idx} items={column} />
        ))}
      </Grid>
    </section>
  );
};

export default HowWeHelp;

import { Grid } from "@radix-ui/themes";

const informationColumn = ["Information", "Needs Assessments", "Aid Matching", "Impact Reporting"];
const logisticsColumn = ["Logistics", "Tracking & Seafreight", "Warehousing", "Import/Export Customs"];
const knowledgeSharingColumn = ["Knowledge Sharing", "Open Source Tech", "Guides", "Trainings"];

const informationColumnColors = ['bg-[--indigo-12]', 'bg-[--blue-9]', 'bg-[--blue-10]'];
const items = [informationColumn, logisticsColumn, knowledgeSharingColumn];

const headerToSvgMap: { [key: string]: string } = { 
  "Information": 'images/regular-routes/icons/noun_net_2428552.svg',
  "Logistics": 'images/regular-routes/icons/noun_Truck_1731459.svg',
  "Knowledge Sharing": 'images/regular-routes/icons/noun_Heart_Bill_98293.svg',
};

interface LogoProps {
  color?: string;
}

const Logo = ({ color = 'bg-navy-900' }: LogoProps) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${color}`}></span>
);

const GridItem = ({ text, logoColor }: { text: string; logoColor?: string }) => (
  <div className="flex items-center gap-2">
    <Logo color={logoColor} />
    <span className="text-navy-900 font-medium">{text}</span>
  </div>
);
const GridHeader = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <img src={headerToSvgMap[text]} alt="" className="w-6 h-6" />
    <span className="text-navy-900 font-large font-semibold">{text}</span>
  </div>
);

const GridColumn = ({ items, logoColor }: { items: string[]; logoColor?: string }) => (
  <div className="flex flex-col gap-4">
    {items.map((item, index) => {
      if (index === 0) {
        return <GridHeader key={item} text={item} />;
      }
      return <GridItem key={item} text={item} logoColor={logoColor} />;
    })}
  </div>
);
const HowWeHelp = () => {
  return (
    <section className="mb-12">
      {/* Banner */}
  <div className="bg-[--purple-7] text-navy-900 py-4 px-4 mb-6 text-center text-lg md:text-2xl shadow">
        How we help get <span className="font-semibold">the right</span> aid delivered
      </div>
      {/* Radix UI Grid */}
  <Grid columns="3" gap="4" rows="repeat(2, 64px)" width="auto" className="px-4">
    <div className="col-span-3 w-full flex justify-center">
      <img
        src="images/homepage-banner-image.svg"
        alt="image demonstrating the flow of donations, to hub and finally to grassroots aid"
        className="w-full max-w-[800px] h-auto object-cover rounded-lg"
      />
    </div>
    {items.map((column, idx) => (
      <GridColumn key={idx} items={column} logoColor="bg-navy-900" />
    ))}
  </Grid>
    </section>
  );
};

export default HowWeHelp;

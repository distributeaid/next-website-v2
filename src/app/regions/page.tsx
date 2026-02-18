import { getBackgroundColor } from "@/utils/site-theme";
import Card, { ImageVariant } from "@/components/Card";
import SmartLink from "@/components/link/SmartLink";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";
import { getCommaSeparator } from "@/utils/string";
import { Region } from "@/types/place";
import { regionsData } from "@/data/mock-data";

const Regions = () => {
  const needsByRegion: Record<string, number> = {};

  return (
    <section>
      <header className="prose max-w-none text-center text-navy-700 text-[3.375rem] uppercase font-lato font-extrabold">
        <h1
          className="py-8"
          style={{
            // Randomizes the background color
            backgroundColor: getBackgroundColor(),
          }}
        >
          Regions We Support
        </h1>
      </header>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 lg:px-4 py-4 lg:py-8 max-w-7xl mx-auto">
        {regionsData.map((region, index) => (
          <Card
            key={index}
            dynamicCardImage={{
              image: "/images/logos/logo-paypal.svg",
              alt: region.map.alt,
            }}
            imageVariant={ImageVariant.circle}
            title={
              <SmartLink className="link text-3xl" href={region.path}>
                {region.name}
              </SmartLink>
            }
            additionalHeaderContent={
              <div className="min-h-[48px]">{createSubregionLinks(region)}</div>
            }
            body={createRegionsCardBody(region, needsByRegion[region.name])}
          />
        ))}
      </section>
    </section>
  );
};

const createSubregionLinks = (region: Region): React.JSX.Element[] => {
  return region.subregions.map((subregion, index) => {
    const seperator = getCommaSeparator(index);
    return (
      <span key={subregion.name}>
        {seperator}
        <SmartLink className="link" href={subregion.path}>
          {subregion.name}
        </SmartLink>
      </span>
    );
  });
};

const createRegionsCardBody = (
  region: Region,
  currentNeed?: number,
): React.JSX.Element => {
  return (
    <>
      {region.population?.ngoBeneficiaries && (
        <p className="mb-3">
          <strong>People Reached:</strong>{" "}
          {region.population?.ngoBeneficiaries?.toLocaleString()}
        </p>
      )}
      {currentNeed && (
        <p className="mb-3">
          <strong># Items Needed:</strong> {currentNeed.toLocaleString()}
        </p>
      )}
      <div className="mb-3 space-y-2 line-clamp-3">
        <MarkdownContent content={region.overview} />
      </div>
    </>
  );
};

export default Regions;

import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import { PageTitle } from "@/components/resources/assort/PageTitle";
import { AboutAssort } from "@/components/resources/assort/AboutAssort";
import { SortingControl } from "@/components/resources/assort/SortingControl";
import { Guide } from "@/components/resources/assort/Guide";
import { ResourceRedirect } from "@/components/resources/assort/ResourceRedirect";
import { ResourcesFooter } from "@/components/resources/assort/ResourcesFooter";

const data = [
  {
    title: "Quality Control",
    description:
      "The receiver may have to pay to dispose of items that are culturally inappropriate, out of season, or poor in quality.",
    src: "/images/resources/Vector.png",
  },
  {
    title: "Sorting",
    description:
      "100,000 aid items on a shipment might be sorted one way by the sender and then re-sorted another way by the receiver. Sorting takes time.",
    src: "/images/resources/Vector (1).png",
  },
];

const page = () => {
  return (
    <section>
      <PageTitle title="RESOURCES" bgColor="navy-900" textColor="white" />
      <AboutAssort color="navy-900" />
      <Flex
        gap={{ md: "124px", initial: "6" }}
        mx={{ md: "9", initial: "3" }}
        align="center"
        direction={{ md: "row", initial: "column" }}
        justify="between"
      >
        <SortingControl
          title={data[0].title}
          description={data[0].description}
          src="/images/resources/resources_qualitycontrol.png"
        />
        <Separator
          orientation="vertical"
          className="h-auto self-stretch hidden md:block"
        />
        <SortingControl
          title={data[1].title}
          description={data[1].description}
          src="/images/resources/resources_sorting.png"
        />
      </Flex>
      <Separator
        orientation="horizontal"
        className="w-auto mx-16 my-3 lg:block hidden"
      />
      <Flex
        mx={{ md: "9", initial: "3" }}
        gap="3"
        className="text-navy-800"
        direction="column"
        align="center"
        my="8"
      >
        <Text size="5" align="center">
          ASSORT leads to faster, cheaper, and more responsive aid. By providing
          a “common language” for aid donations, organisations receiving aid can
          know ahead of time what is on an aid shipment.
        </Text>
        <Image
          src="/images/resources/arrow-down.png"
          alt="ASSORT"
          width={22}
          height={38}
        />
        <Text size="4" align="center">
          When the shipment arrives, they process it much faster than they
          otherwise could. Indeed, a pilot shipment showed that using ASSORT
          standards significantly cut down on the receiving organisation’s
          sorting and processing time. Saving time and volunteer capacity makes
          a big difference for grassroots aid organisations.
        </Text>
      </Flex>
      <Flex
        mx={{ md: "9", initial: "2" }}
        gap={{ initial: "4", md: "0" }}
        className="text-navy-800"
        direction={{ md: "row", initial: "column" }}
        align="center"
        my="8"
      >
        <Guide />
        <Image
          src="/images/resources/resources_guide.png"
          alt="ASSORT"
          width={548}
          height={282}
        />
      </Flex>
      <Heading
        align="left"
        size="6"
        className="text-navy-900"
        mx={{ md: "9", initial: "3" }}
      >
        ASSORT was established as part of a joint partnership between{" "}
        <ResourceRedirect text="Boxtribute" link="www.boxtribute.org" />,{" "}
        <ResourceRedirect link="www.distributeaid.org" text="Distribute Aid" />,{" "}
        <ResourceRedirect link="www.hermine.global" text="HERMINE" />, and the{" "}
        <ResourceRedirect
          text="InterEuropean Human Aid Association"
          link="www.iha.help"
        />
      </Heading>
      <Flex
        direction="column"
        align="center"
        className="bg-red-50"
        mt={{ md: "9", initial: "7" }}
        py="43px"
        px={{ initial: "3", md: "9" }}
      >
        <ResourcesFooter />
      </Flex>
    </section>
  );
};

export default page;

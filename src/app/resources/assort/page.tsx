import { Fragment } from "react";
import { Container, Flex, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import { PageTitle } from "@/components/resources/assort/PageTitle";
import { AboutAssort } from "@/components/resources/assort/AboutAssort";
import { SortingControl } from "@/components/resources/assort/SortingControl";
import { Guide } from "@/components/resources/assort/Guide";
import { ResourcesFooter } from "@/components/resources/assort/ResourcesFooter";
import SmartLink from "@/components/link/SmartLink";

interface ColumnData {
  title: string;
  description: string;
  src: string;
}

const columns: Array<ColumnData> = [
  {
    title: "Quality Control",
    description:
      "The receiver may have to pay to dispose of items that are culturally inappropriate, out of season, or poor in quality.",
    src: "/images/icons/icon-parcel-check-02.png",
  },
  {
    title: "Sorting",
    description:
      "100,000 aid items on a shipment might be sorted one way by the sender and then re-sorted another way by the receiver. Sorting takes time.",
    src: "/images/icons/icon-sort-ascending.png",
  },
];

const page = () => {
  return (
    <>
      <PageTitle title="RESOURCES" bgColor="navy-900" textColor="white" />
      <Container px="4">
        <AboutAssort color="navy-900" />
        <Flex
          gap={{ md: "124px", initial: "6" }}
          align="center"
          direction={{ sm: "row", initial: "column" }}
          justify="between"
        >
          {columns &&
            columns.map((col, index) => {
              return (
                <Fragment key={index}>
                  <SortingControl
                    title={col.title}
                    description={col.description}
                    src={col.src}
                  />
                  {columns.length > 0 && index === 0 && (
                    <Separator
                      orientation={{ initial: "horizontal", sm: "vertical" }}
                      className="max-md:w-auto md:h-auto self-stretch"
                    />
                  )}
                </Fragment>
              );
            })}
        </Flex>
        <Separator orientation="horizontal" className="w-auto my-3" />
        <Flex
          gap="3"
          className="text-navy-800"
          direction="column"
          align="center"
          my="8"
        >
          <Text size="5" align="center">
            ASSORT leads to faster, cheaper, and more responsive aid. By
            providing a “common language” for aid donations, organisations
            receiving aid can know ahead of time what is on an aid shipment.
          </Text>
          <Image
            src="/images/icons/icon-arrow-down.png"
            alt="ASSORT"
            width={22}
            height={38}
          />
          <Text size="4" align="center">
            When the shipment arrives, they process it much faster than they
            otherwise could. Indeed, a pilot shipment showed that using ASSORT
            standards significantly cut down on the receiving organisation’s
            sorting and processing time. Saving time and volunteer capacity
            makes a big difference for grassroots aid organisations.
          </Text>
        </Flex>
        <Flex
          gap={{ initial: "4", md: "0" }}
          className="text-navy-800"
          direction={{ md: "row", initial: "column" }}
          align="center"
          my="8"
        >
          <Guide />
          <Image
            src="/images/photos/photo-210000-000002-aut-grc-01.png"
            alt="ASSORT"
            width={548}
            height={282}
          />
        </Flex>
        <Text
          align={{ initial: "center", lg: "left" }}
          size={{ initial: "4", sm: "6" }}
          weight={{ initial: "regular", sm: "bold" }}
          className="text-navy-900"
        >
          ASSORT was established as part of a joint partnership between{" "}
          <SmartLink
            href="https://www.boxtribute.org"
            className="text-inherit underline"
          >
            Boxtribute
          </SmartLink>
          ,{" "}
          <SmartLink
            href="https://www.distributeaid.org"
            className="text-inherit underline"
          >
            Distribute Aid
          </SmartLink>
          ,{" "}
          <SmartLink
            href="https://www.hermine.global"
            className="text-inherit underline"
          >
            HERMINE
          </SmartLink>
          , and the{" "}
          <SmartLink
            href="https://www.iha.help"
            className="text-inherit underline"
          >
            InterEuropean Human Aid Association
          </SmartLink>
          .
        </Text>
      </Container>
      <ResourcesFooter />
    </>
  );
};

export default page;

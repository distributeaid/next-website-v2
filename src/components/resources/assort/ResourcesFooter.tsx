import {
  Box,
  Container,
  Button,
  Card,
  Flex,
  Link,
  Heading,
  Text,
} from "@radix-ui/themes";
import SmartLink from "@/components/link/SmartLink";

const data = [
  {
    title: "Standards guide",
    description:
      "Ensure your donations meet global aid standards. Our guide helps you pack, sort, and distribute efficiently.",
    link: "/documents/resources/assort_guidelines_v15.pdf",
  },
  {
    title: "Sizing Chart",
    description:
      "Find the right fit for clothing donations. Our sizing chart ensures consistency across distributions.",
    link: "/documents/resources/assort_sizing_chart_v6.pdf",
  },
];

export const ResourcesFooter = () => {
  return (
    <Box className="bg-red-50" mt={{ md: "9", initial: "7" }} py="43px">
      <Container px="4">
        <Flex
          gap={{ initial: "7", sm: "60px" }}
          direction={{ xs: "row", initial: "column" }}
          className="bg-inherit"
          justify="between"
          align="stretch"
          width="100%"
        >
          {data.map((item, index) => (
            <Card key={index} className="w-full" asChild>
              <Box py="5" px="28px">
                <Flex direction="column" gap="3" align="start" height="100%">
                  <Heading
                    as="h3"
                    size={{ initial: "7", sm: "8" }}
                    weight="regular"
                    color="blue"
                    highContrast
                  >
                    {item.title}
                  </Heading>
                  <Text as="p" color="blue" highContrast mb="4">
                    {item.description}
                  </Text>
                  <Button
                    size="2"
                    mt="auto"
                    className="bg-navy-600 hover:bg-navy-500"
                    asChild
                    style={{
                      height: "44px",
                    }}
                  >
                    <Link
                      href={item.link}
                      download={item.link.split("/").slice(3).join("/")}
                      className="text-white no-underline"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Download Now
                    </Link>
                  </Button>
                </Flex>
              </Box>
            </Card>
          ))}
        </Flex>
        {/* <Text as="p" mt="28px" className="text-gray-900">
          If you are an organisation intending to adopt the standards, we
          strongly encourage you to fill out this form to receive updates when
          revised versions of the standards come out: 
          <SmartLink
            className="underline"
            href="https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq88gyT7h8Hzz%252F5pwVnAjsSIBdsuOiiRRR3tO5iNRn8gS049TyW7spdJ"
          >
            Stay Up To Date!
          </SmartLink>
        </Text> */}
      </Container>
    </Box>
  );
};

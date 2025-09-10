import { FC } from "react";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";

export const AboutTheProject: FC = () => (
  <>
    <Section position="relative" width="100%" size="1" className="bg-red-50">
      <Container>
        <Flex
          width="100%"
          direction="column"
          align="center"
          justify="center"
          gap="5"
        >
          <Heading
            as="h2"
            size="7"
            weight="bold"
            align="center"
            className="text-navy-800"
          >
            About The Project
          </Heading>

          <Container
            px="24px"
            mb="2"
            maxWidth={{ sm: "calc(100% - 48px)", md: "calc(100% - 160px)" }}
          >
            <ul className="list-disc list-inside">
              {list_items?.map((item, index) => (
                <li className="text-xl" key={`about_the_project_li_${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </Flex>
      </Container>
    </Section>
  </>
);

const list_items = [
  "we don’t provide HRT but sundries needed to administer HRT safely for trans people who are often already in a precarious financial situation",
  "harm reduction (needle sharing or reuse)",
  "privacy for trans people in dangerous climate in US (needs better phrasing ofc)",
  "using existing mutual aid networks",
  "show $ impact made (based on production count) (?x multiplier)",
];

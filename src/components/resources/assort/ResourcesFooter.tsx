import { Button, Card, Flex, Link, Text } from "@radix-ui/themes";

const data = [
  {
    title: "Standards guide",
    link: "/documents/resources/assort_guidelines_v15.pdf",
  },
  {
    title: "Sizing Chart",
    link: "/documents/resources/assort_sizing_chart_v6.pdf",
  },
];

export const ResourcesFooter = () => {
  return (
    <Flex
      gap={{ lg: "300px", md: "200px", initial: "7" }}
      direction={{ xs: "row", initial: "column" }}
      className="bg-inherit"
      justify="between"
      align="center"
      overflow="hidden"
      width="100%"
      mx="7"
    >
      {data.map((item, index) => (
        <Card key={index} className="h-[178px] overflow-hidden w-full ">
          <Flex direction="column" gap="3" align="start">
            <Text size="7" className="text-navy-600">
              {item.title}
            </Text>

            <Button className="bg-navy-600" size="2">
              <Link
                href={item.link}
                download={item.link.split("/").slice(3).join("/")}
                className="text-white"
              >
                Download Now
              </Link>
            </Button>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

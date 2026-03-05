import { Flex } from "@radix-ui/themes";
import { Accordion } from "radix-ui";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FaChevronDown } from "react-icons/fa";
import { links } from "@/data/navBarLinks";
import { SOCIAL_LINKS } from "@/data/constants";
import Image from "next/image";

const MobileNavBar = () => {
  return (
    <Flex
      display={{ initial: "flex", md: "none" }}
      direction={"column"}
      justify={"center"}
      position={"absolute"}
      top={"0"}
      left={"0"}
      width={"100vw"}
      height={"100vh"}
      p={"6"}
      gapY={"8"}
      className="border bg-navy-800 z-30"
      align={"start"}
    >
      {/* Accordion - Ensuring only one section is open */}
      <Accordion.Root type="single" collapsible className="w-full">
        {links
          .filter(({ title }) => title !== "Donate") // Hide Donate button here
          .map(({ title, url, isSubMenu, subMenu }) => (
            <Accordion.Item
              key={title}
              value={title}
              className="font-medium py-4 "
            >
              {isSubMenu ? (
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full">
                    <Flex justify={"between"} align={"center"}>
                      {title}
                      <FaChevronDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Flex>
                  </Accordion.Trigger>
                  <Accordion.Content className="w-full">
                    <NavigationMenu.Sub>
                      <NavigationMenu.List className="w-full border-y border-thin">
                        {subMenu?.map(({ title, url }) => (
                          <Flex
                            key={title}
                            as="div"
                            p={"1"}
                            width={"100%"}
                            style={{
                              textDecorationThickness: "2px",
                              textUnderlineOffset: "8px",
                            }}
                            className="hover:underline"
                            asChild
                          >
                            <NavigationMenu.Item>
                              <NavigationMenu.Link href={url}>
                                {title}
                              </NavigationMenu.Link>
                            </NavigationMenu.Item>
                          </Flex>
                        ))}
                      </NavigationMenu.List>
                    </NavigationMenu.Sub>
                  </Accordion.Content>
                </Accordion.Header>
              ) : (
                <Accordion.Header>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href={url}>
                      {title}
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </Accordion.Header>
              )}
            </Accordion.Item>
          ))}
      </Accordion.Root>

      {/* NewsLetter */}
      <NavigationMenu.Item>
        <NavigationMenu.Link href="#newsletter-signup">
          Newsletter
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      {/* Social media links */}
      <Flex justify={"center"} gapX={"2"}>
        {SOCIAL_LINKS.slice(0, 3).map((social) => (
          <NavigationMenu.Item key={social.name}>
            <NavigationMenu.Link href={social.link} target="_blank">
              <Image
                src={`/images/icons/icon-social-${social.name}.svg`}
                alt={social.name}
                width={30}
                height={30}
              />
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </Flex>

      {/* Donate Button (Ensure it appears last) */}
      <Flex
        as="div"
        asChild
        width={"100%"}
        justify={"center"}
        p={"2"}
        className="hover:bg-navy-500 hover:text-white duration-200 text-dark-blue bg-white font-medium cursor-pointer rounded-lg"
      >
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/donate" target="" rel="noreferrer">
            Donate
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </Flex>
    </Flex>
  );
};
export default MobileNavBar;

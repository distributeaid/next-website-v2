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
      style={{ backgroundColor: "var(--blue-9)" }}
      display={{ initial: "flex", md: "none" }}
      direction={"column"}
      justify={"center"}
      position={"absolute"}
      top={"0"}
      left={"0"}
      width={"100vw"}
      height={"100vh"}
      p={"6"}
      // my={"9"}
      gapY={"8"}
      className="border z-30"
      align={"start"}
    >
      {/* Accordion - Ensuring only one section is open */}
      <Accordion.Root type="single" collapsible className="w-full">
        {links
          .filter(({ id }) => id !== 7) // Hide Donate button here
          .map(({ id, title, url, isSubMenu, subMenu }) => (
            <Accordion.Item
              key={id}
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
                        {subMenu?.map(({ id, title, url }) => (
                          <NavigationMenu.Item
                            className="p-2 w-full hover:underline decoration-2 underline-offset-8 duration-200"
                            key={id}
                          >
                            <NavigationMenu.Link href={url}>
                              {title}
                            </NavigationMenu.Link>
                          </NavigationMenu.Item>
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
        <NavigationMenu.Link href="/newsletter">NewsLetter</NavigationMenu.Link>
      </NavigationMenu.Item>

      {/* Social media links */}
      <Flex justify={"center"} gapX={"2"}>
        {SOCIAL_LINKS.slice(0,3).map((social) => (
          <NavigationMenu.Item key={social.name}>
            <NavigationMenu.Link href={social.link} target="_blank">
              <Image
                src={`/images/social-icons/${social.name}.svg`}
                alt={social.name}
                width={30}
                height={30}
              />
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </Flex>

      {/* Donate Button (Ensure it appears last) */}
      <NavigationMenu.Item className="w-full ">
        <NavigationMenu.Link
          className=" w-full block text-center cursor-pointer font-medium hover:bg-[#4362A6] hover:text-white duration-200 text-dark-blue bg-white rounded-lg py-3 px-6"
          href="/donate"
          target=""
          rel="noreferrer"
        >
          Donate
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </Flex>
  );
};
export default MobileNavBar;

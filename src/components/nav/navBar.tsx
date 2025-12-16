"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import LogoMark from "../../../public/images/LogoMark";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Box, Flex, Button } from "@radix-ui/themes";
import { SOCIAL_LINKS } from "@/data/constants";
import Image from "next/image";
import cx from "classnames";
import MobileNavBar from "./mobileNavBar";
import { links } from "@/data/navBarLinks";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <NavigationMenu.Root orientation="horizontal">
        <NavigationMenu.List>
          <Flex
            width={"100%"}
            style={{
              color: "white",
              zIndex: "50",
              borderBottom: "2px solid ",
              borderColor: "var(--green-9)",
            }}
            className="bg-navy-800"
            position={"fixed"}
            height={"80px"}
            px={"4"}
            justify={"between"}
            align={"center"}
          >
            <Flex
              align={"center"}
              mx={"4"}
              ml={{ initial: "3", lg: "100px" }}
              justify={{ initial: "start", md: "center" }}
              gap={"6"}
            >
              {/*DA logo */}
              <NavigationMenu.Item className="z-40">
                <NavigationMenu.Link href="/" target="" rel="noreferrer">
                  <LogoMark width="50" height={(60 / 70) * 50} />
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              {/* Social media links */}
              <Flex
                display={{ initial: "none", sm: "flex" }}
                justify={"center"}
                gapX={"2"}
              >
                {SOCIAL_LINKS.map((social) => (
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

              {/*NewsLetter  */}
              <Box display={{ initial: "none", sm: "block" }}>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#newsletter-signup">
                    Newsletter
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </Box>
            </Flex>
            {/* page links */}
            <Flex
              gapX={"40px"}
              justify={"end"}
              align={"center"}
              mr={"100px"}
              display={{ initial: "none", md: "flex" }}
            >
              {links.map(({ title, url, isSubMenu, subMenu }) => (
                <NavigationMenu.Item
                  className={cx(
                    "font-medium  decoration-2 underline-offset-8 duration-200",
                    {
                      "hover:underline": title !== "Donate",
                      "hover:bg-navy-500 decoration-none cursor-pointer hover:text-white duration-200 text-dark-blue bg-white rounded-lg py-3 px-6 ":
                        title === "Donate",
                    },
                  )}
                  key={title}
                >
                  {isSubMenu ? (
                    <Box className="group">
                      <Flex
                        style={{ fontWeight: "500" }}
                        position={"relative"}
                        align={"center"}
                        asChild
                      >
                        <NavigationMenu.Trigger>
                          <NavigationMenu.Link href={url}>
                            {title}
                          </NavigationMenu.Link>
                          <FaChevronDown className="ml-2 transition-transform duration-200 group-hover:rotate-180" />
                        </NavigationMenu.Trigger>
                      </Flex>
                      <Flex
                        as="div"
                        asChild
                        position={"absolute"}
                        maxWidth={"140px"}
                        mt={"3"}
                        style={{
                          background: "white",
                          zIndex: "10",
                          borderWidth: "1px",
                          borderRadius: "0.375rem",
                        }}
                        className="shadow-md "
                      >
                        <NavigationMenu.Content>
                          <NavigationMenu.Sub>
                            <NavigationMenu.List>
                              {subMenu?.map(({ title, url }) => (
                                <NavigationMenu.Item key={title}>
                                  <NavigationMenu.Link href={url}>
                                    <Flex
                                      width="100%"
                                      py="1"
                                      px="4"
                                      className="hover:bg-navy-200"
                                      style={{ color: "black" }}
                                    >
                                      {title}
                                    </Flex>
                                  </NavigationMenu.Link>
                                </NavigationMenu.Item>
                              ))}
                            </NavigationMenu.List>
                            <NavigationMenu.Viewport />
                          </NavigationMenu.Sub>
                        </NavigationMenu.Content>
                      </Flex>
                    </Box>
                  ) : (
                    <NavigationMenu.Link href={url}>
                      {title}
                    </NavigationMenu.Link>
                  )}
                </NavigationMenu.Item>
              ))}
            </Flex>

            {/* Mobile Top Navbar */}
            <Flex
              gap={"4"}
              align={"center"}
              display={{ initial: "flex", md: "none" }}
            >
              {/* Donate Button */}
              {!nav && (
                <Box
                  asChild
                  px={"5"}
                  py={"3"}
                  style={{ fontWeight: "500", borderRadius: "0.5rem" }}
                  className="hover:bg-navy-500 hover:text-white duration-200 text-dark-blue bg-white"
                >
                  <Link href="/donate" rel="noreferrer">
                    Donate
                  </Link>
                </Box>
              )}
              {/* Hamburger Icon */}
              <Box
                style={{ cursor: "pointer", zIndex: "40", color: "white" }}
                onClick={() => setNav(!nav)}
              >
                {nav ? (
                  <Button
                    className="bg-navy-800"
                    style={{ cursor: "pointer" }}
                    size={"4"}
                  >
                    Close <FaTimes size={30} />
                  </Button>
                ) : (
                  <FaBars size={30} />
                )}
              </Box>
            </Flex>
            {/* Mobile Menu */}
            {nav && <MobileNavBar />}
          </Flex>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
};

export default NavBar;

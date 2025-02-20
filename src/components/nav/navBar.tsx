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
      <NavigationMenu.Root
        style={{ backgroundColor: "var(--blue-9)" }}
        className=" text-white w-full shadow fixed h-20 z-50"
        orientation="horizontal"
      >
        <NavigationMenu.List className=" flex h-20 px-4 justify-between items-center">
          {/* left side about 40% width */}
          <Flex
            width={{ initial: "100%", md: "40%" }}
            align={"center"}
            mx={"4"}
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
              {SOCIAL_LINKS.slice(0, 3).map((social) => (
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
                <NavigationMenu.Link href="/newsletter">
                  NewsLetter
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </Box>
          </Flex>

          {/* Page Links about 60% width*/}
          <Flex
            width={"60%"}
            justify={"between"}
            align={"center"}
            mx={"4"}
            display={{ initial: "none", md: "flex" }}
          >
            {links.map(({ id, title, url, isSubMenu, subMenu }) => (
              <NavigationMenu.Item
                className={cx(
                  "font-medium decoration-2 underline-offset-8 duration-200",
                  {
                    "hover:underline": id !== 7,
                    "hover:bg-[#4362A6] decoration-none cursor-pointer hover:text-white text-dark-blue bg-white rounded-lg py-3 px-6 ":
                      id === 7,
                  },
                )}
                key={id}
              >
                {isSubMenu ? (
                  <Box>
                    <NavigationMenu.Trigger className="group">
                      <Flex
                        className="font-medium"
                        position={"relative"}
                        align={"center"}
                      >
                        {title}{" "}
                        <FaChevronDown className="ml-2 transition-transform duration-200 group-hover:rotate-180" />
                      </Flex>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute shadow-md bg-white border z-10 rounded-md">
                      <NavigationMenu.Sub>
                        <NavigationMenu.List>
                          {subMenu?.map(({ id, title, url }) => (
                            <NavigationMenu.Item
                              className="hover:bg-[#DEE5F4] p-2 text-black"
                              key={id}
                            >
                              <NavigationMenu.Link href={url}>
                                {title}
                              </NavigationMenu.Link>
                            </NavigationMenu.Item>
                          ))}
                        </NavigationMenu.List>
                        <NavigationMenu.Viewport />
                      </NavigationMenu.Sub>
                    </NavigationMenu.Content>
                  </Box>
                ) : (
                  <NavigationMenu.Link href={url}>{title}</NavigationMenu.Link>
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
              <Link
                className="cursor-pointer capitalize font-medium hover:bg-[#4362A6] hover:text-white duration-200 text-dark-blue bg-white rounded-lg py-3 px-6"
                href="/donate"
                target=""
                rel="noreferrer"
              >
                Donate
              </Link>
            )}
            {/* Hamburger Icon */}
            <Box
              className="cursor-pointer z-40 text-white"
              onClick={() => setNav(!nav)}
            >
              {nav ? (
                <Button size={"4"}>
                  Close <FaTimes size={30} />
                </Button>
              ) : (
                <FaBars size={30} />
              )}
            </Box>
          </Flex>
          {/* Mobile Menu */}
          {nav && <MobileNavBar />}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
};

export default NavBar;

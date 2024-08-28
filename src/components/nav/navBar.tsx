"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import LogoMark from "../../../public/images/LogoMark";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Text } from "@radix-ui/themes";
import cx from 'classnames';



const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About Us",
      url: "/about-us",
    },
    {
      id: 3,
      title: "Needs",
      url: "/needs-assessment",
    },
    {
      id: 4,
      title: "Regions",
      url: "/regions",
    },
    {
      id: 5,
      title: "Resources",
      url: "/resources/assort",
    },
    {
      id: 6,
      title: "Tech",
      url: "/tech",
    },
    {
      id: 7,
      title: "Donate",
      url: "/donate",
    },
  ];

  return (
    //We're using a Radix primitive for the navbar which allows custom styling
    <>
      <NavigationMenu.Root>
      <NavigationMenu.List className="flex justify-between md:justify-around px-6 items-center w-full h-20 text-white bg-navy-900 fixed nav z-40">

          <Text className="text-5xl font-signature ml-2">
            <Link
              className="link-underline link-underline-black"
              href="/"
              target=""
              rel="noreferrer"
            >
              <LogoMark width="50" height={(60 / 70) * 50} />
            </Link>
          </Text>

        {/* Desktop menu */}
        <NavigationMenu.Item className="hidden md:flex">
          {links.map(({ id, title, url }) => (
            <NavigationMenu.List
              key={id}
              className={cx(
                "p-3 px-12 cursor-pointer capitalize font-medium hover:scale-105 hover:bg-dark-blue hover:rounded-lg duration-200", 
                { 
                  "text-dark-blue bg-white rounded-lg hover:text-white  ml-4": id === 7
                }
              )}
            >
              <Link href={url}>{title}</Link>
            </NavigationMenu.List>
          ))}
        </NavigationMenu.Item>

        {/* Mobile menu */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <NavigationMenu.Item className="flex flex-col md:hidden justify-center items-center absolute top-0 left-0 w-full h-screen bg-navy-900 text-white">
            {links.map(({ id, title, url }) => (
              <NavigationMenu.List
                key={id}
                className="px-4 cursor-pointer capitalize py-4 text-3xl"
              >
                <Link onClick={() => setNav(!nav)} href={url}>
                  {title}
                </Link>
              </NavigationMenu.List>
            ))}
          </NavigationMenu.Item>
        )}
      </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
};

export default NavBar;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import LogoMark from "../../../public/images/LogoMark";
import Button from "../ui/Button";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/"
    },
    {
      id: 2,
      title: "About Us",
      url: "/about-us",

    },
    {
      id: 3,
      title: "Needs",
      url: "/needs-assessment"
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
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-navy-900 fixed nav z-40">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
            target=""
            rel="noreferrer"
          >
            <LogoMark width="50" height={(60 / 70) * 50} />
            {/* <Image
              src={Logo}
              alt="da-logo"
              width={50}
              height={50}
              priority={true}
              className=""
            /> */}
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, title, url }) => (
          <li
            key={id}
            className="p-3 px-6 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:bg-dark-blue hover:rounded-sm duration-200 link-underline"
          >
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col md:hidden justify-center items-center absolute top-0 left-0 w-full h-screen bg-navy-900 text-white">
          {links.map(({ id, title, url }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-3xl"
            >
              <Link onClick={() => setNav(!nav)} href={url}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

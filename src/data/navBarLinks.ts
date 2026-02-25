import * as Messages from "@/data/messages";

export const links = [
  {
    title: "Home",
    url: "/",
    isSubMenu: false,
  },
  {
    title: Messages.ABOUT_US_PAGE_TITLE,
    url: "/about-us",
    isSubMenu: true,
    subMenu: [
      {
        title: Messages.OVERVIEW_NAV_ITEM_TITLE,
        url: "/about-us",
      },
      {
        title: Messages.CONTACT_US_PAGE_TITLE,
        url: "/contact-us",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Needs",
  //   url: "/needs-assessment",
  //   isSubMenu: true,
  //   subMenu: [
  //     {
  //       id: 3.1,
  //       title: "Overview",
  //       url: "/needs-assessment",
  //     },
  //     {
  //       id: 3.2,
  //       title: "Data Explorer",
  //       url: "/needs-assessment",
  //     },
  //     {
  //       id: 3.3,
  //       title: "Methodology",
  //       url: "/needs-assessment",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Regions",
  //   url: "/regions",
  //   isSubMenu: true,
  //   subMenu: [
  //     {
  //       id: 4.1,
  //       title: "Overview",
  //       url: "/regions",
  //     },
  //     {
  //       id: 4.2,
  //       title: "USA",
  //       url: "/regions",
  //     },
  //     {
  //       id: 4.3,
  //       title: "Europe",
  //       url: "/regions",
  //     },
  //     {
  //       id: 4.4,
  //       title: "Middle East",
  //       url: "/regions",
  //     },
  //   ],
  // },
  {
    title: Messages.RESOURCES_PAGE_TITLE,
    url: "/resources/assort",
    isSubMenu: false,
  },
  {
    title: Messages.TECH_PAGE_TITLE,
    url: "/tech",
    isSubMenu: false, //temporarily set to false
    subMenu: [
      {
        title: Messages.OVERVIEW_NAV_ITEM_TITLE,
        url: "/tech",
      },
      {
        title: "Open Source Explorers",
        url: "/tech/open-source-explorers",
      },
    ],
  },
  {
    title: Messages.DONATE_PAGE_TITLE,
    url: "/donate",
    isSubMenu: false,
  },
];

export const links = [
  {
    title: "Home",
    url: "/",
    isSubMenu: false,
  },
  {
    title: "About Us",
    url: "/about-us",
    isSubMenu: true,
    subMenu: [
      {
        title: "Overview",
        url: "/about-us",
      },
      {
        title: "Contact Us",
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
    title: "Resources",
    url: "/resources/assort",
    isSubMenu: false,
  },
  {
    title: "Tech",
    url: "/tech",
    isSubMenu: false, //temporarily set to false
    subMenu: [
      {
        title: "Overview",
        url: "/tech",
      },
      {
        title: "Open Source Explorers",
        url: "/tech/open-source-explorers",
      },
    ],
  },
  {
    title: "Donate",
    url: "/donate",
    isSubMenu: false,
  },
];

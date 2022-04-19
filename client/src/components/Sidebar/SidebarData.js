import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "#",
    icon: <FaIcons.FaThList />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
      },
      {
        title: "Author",
        path: "/author",
        icon: <FaIcons.FaUserTie />,
      },
    ],
  },
  {
    title: "Converter",
    path: "/converter",
    icon: <FaIcons.FaBuffer />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: "Help",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];

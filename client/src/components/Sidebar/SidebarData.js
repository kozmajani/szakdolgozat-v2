import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Home",
        path: "/home",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "About",
        path: "/about",
        icon: <IoIcons.IoIosPaper />,
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
    title: "Author",
    path: "/author",
    icon: <IoIcons.IoMdPeople />,
  },

  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];

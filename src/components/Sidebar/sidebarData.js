import { RiHomeHeartFill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

export const menuOptions = [
  {
    id: "m1",
    icon: <RiHomeHeartFill />,
    tooltip: "feed",
    path: "/home/feed",
    name: "feed",
  },
  {
    id: "m2",
    icon: <MdExplore />,
    tooltip: "explore",
    path: "/home/explore",
    name: "explore",
  },
  {
    id: "m3",
    icon: <BsPeopleFill />,
    tooltip: "people",
    path: "/home/people",
    name: "people",
  },
  {
    id: "m4",
    icon: <FaUserAlt />,
    tooltip: "profile",
    path: "/home/profile/",
    name: "profile",
  },
];

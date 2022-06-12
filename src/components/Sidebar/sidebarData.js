import { RiHomeHeartFill, RiUser3Fill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

export const menuOptions = [
  {
    id: "m1",
    icon: <RiHomeHeartFill />,
    tooltip: "feed",
    path: "/home",
    name: "feed",
    end: true,
  },
  {
    id: "m2",
    icon: <IoIosPeople />,
    tooltip: "people",
    path: "/home/people",
    name: "people",
  },
  {
    id: "m3",
    icon: <MdExplore />,
    tooltip: "explore",
    path: "/home/explore",
    name: "explore",
  },

  {
    id: "m4",
    icon: <RiUser3Fill />,
    tooltip: "profile",
    path: "/home/profile/",
    name: "profile",
  },
];

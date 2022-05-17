import { RiHomeHeartFill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { BsPeopleFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

export const menuOptions = [
  { id: "m1", icon: <RiHomeHeartFill />, tooltip: "feed", path: "/home/feed" },
  { id: "m2", icon: <MdExplore />, tooltip: "explore", path: "/home/explore" },
  { id: "m3", icon: <BsPeopleFill />, tooltip: "people", path: "/home/people" },
  {
    id: "m4",
    icon: <BsFillBookmarkHeartFill />,
    tooltip: "saved",
    path: "/home/saved",
  },
  {
    id: "m5",
    icon: <FaUserAlt />,
    tooltip: "profile",
    path: "/home/profile/:userId",
  },
];

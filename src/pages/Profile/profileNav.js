import { IoImages } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

export const profileNav = [
  { id: "p1", link: "", name: "Posts", icon: <IoImages /> },
  { id: "p2", link: "saved", name: "Saved", icon: <BsFillBookmarkHeartFill /> },
  { id: "p3", link: "liked", name: "Liked", icon: <RiHandHeartFill /> },
];

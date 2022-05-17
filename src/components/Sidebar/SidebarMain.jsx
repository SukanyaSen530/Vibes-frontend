import { NavLink } from "react-router-dom";

import { menuOptions } from "./sidebarData";
import { RiLogoutCircleRFill } from "react-icons/ri";

import "./sidebar-main.scss";

const SidebarMain = () => {
  return (
    <aside className="sidebar bg-slate-100 flex justify-center items-center sticky">
      <ul className="sidebar__menu">
        {menuOptions.map((option) => (
          <NavLink
            key={option.id}
            to={
              option.name === "profile" ? `${option.path}/:userId` : option.path
            }
            className={({ isActive }) =>
              !isActive
                ? "sidebar__menu__option"
                : "sidebar__menu__option active"
            }
          >
            <li className="relative">
              {option.icon}
              <span className="sidebar__menu__tooltip absolute capitalize">
                {option.tooltip}
              </span>
            </li>
          </NavLink>
        ))}
        <button className="sidebar__menu__option mt-auto">
          <div className="relative">
            <RiLogoutCircleRFill />
            <span className="sidebar__menu__tooltip absolute capitalize">
              Logout
            </span>
          </div>
        </button>
      </ul>
    </aside>
  );
};

export default SidebarMain;

import { NavLink } from "react-router-dom";

import { menuOptions } from "./sidebarData";

import "./sidebar-main.scss";

const SidebarMain = () => {
  return (
    <aside className="sidebar bg-slate-100 flex items-center justify-center sticky">
      <ul className="sidebar__menu">
        {menuOptions.map((option) => (
          <NavLink
            key={option.id}
            to={option.path}
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
      </ul>
    </aside>
  );
};

export default SidebarMain;

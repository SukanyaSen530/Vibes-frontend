import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

import { menuOptions } from "./sidebarData";
import { RiLogoutCircleRFill } from "react-icons/ri";

import { baseApi } from "../../redux/services/baseApi";

import "./sidebar-main.scss";

import { useLogoutUserMutation } from "../../redux/services/authApi";

const SidebarMain = () => {
  const dispatch = useDispatch();

  const [logoutUser, { isLoading, isError, isSuccess }] =
    useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged out successfully!");
    }
    if (isError) {
      toast.error("Could not log you out!");
    }
  }, [isSuccess, isError]);

  return (
    <aside className="sidebar bg-slate-100 flex justify-center items-center sticky">
      <ul className="sidebar__menu">
        {menuOptions.map((option) => (
          <NavLink
            key={option.id}
            to={
              option.name === "profile" ? `${option.path}:userId` : option.path
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
        <button
          className="sidebar__menu__option mt-auto"
          onClick={() => logoutUser()}
        >
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

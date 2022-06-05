import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { selectAuth } from "../../redux/slices/authSlice";

import { menuOptions } from "./sidebarData";
import { RiLogoutCircleRFill } from "react-icons/ri";

import "./sidebar-main.scss";

import { useLogoutUserMutation } from "../../redux/services/authApi";
import { baseApi } from "../../redux/services/baseApi";

const SidebarMain = () => {
  const dispatch = useDispatch();

  const [logoutUser, { isError, isSuccess }] = useLogoutUserMutation();

  const {
    user: { _id },
  } = useSelector(selectAuth);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged out successfully!");
      // dispatch(baseApi.util.resetApiState());
    }
    if (isError) {
      toast.error("Could not log you out!");
    }
  }, [isSuccess, isError]);

  return (
    <aside className="sidebar bg-slate-100 flex justify-center items-center">
      <ul className="sidebar__menu">
        {menuOptions.map((option) => (
          <NavLink
            key={option.id}
            to={
              option.name === "profile" ? `${option.path}${_id}` : option.path
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
          onClick={() => {
            logoutUser();
            dispatch(baseApi.util.resetApiState());
          }}
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

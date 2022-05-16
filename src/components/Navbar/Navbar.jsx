import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAuth } from "../../redux/slices/authSlice";

import { logo } from "../../assets/images";

import "./navbar.scss";

function Navbar() {
  const {
    user: { _id, avatar },
  } = useSelector(selectAuth);

  return (
    <nav className="navbar flex items-center px-10 bg-slate-100 p-4 sticky top-0">
      <img className="w-28 h-28" src={logo} alt="VibesLogo" />

      <div className="navbar__search mx-auto flex-1 relative">
        <input
          id="search"
          type="search"
          placeholder="Search..."
          autofocus
          required
          className="navbar__search__input h-16 border-0 text-gray-700 text-2xl outline-0 px-7 rounded-tl-2xl rounded-bl-2xl"
        />

        <button
          type="submit"
          className="navbar__search__btn h-16 bg-green-300 text-3xl absolute px-4 rounded-tr-2xl rounded-br-2xl opacity-0 duration-200"
        >
          {" "}
          Go{" "}
        </button>
      </div>

      <ul className="ml-auto flex items-center gap-10">
        <Link to={`profile/${_id}`}>
          <figure className="avatar avatar-lg cursor-pointer">
            <img className="avatar-img" src={avatar} alt="useravatar" />
          </figure>
        </Link>
        <button className="bg-blue-300 my-6 p-2 font-medium text-gray-900 text-3xl rounded-lg  hover:bg-blue-500 hover:text-white ease-in duration-150">
          Logout{" "}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;

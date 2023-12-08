import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-lg font-bold">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "nav-active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg font-bold">
                <NavLink
                  to="/mydonations"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "nav-active" : ""
                  }
                >
                  My Donations
                </NavLink>
              </li>
              <li className="text-lg font-bold">
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "nav-active" : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[150px] md:w-auto">
            <img src="https://i.ibb.co/1nscnSV/Logo.png" alt="logo" />
          </div>
        </div>

        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg font-bold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "nav-active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg font-bold">
              <NavLink
                to="/mydonations"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "nav-active" : ""
                }
              >
                My Donations
              </NavLink>
            </li>
            <li className="text-lg font-bold">
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "nav-active" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Header = () => {
    const items = <div className="flex flex-col lg:flex-row gap-5">
        <Link className="text-lg text-gray-700 font-Poppins" to="/">Home</Link>
        <Link className="text-lg text-gray-700 font-Poppins" to="/instructors">Instructors</Link>
        <Link className="text-lg text-gray-700 font-Poppins" to="/classes">Classes</Link>
        <Link className="text-lg text-gray-700 font-Poppins" to="/dashboard">Dashboard</Link>
    </div>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl max-w-7xl lg:py-8 py-4 lg:px-8 px-4 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 pl-5 py-3 shadow bg-base-100  w-52 "
            >
              {items}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="https://i.ibb.co/GTYH3pj/sports-academy.png" className="lg:w-28 lg:h-16 h-12 w-20 ml-12 lg:ml-0" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
          <button className="btn my-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

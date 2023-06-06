import { Link } from "react-router-dom";

const Header = () => {
    const items = <div className="flex flex-col lg:flex-row gap-5">
        <Link className="text-lg text-gray-700 font-Poppins" to="/">Home</Link>
        <Link className="text-lg text-gray-700 font-Poppins" to="/allToys">Instructors</Link>
        <Link className="text-lg text-gray-700 font-Poppins" to="/blogs">Classes</Link>
        <Link className="text-lg text-gray-700 font-Poppins" to="/blogs">Dashboard</Link>
    </div>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl py-8 px-8">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="https://i.ibb.co/GTYH3pj/sports-academy.png" className="w-28 h-[70px]" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
          <button className="btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

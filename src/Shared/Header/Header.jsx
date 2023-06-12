import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const items = (
    <div className="flex flex-col lg:flex-row gap-5">
      <ActiveLink to="/">
        <span className="text-lg font-Poppins   ">Home</span>
      </ActiveLink>
      <ActiveLink to="/instructors">
        <span className="text-lg font-Poppins  ">Instructors</span>
      </ActiveLink>
      <ActiveLink to="/classes">
        <span className="text-lg font-Poppins ">Classes</span>
      </ActiveLink>
      {user && (
        <ActiveLink
          to={
            isAdmin
              ? "/dashboard/manageUsers"
              : isInstructor
              ? "/dashboard/addClass"
              : "/dashboard/selectedClasses"
          }
        >
          <span className="text-lg font-Poppins  ">Dashboard</span>
        </ActiveLink>
      )}
    </div>
  );
  return (
    <motion.div
      initial={{ y: -350 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
    >
      <div className="navbar bg-base-100 shadow-xl max-w-7xl lg:py-8 py-4 lg:px-8 px-4 z-50">
        <div className="navbar-start z-50">
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
            <img
              src="https://i.ibb.co/GTYH3pj/sports-academy.png"
              className={`lg:w-28 lg:h-16 h-8 w-12 lg:ml-0 ${
                user ? "ml-2" : "ml-12"
              }`}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <div >
            {user ? (
              <>
                <div className="flex gap-2 cursor-pointer">
                  <span className="text-white mr-0 lg:mr-3 ">
                    <img
                      src={user.photoURL}
                      title={user.displayName ? user.displayName : " "}
                      width={50}
                      height={50}
                      className="rounded-full lg:mt-0 mr-2 mt-3"
                      alt=""
                    />
                  </span>
                  <motion.div
                  
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 8px rgba(255,255,255)",
                      textShadow: "0px 0px 8px rgba(255,255,255)",
                    }}
                    className="my-btn  md:static relative left-2"
                    onClick={handleLogOut}
                  >
                    Sign Out
                  </motion.div>
                </div>
              </>
            ) : (
              <div>
                <Link to="/login">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 8px rgba(255,255,255)",
                      textShadow: "0px 0px 8px rgba(255,255,255)",
                    }}
                    className="my-btn px-6  md:static relative left-2"
                  >
                    Login
                  </motion.div>
                </Link>
              </div>
            )}
          </div>
          {/* dark and light button toggler */}
          <label className="swap swap-rotate -mt-3 ml-2">
            <input 
            type="checkbox" 
            checked = {theme === "light" ? false : true}
            onChange={handleToggle} />

            <svg
              className="swap-on fill-current  w-6 h-6 lg:w-10 lg:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-6 h-6 lg:w-10 lg:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

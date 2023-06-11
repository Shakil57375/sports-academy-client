import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
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
  const items = (
    <div className="flex flex-col lg:flex-row gap-5">
      <Link className="text-lg text-gray-700 font-Poppins" to="/">
        Home
      </Link>
      <Link className="text-lg text-gray-700 font-Poppins" to="/instructors">
        Instructors
      </Link>
      <Link className="text-lg text-gray-700 font-Poppins" to="/classes">
        Classes
      </Link>
      {user && (
        <Link className="text-lg text-gray-700 font-Poppins" to="/dashboard">
          Dashboard
        </Link>
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
              className={`lg:w-28 lg:h-16 h-12 w-20 lg:ml-0 ${
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
          <div>
            {user ? (
              <>
                <div className="flex gap-2 cursor-pointer">
                  <span className="text-white mr-0 lg:mr-3 ">
                    {" "}
                    <img
                      src={user.photoURL}
                      title={user.displayName ? user.displayName : " "}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt=""
                    />
                  </span>
                  <motion.div
                  whileHover={{
                    scale : 1.1,
                    boxShadow : "0px 0px 8px rgba(255,255,255)",
                    textShadow : "0px 0px 8px rgba(255,255,255)"
                  }}
                    className="my-btn btn"
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
                    scale : 1.1,
                    boxShadow : "0px 0px 8px rgba(255,255,255)",
                    textShadow : "0px 0px 8px rgba(255,255,255)"
                  }}
                    className="btn my-btn"
                  >
                    Login
                  </motion.div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { FaWindowClose } from "react-icons/fa";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const [isInstructor] = useInstructor();
  console.log(isInstructor);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseDashboard = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <button
        onClick={handleToggleSidebar}
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 lg:left-20 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4  overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium  border-gray-200 dark:border-gray-700">
            <li className="mb-3">
              <a
                href="#"
                className="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                  <img
                    src="https://i.ibb.co/GTYH3pj/sports-academy.png"
                    className="lg:w-28 lg:h-16 h-12 w-20 ml-12 lg:ml-0"
                    alt=""
                  />
                </Link>
              </a>
            </li>

            {isAdmin ? (
              <div className="flex flex-col gap-3">
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/manageUsers"
                >
                  <span className="flex-1 ml-6 ">manage users</span>
                </ActiveLink>
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/manageClasses"
                >
                  <span className="flex-1 ml-6 ">Manage Classes</span>
                </ActiveLink>
              </div>
            ) : isInstructor ? (
              <div className="flex flex-col gap-3">
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/addClass"
                >
                  <span className="flex-1 ml-6 ">Add Class</span>
                </ActiveLink>
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/myClass"
                >
                  <span className="flex-1 ml-6 ">My Classes</span>
                </ActiveLink>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/selectedClasses"
                >
                  <span className="flex-1 ml-6 ">Selected Classes</span>
                </ActiveLink>
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/enrolledClasses"
                >
                  <span className="flex-1 ml-6 ">Enrolled Classes</span>
                </ActiveLink>
              </div>
            )}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li onClick={handleCloseDashboard}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <FaWindowClose className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaWindowClose>
                <span className="ml-3">Close</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

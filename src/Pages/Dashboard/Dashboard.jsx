import { useState } from "react";
// import logo from '../assets/logo.png';
// import { FaHome } from "react-icons/fa";
// import { HiAnnotation } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";
// import UseCart from '../Hook/UseCart';
// import useAdmin from '../Hook/useAdmin';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [cart] = UseCart();
  // console.log(cart);
  // const [isAdmin] = useAdmin();
  const isAdmin = true;
  const isInstructors = false; 
  const isUser = false;

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseDashboard = () => {
    // Logic to close the dashboard goes here
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
        id="separator-sidebar "
        className={`fixed top-0 lg:left-20 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4  overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            <li className="mb-3">
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                <img
                  src="https://i.ibb.co/GTYH3pj/sports-academy.png"
                  className="lg:w-28 lg:h-16 h-12 w-20 ml-12 lg:ml-0"
                  alt=""
                />
              </Link>
            </li>

            {isAdmin && (
              <div className="flex flex-col gap-3">
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/manageUsers"
                >
                  <span className="flex-1 ml-6 ">manage users</span>
                </ActiveLink>
                <ActiveLink onClick={handleCloseDashboard} to="/dashboard/manageClasses">
                  <span className="flex-1 ml-6 ">Mange Classes</span>
                </ActiveLink>
              </div>
            ) }
            {isInstructors && (
              <div className="flex flex-col gap-3">
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/addClass"
                >
                  <span className="flex-1 ml-6 ">Add Class</span>
                </ActiveLink>
                <ActiveLink onClick={handleCloseDashboard} to="/dashboard/myClass">
                  <span className="flex-1 ml-6 ">Add Items</span>
                </ActiveLink>
              </div>
            ) }
            {isUser && (
              <div className="flex flex-col gap-3">
                <ActiveLink
                  onClick={handleCloseDashboard}
                  to="/dashboard/addClass"
                >
                  <span className="flex-1 ml-6 ">Selected Classes</span>
                </ActiveLink>
                <ActiveLink onClick={handleCloseDashboard} to="/dashboard/myClass">
                  <span className="flex-1 ml-6 ">Enrolled classes</span>
                </ActiveLink>
              </div>
            ) }
          </ul>
        </div>
      </aside>

      <div className="p-4 ml- sm:ml-64">
        <div className="p-4  border-gray-200 w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

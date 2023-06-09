import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Pages/Dashboard/InstractorsDashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/InstractorsDashboard/MyClass/MyClass";
import ManageUser from "../Pages/Dashboard/AdminDashboard/MangaUsers/ManageUser";
import ManagesClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManagesClasses";
import EnrolledClasses from "../Pages/Dashboard/StudentDashboard/EnrolledClasses/EnrolledClasses";
import SelectedClasses from "../Pages/Dashboard/StudentDashboard/SelectedClasses/SelectedClasses";
import AdminPrivateRoute from "./AdminPrivateRoute";
import InstructorPrivateRoute from "./InstructorPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path : "/login",
        element : <Login></Login>
      }
    ],
  },
  {
    path : "/dashboard",
    element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children : [
      {
        path : "addClass",
        element : <InstructorPrivateRoute><AddClass></AddClass></InstructorPrivateRoute>
      },
      {
        path : "myClass",
        element : <InstructorPrivateRoute><MyClass></MyClass></InstructorPrivateRoute>
      },
      {
        path : "manageUsers",
        element : <AdminPrivateRoute><ManageUser></ManageUser></AdminPrivateRoute>
      },
      {
        path : "manageClasses",
        element : <AdminPrivateRoute><ManagesClasses></ManagesClasses></AdminPrivateRoute>
      },
      {
        path : "enrolledClasses",
        element : <PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>
      },
      {
        path : "selectedClasses",
        element : <PrivateRoute><SelectedClasses></SelectedClasses></PrivateRoute>
      }
    ]
  }
]);

export default router;

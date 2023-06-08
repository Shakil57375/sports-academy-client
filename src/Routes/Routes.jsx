import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Pages/Dashboard/InstractorsDashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/InstractorsDashboard/MyClass/MyClass";

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
        element : <AddClass></AddClass>
      },
      {
        path : "myClass",
        element : <MyClass></MyClass>
      }
    ]
  }
]);

export default router;

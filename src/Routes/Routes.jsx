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
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import AdminFeedBack from "../Pages/Dashboard/AdminDashboard/AdminFeedBack/AdminFeedBack";
import ShowFeedBack from "../Pages/Dashboard/InstractorsDashboard/ShowFeedBack/ShowFeedBack";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/Dashboard/StudentDashboard/SelectedClasses/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "manageUsers",
        element: (
          <AdminPrivateRoute>
            <ManageUser></ManageUser>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminPrivateRoute>
            <ManagesClasses></ManagesClasses>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "sendFeedback/:id",
        element: (
          <AdminPrivateRoute>
            <AdminFeedBack></AdminFeedBack>
          </AdminPrivateRoute>
        ),
      },
      // instructor routes
      {
        path: "addClass",
        element: (
          <InstructorPrivateRoute>
            <AddClass></AddClass>
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorPrivateRoute>
            <MyClass></MyClass>
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "seeFeedback/:id",
        element: (
          <InstructorPrivateRoute>
            <ShowFeedBack></ShowFeedBack>
          </InstructorPrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/showFeedback/${params.id}`),
      },
      // student routes
      {
        path: "selectedClasses",
        element: (
          <PrivateRoute>
            <SelectedClasses></SelectedClasses>
          </PrivateRoute>
        ),
      },
      {
        path : "payment/:id",
        element : <PrivateRoute><Payment></Payment></PrivateRoute>
      },
      {
        path: "enrolledClasses",
        element: (
          <PrivateRoute>
            <EnrolledClasses></EnrolledClasses>
          </PrivateRoute>
        ),
      },
      {
        path : "paymentHistory",
        element : <PaymentHistory></PaymentHistory>
      }
      
    ],
  },
]);

export default router;

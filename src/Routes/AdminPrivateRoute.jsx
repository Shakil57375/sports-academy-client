/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader/Loader";
import useAdmin from "../hooks/useAdmin";

const AdminPrivateRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading || isAdminLoading){
        return <Loader/>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{from : location}} replace></Navigate>
};

export default AdminPrivateRoute;
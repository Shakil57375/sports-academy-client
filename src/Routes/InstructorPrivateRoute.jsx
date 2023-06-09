/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader/Loader";
import useInstructor from "../hooks/useInstructor";
const InstructorPrivateRoute = ({children}) => {
    const [isInstructor, isInstructorLoading] = useInstructor();
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading || isInstructorLoading){
        return <Loader/>
    }
    if(user && isInstructor){
        return children
    }
    return <Navigate to="/" state={{from : location}} replace></Navigate>
};

export default InstructorPrivateRoute;
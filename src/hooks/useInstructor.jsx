import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecures from "./useAxiosSecures"

const useInstructor = () =>{ 
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecures()
    const {data : isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey : ["isInstructor", user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructor
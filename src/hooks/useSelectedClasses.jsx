import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecures from './useAxiosSecures';
import { useQuery } from '@tanstack/react-query';

const useSelectedClasses = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure]=useAxiosSecures();
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ["selectedClasses"],
        queryFn: async () => {
          const res = await axiosSecure.get( `/selectedClass?email=${user.email}`);
          return res.data;
        }
    })
    return[selectedClasses,refetch];

};

export default useSelectedClasses;
import { useQuery } from "@tanstack/react-query";
const useApprovedClass = () => {
  const {data : approvedClass = [], isLoading : loading} = useQuery({
    queryKey : ["approvedClass"],
    queryFn : async() =>{
      const res = await fetch("http://localhost:5000/approvedClass");
      return res.json()
    }
  })
  return [approvedClass, loading];
};

export { useApprovedClass };
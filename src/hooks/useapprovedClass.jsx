import { useQuery } from "@tanstack/react-query";
const useApprovedClass = () => {
  const {data : approvedClass = [], refetch, isLoading : loading} = useQuery({
    queryKey : ["approvedClass"],
    queryFn : async() =>{
      const res = await fetch("https://summer-camp-school-server-shakil57375.vercel.app/approvedClass");
      return res.json()
    }
  })
  return [approvedClass, refetch, loading];
};

export { useApprovedClass };
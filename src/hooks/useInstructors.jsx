import { useQuery } from "@tanstack/react-query";
const useInstructors = () => {
  const {data : instructors = [], isLoading : loading} = useQuery({
    queryKey : ["instructors"],
    queryFn : async() =>{
      const res = await fetch("https://summer-camp-school-server-shakil57375.vercel.app/instructors");
      return res.json()
    }
  })
  return [instructors, loading];
};

export { useInstructors };

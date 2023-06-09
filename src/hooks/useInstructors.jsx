import { useQuery } from "@tanstack/react-query";
const useInstructors = () => {
  const {data : instructor = [], isLoading : loading} = useQuery({
    queryKey : ["instructor"],
    queryFn : async() =>{
      const res = await fetch("http://localhost:5000/instructors");
      return res.json()
    }
  })
  return [instructor, loading];
};

export { useInstructors };

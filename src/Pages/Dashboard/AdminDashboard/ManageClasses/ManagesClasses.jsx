import ClassCards from "../ClassCards/ClassCards";
import { useQuery } from "@tanstack/react-query";

const ManagesClasses = () => {

const {data : classes = [], refetch } = useQuery({
    queryKey : ["instructor"],
    queryFn : async() =>{
      const res = await fetch("http://localhost:5000/classes");
      return res.json()
    }
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {classes.map((singleClass) => (
        <div key={singleClass._id}>
          <ClassCards singleClass={singleClass} refetch = {refetch} />
        </div>
      ))}
      
    </div>
  );
};

export default ManagesClasses;

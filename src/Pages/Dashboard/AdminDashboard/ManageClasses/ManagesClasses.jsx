import { Helmet } from "react-helmet-async";
import ClassCards from "../ClassCards/ClassCards";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

const ManagesClasses = () => {
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");
      return res.json();
    },
  });

  return (
    <motion.div
      initial={{ y: -3350 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-5"
    >
      <Helmet>
        <title>Sports Academy | Dashboard | Manages Classes</title>
      </Helmet>
      {classes.map((singleClass) => (
        <div key={singleClass._id}>
          <ClassCards singleClass={singleClass} refetch={refetch} />
        </div>
      ))}
    </motion.div>
  );
};

export default ManagesClasses;

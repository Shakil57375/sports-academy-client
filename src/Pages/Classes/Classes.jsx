/* eslint-disable no-unused-vars */
import { useApprovedClass } from "../../hooks/useapprovedClass";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ApprovedCards from "./ApprovedCards";
const Classes = () => {
  const [approvedClass] = useApprovedClass();
  console.log(approvedClass);
  return (
    <motion.div
    initial={{ y: -3350 }}
    animate={{ y: 0 }}
    transition={{ delay: 1, type: "spring", stiffness: 50 }}
     className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
      <Helmet>
        <title>Sports Academy | Classes</title>
      </Helmet>
      {approvedClass.map((singleClass) => (
        <div key={singleClass._id}>
          <ApprovedCards singleClass={singleClass}></ApprovedCards>
        </div>
      ))}
    </motion.div>
  );
};

export default Classes;

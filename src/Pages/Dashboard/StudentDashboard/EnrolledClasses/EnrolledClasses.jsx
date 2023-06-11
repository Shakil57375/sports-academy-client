import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
const EnrolledClasses = () => {
  return (
    <motion.div
      initial={{ y: 3350 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 50 }}
    >
      <Helmet>
        <title>Sports Academy | Dashboard | Enrolled Classes</title>
      </Helmet>
      <p>My enrolled Classes</p>
    </motion.div>
  );
};

export default EnrolledClasses;

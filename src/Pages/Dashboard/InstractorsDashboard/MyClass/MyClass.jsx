import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const { data: MyClasses = [] } = useQuery({
    queryKey: ["approvedClass"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/class?email=${user.email}`
      );
      return res.json();
    },
  });
  console.log(MyClasses);
  return (
    <motion.div
    initial={{ y: -3350 }}
    animate={{ y: 0 }}
    transition={{ delay: 1, type: "spring", stiffness: 50 }}
     className="w-full">
      <Helmet>
        <title>Sports Academy | Dashboard | My classes</title>
      </Helmet>
      <h3 className="text-3xl font-bold my-6 text-center text-cyan-500">
        {
          MyClasses.length < 0 ? "You didn't added any class yet" : `Your have Added   ${MyClasses.length} class successfully`
        }
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>price</th>
              <th>Status</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            {MyClasses.map((Classes, index) => (
              <tr key={Classes._id}>
                <th>{index + 1}</th>
                <td>{Classes.className}</td>
                <td>{Classes.price}</td>
                <td className="ml-4">
                  <p>{Classes.status}</p>
                </td>
                <td>
                  {/* TODO make it dynamic */}
                  <p>1</p>
                </td>
                <td>
                  <Link to={`/dashboard/seeFeedback/${Classes._id}`}>
                    <button className="btn btn-primary">Feedback</button>
                  </Link>
                </td>
                <td>
                  <FaEdit />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default MyClass;

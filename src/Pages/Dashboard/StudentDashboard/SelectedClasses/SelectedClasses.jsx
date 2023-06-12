import { FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const SelectedClasses = () => {
  const [selectedClasses,refetch] = useSelectedClasses();
  const {user} = useContext(AuthContext)
  const handleDelete = (Classes) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-school-server-shakil57375.vercel.app/selectedClass/${Classes._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            Swal.fire(
              "Deleted!",
              `${Classes.className} Class deleted successfully has been deleted.`,
              "success"
            );
          });
      }
    });
  };
  return (
    <motion.div
      initial={{ y: 3350 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 50 }}
    >
      <Helmet>
        <title>Sports Academy | Dashboard | Selected Class</title>
      </Helmet>
      <p className="text-center text-4xl font-bold mb-4 font-Marcellus mt-3">Welcome {user.displayName}</p>
      <p className="lg:text-5xl font-Marcellus font-bold lg:mb-7 mb-3 text-cyan-500 text-center text-xl">
        {selectedClasses.length === 0
          ? "You didn't added any class yet add know!"
          : `Your have Added  ${selectedClasses.length} class successfully`}
      </p>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>price</th>
              <th>Available Seats</th>
              <th>instructor Email</th>
              <th>instructor Name</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((Classes, index) => (
              <tr key={Classes._id}>
                <th>{index + 1}</th>
                <td>{Classes.className}</td>
                <td>{Classes.price}</td>
                <td className="text-center">{Classes.AvailableSeats}</td>
                <td>
                  {Classes.instructorName}
                </td>
                <td>{Classes.instructorEmail}</td>
                <td>
                  <Link to={`/dashboard/payment/${Classes.classId}`}>
                    <button className="my-btn">Pay</button>
                  </Link>
                </td>
                <td>
                  <FaTrashAlt
                    onClick={() => handleDelete(Classes)}
                    className="text-red-600 w-5 h-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default SelectedClasses;

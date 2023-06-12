/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import "./ManageUser.css";
import Swal from "sweetalert2";
import useAxiosSecures from "../../../../hooks/useAxiosSecures";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const ManageUser = () => {
  const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecures()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then((data) => {
        if (data.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (user) => {
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
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            Swal.fire("Deleted!", "User file has been deleted.", "successfully");
          });
      }
    });
  };

  return (
    <motion.div 
    initial={{ y: -3350 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
    >
      <div className="w-full">
        <Helmet>
          <title>Sports Academy | Dashboard | Manage users</title>
        </Helmet>
        <h3 className="text-3xl my-4 text-center mb-10 font-bold">
          Total Users: {users.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="ml-4">
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        title="make admin"
                        onClick={() => handleMakeAdmin(user)}
                        className="my-btn  bg-cyan-600  text-white"
                      >
                        <img
                          src="https://i.ibb.co/6RBRBjx/image-removebg-preview-6.png"
                          alt=""
                          className="pointer  filter-invert w-6 h-6 text-white"
                        />
                      </button>
                    )}
                  </td>
                  <td>
                    {user.role === "instructor" ? (
                      "instructor"
                    ) : (
                      <button
                        title="make instructor"
                        onClick={() => handleMakeInstructor(user)}
                        className=" my-btn ml-3 bg-cyan-600 text-white"
                      >
                        <img
                          src="https://i.ibb.co/vBmpRL5/image-removebg-preview-5.png"
                          alt=""
                          className="pointer filter-invert w-6 h-6 text-white"
                        />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default ManageUser;

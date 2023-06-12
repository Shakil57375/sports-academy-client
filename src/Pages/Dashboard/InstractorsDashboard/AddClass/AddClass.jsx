import { useContext } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecures from "../../../../hooks/useAxiosSecures";
import { Helmet } from "react-helmet-async";
const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecures();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const {
      AvailableSeats,
      className,
      image,
      instructorEmail,
      instructorName,
      price,
    } = data;
    const newData = {
      className: className,
      image: image,
      instructorEmail: instructorEmail,
      instructorName: instructorName,
      price: parseFloat(price),
      AvailableSeats: parseFloat(AvailableSeats),
      status: "pending",
      enrolled: 0,
    };
    axiosSecure.post("/classes", newData).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You class has been added successfully",
          showConfirmButton: true,
          timer: 1500,
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
        <title>Sports Academy | Dashboard | Add Class</title>
      </Helmet>
      <h1 className="text-5xl font-Marcellus text-center font-bold mb-10">
        Add your class here
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex block justify-between gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-Poppins font-semibold">
              Class Name :
            </label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg font-Poppins px-5 py-2.5 mb-2"
              {...register("className", { required: true })}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-Poppins font-semibold">
              Class image url :
            </label>
            <input
              placeholder="Toys Photo URL"
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg font-Poppins px-5 py-2.5 mb-2"
              {...register("image", { required: true })}
            />
          </div>
        </div>
        <div className="md:flex block justify-between mt-3 gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-Poppins font-semibold">
              Instructor Name :
            </label>
            <input
              placeholder="Type here"
              readOnly
              defaultValue={user?.displayName}
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg font-Poppins px-5 py-2.5 mb-2"
              {...register("instructorName", { required: true })}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-Poppins font-semibold">
              Instructor Email :
            </label>
            <input
              placeholder="Type here"
              readOnly
              defaultValue={user?.email}
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg font-Poppins px-5 py-2.5 mb-2"
              {...register("instructorEmail", { required: true })}
            />
          </div>
        </div>
        <div className="md:flex block justify-between mt-3 gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-Poppins font-semibold">
              Price :
            </label>
            <input
              placeholder="Type here"
              type="number"
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg font-Poppins px-5 py-2.5 mb-2"
              {...register("price", { required: true })}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-Poppins font-semibold">
              Available seats :
            </label>
            <input
              placeholder="Type here"
              type="number"
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg font-Poppins px-5 py-2.5 mb-2"
              {...register("AvailableSeats", { required: true })}
            />
          </div>
        </div>
        <div className="w-full text-center my-5">
          <input className="my-btn " value="Add Your Class" type="submit" />
        </div>
      </form>
    </motion.div>
  );
};

export default AddClass;

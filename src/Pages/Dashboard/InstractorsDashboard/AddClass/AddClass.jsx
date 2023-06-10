import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecures from "../../../../hooks/useAxiosSecures";
const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecures()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axiosSecure.post("/classes", {...data, status : "pending"})
    .then(()=>{
      reset()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You class has been added successfully',
          showConfirmButton: true,
          timer: 1500
      });
    })
  };

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-10">Add your class here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="flex justify-between gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-semibold">Class Name :</label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2"
              {...register("className")}
            />
          </div>
          <div className="lg:w-1/2 w-full">
          <label className="text-lg font-semibold">Class image url :</label>
          <input
            placeholder="Toys Photo URL"
            className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2"
            {...register("image")}
          />
        </div>
        </div>
        <div className="flex justify-between mt-3 gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-semibold">Instructor Name :</label>
            <input
              placeholder="Type here"
              readOnly
              defaultValue={user?.displayName}
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2"
              {...register("instructorName")}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-semibold">Instructor Email :</label>
            <input
              placeholder="Type here"
              readOnly
              defaultValue={user?.email}
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2"
              {...register("instructorEmail")}
            />
          </div>
        </div>
        <div className="flex justify-between mt-3 gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-semibold">Price :</label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2"
              {...register("price")}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="text-lg font-semibold">Available seats :</label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2"
              {...register("AvailableSeats")}
            />
          </div>
        </div>
        <div className="w-full text-center my-5">
          <input
            className="my-btn "
            value="Add Your Class"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;

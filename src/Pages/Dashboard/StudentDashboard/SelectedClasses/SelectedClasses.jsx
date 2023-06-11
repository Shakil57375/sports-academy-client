import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass?email=${user.email}`
      );
      return res.json();
    },
  });
  console.log(selectedClasses);
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
        fetch(`http://localhost:5000/selectedClass/${Classes._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            Swal.fire(
                'Deleted!',
                `${Classes.className} Class deleted successfully has been deleted.`,
                'success'
              )
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Sports Academy | Dashboard | Selected Class</title>
      </Helmet>
      <p className="lg:text-5xl font-bold lg:mb-7 mb-3  text-center text-xl">You have {selectedClasses.length} selected classes</p>
      
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
                <td className="text-center">
                    {Classes.AvailableSeats}
                </td>
                <td>
                  {/* TODO make it dynamic */}
                  {Classes.instructorName}
                </td>
                <td>
                {Classes.instructorEmail}
                </td>
                <td>
                    <button className="my-btn">Pay</button>
                </td>
                <td>
                    <FaTrashAlt onClick={()=> handleDelete(Classes)} className="text-red-600 w-5 h-5"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;

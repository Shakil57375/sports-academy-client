/* eslint-disable no-unused-vars */
import { useContext } from "react";
import useAxiosSecures from "../../hooks/useAxiosSecures";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ApprovedCards = (singleClass) => {
  const [axiosSecure] = useAxiosSecures();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  // eslint-disable-next-line no-unused-vars
  const from = location.state?.from?.pathname || "/";
  const { image, className, instructorName, feedback, status, AvailableSeats, price, instructorEmail, _id } =
    singleClass.singleClass;
  const handleSelect = (data) => {
    if (user) {
      const selectedItem = {
        className,
        image,
        price,
        instructorName,
        instructorEmail,
        AvailableSeats,
        feedback,
        status,
        classId: _id,
        email: user.email,
      };
      axiosSecure.post("/selectedClasses", selectedItem)
      .then(data => {
        console.log("after posting new menu item.", data.data);
        if(data.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
    }
    else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state : {from : location}});
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="w-full h-[300px]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>Instructor : {instructorName}</p>
          <p>Available Sites : {AvailableSeats}</p>
          <p>Price : {price}</p>
          <button
            onClick={() => handleSelect(singleClass.singleClass)}
            className="my-btn"
            disabled = {AvailableSeats === 0 || isAdmin === true || isInstructor === true}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedCards;

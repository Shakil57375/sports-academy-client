/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecures from "../../../../hooks/useAxiosSecures";
import { Link } from "react-router-dom";

const ClassCards = ({ singleClass, refetch }) => {
  const [axiosSecure] = useAxiosSecures();
  const {
    image,
    className,
    status,
    _id,
    instructorName,
    instructorEmail,
    AvailableSeats,
    price,
  } = singleClass;
  console.log(singleClass);

  const handleApprove = async (id) => {
    const res = await axiosSecure.patch(`/classes/approve/${id}`);
    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "approved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeny = async (id) => {
    const res = await axiosSecure.patch(`/classes/deny/${id}`);
    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "denied",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="card w-[450px] h-[500px] bg-base-100 shadow-xl ">
        <figure className="relative">
          <img src={image} alt="Shoes" className="h-[250px] " />
        </figure>
        <div className="card-body">
          <h4 className="absolute top-[188px] -right-2 my-btn"> {status}</h4>
          <h2 className="card-title">{className}</h2>
          <p>{instructorName}</p>
          <p>{instructorEmail}</p>
          <p>{AvailableSeats}</p>
          <p>{price}</p>
          <div className="flex gap-5">
            <button
              onClick={() => handleApprove(_id)}
              className="btn btn-primary"
              disabled={status === "approved" || status === "denied"}
            >
              Approve
            </button>
            <button
              onClick={() => handleDeny(_id)}
              className="btn btn-primary"
              disabled={status === "approved" || status === "denied"}
            >
              Deny
            </button>
            <Link to={`/dashboard/sendFeedback/${_id}`}>
              <button className="btn btn-primary">Feedback</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCards;

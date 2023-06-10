import Swal from "sweetalert2";
import useAxiosSecures from "../../../../hooks/useAxiosSecures";

const ClassCards = ({ singleClass, refetch }) => {
  const [axiosSecure] = useAxiosSecures();
  const { image, className, status, _id } = singleClass;
  // const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleApprove = async (id) => {
    // setButtonDisabled(true); // Disable buttons
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
    // setButtonDisabled(true); // Disable buttons
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
      <div className="card w-[450px] h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="h-[250px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <h4>Status: {status}</h4>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex gap-5">
            <button
              onClick={() => handleApprove(_id)}
              className="btn btn-primary"
              disabled = {status === "approved" || status === "denied"}
              // disabled={buttonDisabled} // Disable button based on state
            >
              Approve
            </button>
            <button
              onClick={() => handleDeny(_id)}
              className="btn btn-primary"
              disabled = {status === "approved" || status === "denied"}
              // disabled={buttonDisabled} // Disable button based on state
            >
              Deny
            </button>
            <button className="btn btn-primary">Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCards;

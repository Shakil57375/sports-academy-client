/* eslint-disable react/prop-types */

const InstructorsCard = ({ instructor }) => {
//   console.log(instructor);
  const {image, name, email} = instructor
  console.log(image);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Instructor Name: {name}</h2>
        <p>Instructor Email: {email}</p>
      </div>
    </div>
  );
};

export default InstructorsCard;

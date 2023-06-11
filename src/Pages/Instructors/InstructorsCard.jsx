/* eslint-disable react/prop-types */

const InstructorsCard = ({ instructor }) => {

  return (
    <div className="card w-full h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={instructor.image} alt="Shoes" className="w-full h-[300px]" />
      </figure>
      <div className="card-body">
        <h2 className="lg:text-3xl text-xl font-bold text-center">
          {instructor.name}
        </h2>
        <p className="lg:text-2xl text-xl font-medium text-center text-cyan-600">
          {instructor.course}
        </p>
        <p className="lg:text-xl text-lg text-center text-sky-600">
          {instructor.email}
        </p>
      </div>
    </div>
  );
};

export default InstructorsCard;

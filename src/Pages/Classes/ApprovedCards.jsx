const ApprovedCards = (singleClass) => {
    const {image, className, instructorName, AvailableSeats, price} = singleClass.singleClass
    
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            className="w-full h-[300px]"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>Instructor : {instructorName}</p>
          <p>Available Sites : {AvailableSeats}</p>
          <p>Price : {price}</p>
          <button className="my-btn">Select</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedCards;

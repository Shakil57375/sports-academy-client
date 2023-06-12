/* eslint-disable react/prop-types */
import {motion} from "framer-motion"
const InstructorsCard = ({ instructor }) => {

  return (
    <motion.div 
    initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    transition={{delay : 1.3, duration : 1}}
     className="card w-full h-[550px] bg-base-100 shadow-xl">
      <figure>
        <img src={instructor.image} alt="Shoes" className="w-full h-[500px]" />
      </figure>
      <div className="card-body">
        <h2 className="lg:text-3xl text-xl font-Poppinsfont-bold text-center">
          {instructor.name}
        </h2>
        <p className="lg:text-2xl text-xl font-Poppinsfont-medium text-center text-cyan-600">
          {instructor.course}
        </p>
        <p className="lg:text-xl font-Poppinstext-lg font-Poppins text-center text-sky-600">
          {instructor.email}
        </p>
      </div>
    </motion.div>
  );
};

export default InstructorsCard;

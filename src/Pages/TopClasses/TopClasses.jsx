import { useQuery } from "@tanstack/react-query";
import useAxiosSecures from "../../hooks/useAxiosSecures";
import {motion} from "framer-motion"
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const TopClasses = () => {
  const [axiosSecure] = useAxiosSecures();
  const { data: topClasses = [] } = useQuery({
    queryKey: ["TopClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/topClasses");
      return res.data;
    },
  });
  console.log(topClasses);
  return (
    <div>
      <SectionTitle
        title={"Popular Classes"}
        subTitle={"Popular classes enrolled by the Students"}
      ></SectionTitle>
      <div className="grid my-20 grid-cols-1 lg:grid-cols-3 mt-16 gap-10">
        {topClasses.map((classes) => (
          <div key={classes._id}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="card w-full h-[450px] bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={classes.image}
                  alt="Shoes"
                  className="w-full h-[350px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="lg:text-3xl text-xl font-Poppins font-bold text-center">
                  {classes.className}
                </h2>
                <p className="lg:text-xl text-lg font-Poppins font-medium  text-center text-cyan-600">
                  Students Enrolled : {classes.enrolled}
                </p>
                <p className="lg:text-xl font-Poppins text-lg font-Poppins text-center text-sky-600">
                 Seats Available : {classes.AvailableSeats}
                </p>
                <p className="lg:text-xl font-Poppins text-lg font-Poppins text-center text-sky-600">
                 Contact : {classes.instructorEmail}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClasses;

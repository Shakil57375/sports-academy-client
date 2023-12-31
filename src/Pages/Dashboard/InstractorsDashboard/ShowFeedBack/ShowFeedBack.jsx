import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLoaderData, useNavigate } from "react-router-dom";

const ShowFeedBack = () => {
  const { register } = useForm();
  const navigate = useNavigate();
  const seeFeedback = useLoaderData();
  const { feedback } = seeFeedback;

  const handleClick = () => {
    navigate("/dashboard/myClass");
  };

  return (
    <motion.div
      initial={{ x: 2350 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 50 }}
    >
      <Helmet>
        <title>SportsMastery | Replied Feedback</title>
      </Helmet>

      <h1 className="text-xl font-Poppinsmt-5 mb-7 lg:mb-9 font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        Replied <span className="text-cyan-500">Feedback</span>
      </h1>

      <div className="mt-10 mb-8 mx-2 sm:mx-auto sm:w-full sm:max-w-sm p-4 md:p-7 rounded-lg shadow-gray-500 shadow-2xl dark:border-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-semibold font-mono leading-9 tracking-tight text-gray-900">
            Details
          </h2>
        </div>
        <form className="flex flex-col gap-5 mt-7">
          <div>
            <label className="block mb-3  text-lg font-Poppins font-medium text-gray-900 dark:text-white">
              Feedback Review :
            </label>
            <div className="input_group">
              <textarea
                readOnly
                defaultValue={feedback}
                className="input_text h-56 w-full"
                {...register("feedback")}
              />
            </div>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button
              type="submit"
              onClick={handleClick}
              className="w-full btn btn-outline btn-accent "
            >
              Close
            </button>
          </div>
        </form>

        {/* bottom */}
      </div>
    </motion.div>
  );
};

export default ShowFeedBack;

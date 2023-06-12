import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecures from "../../../../hooks/useAxiosSecures";
import { useQuery } from "@tanstack/react-query";
const EnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecures();
  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ["enrolledClasses"],
    queryFn: async () => {
      const res = await axiosSecure(`/enrolledStudent/${user?.email}`);
      return res.data;
    },
  });
  console.log(enrolledClasses);

  return (
    <motion.div
      initial={{ y: 3350 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 50 }}
    >
      <Helmet>
        <title>Sports Academy | Dashboard | Enrolled Classes</title>
      </Helmet>
      <SectionTitle
        title={"Enrolled Classes"}
        subTitle={"Your Enrolled Classes"}
      ></SectionTitle>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-7 lg:mb-10 mx-2 lg:mx-5">
        <table className="w-full  overflow-x-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4">
                Serial
              </th>
              <th scope="col" className="px-10 py-4">
                Class Name
              </th>
              <th scope="col" className="px-10 py-4 text-center">
                Student Email
              </th>
              <th scope="col" className="px-10 py-4 text-center">
                Instructor Name
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                Price
              </th>
              <th scope="col" className="px-10 py-4 text-center">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses?.map((selectedClass, index) => (
              <tr
                key={index}
                className="bg-white border-b font-semibold  text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4 text-center">{index + 1}</td>
                <th
                  scope="row"
                  className="flex items-center mt-2 px-8 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {/* for user image and name and email */}
                  <img
                    className="w-10 h-10 rounded-full"
                    src={selectedClass?.image}
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {selectedClass?.className}
                    </div>
                    <div className="font-normal text-gray-500">
                      SportsMastery
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4 ">
                  {/* for toy price */}
                  <button className=" rounded text-black ">
                    {selectedClass?.email}
                  </button>
                </td>

                <td className="px-6 py-4 ">
                  {/* for toy price */}
                  <button className=" rounded 0 w-full px-3 py-3 text-sm text-black ">
                    {selectedClass?.instructorName}
                  </button>
                </td>

                <td className="px-6 py-4 ">
                  {/* for toy price */}
                  <button className="rounded 0 w-full px-3 py-3 text-sm">
                    ${selectedClass?.price}
                  </button>
                </td>

                <td className="px-6 py-4 ">
                  {/* for enrol */}
                  <button className="rounded 0 w-full px-3 py-3 text-sm my-btn">
                    Successful
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default EnrolledClasses;

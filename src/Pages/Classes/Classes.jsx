/* eslint-disable no-unused-vars */
import { useApprovedClass } from "../../hooks/useapprovedClass";
import ApprovedCards from "./ApprovedCards";
const Classes = () => {
  const [approvedClass] = useApprovedClass();
  console.log(approvedClass);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
      {approvedClass.map((singleClass) => (
        <div key={singleClass._id}>
            <ApprovedCards singleClass = {singleClass}></ApprovedCards>
        </div>
      ))}
    </div>
  );
};

export default Classes;
